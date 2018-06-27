import React from 'react';
import { Button } from 'react-bootstrap';
import ReactTable from "react-table";
import _ from "lodash"
import "react-table/react-table.css";
import {getEmployee,deleteEmployee} from './../actions/auth';
import {bindActionCreators} from 'redux';
import { connect} from 'react-redux';

class GetEmp extends React.Component{
    constructor(){
        super();

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            data: [],
            pages: null,
            loading: true,
            show: false,
            isActive:false,
            editData:[],
            viewId:'',
            id:'',
            stateId:'',
            city:'',
            profilePhoto:'',
            addEmp:{
                firstName:'',
                lastName:'',
                gender:'',
                hobby:[],
            },
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '300px',
        }
    }

    handleHide() {
        this.setState({ show: false });
    }

    componentWillReceiveProps(nextProps){

    };

    componentWillMount(){
        this.props.getEmployee();
    }

    componentDidMount(){
    }

    toggleActive=()=>{
        this.setState({
            isActive:!this.state.isActive,
        });
    };

    closeModal=()=>{
        this.setState({
            isActive:false,
            editData:[],
        })
    };

    initial = () => {
        this.props.deleteEmployee(this.state.id);
    };

    deleteEmp = (empId) => {
        this.setState({
            id:empId,
        },()=>{
            this.initial();
        })
    };

    viewData = (id) => {
      this.setState({
         viewId:id,
      });
    };

    render(){

        const rawData = this.props.Employees;

        const requestData = (pageSize, page, sorted, filtered) => {
            return new Promise((resolve, reject) => {
                // You can retrieve your data however you want, in this case, we will just use some local data.
                let filteredData = rawData;

                // You can use the filters in your request, but you are responsible for applying them.
                if (filtered.length) {
                    filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
                        return filteredSoFar.filter(row => {
                            return (row[nextFilter.id] + "").includes(nextFilter.value);
                        });
                    }, filteredData);
                }
                // You can also use the sorting in your request, but again, you are responsible for applying it.
                const sortedData = _.orderBy(
                    filteredData,
                    sorted.map(sort => {
                        return row => {
                            if (row[sort.id] === null || row[sort.id] === undefined) {
                                return -Infinity;
                            }
                            return typeof row[sort.id] === "string"
                                ? row[sort.id].toLowerCase()
                                : row[sort.id];
                        };
                    }),
                    sorted.map(d => (d.desc ? "desc" : "asc"))
                );

                // You must return an object containing the rows of the current page, and optionally the total pages number.
                const res = {
                    rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
                    pages: Math.ceil(filteredData.length / pageSize)
                };

                // Here we'll simulate a server response with 500ms of delay.
                setTimeout(() => resolve(res), 500);
            });
        };

        const fetchData = (state, instance) => {
            // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
            // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
            this.setState({ loading: true });
            // Request the data however you want.  Here, we'll use our mocked service we created earlier
            requestData(
                state.pageSize,
                state.page,
                state.sorted,
                state.filtered
            ).then(res => {
                // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
                this.setState({
                    data: res.rows,
                    pages: res.pages,
                    loading: false
                });
            });
        }

        return (

            <div>
                <ReactTable
                    columns={[
                        {
                            Header: "First Name",
                            accessor: "firstName"
                        },
                        {
                            Header: "Last Name",
                            accessor: "lastName"
                        },
                    ]}
                    manual // Forces table not to paginate or sort automatically, so we can handle it server-side
                    data={this.state.data}
                    pages={this.state.pages} // Display the total number of pages
                    loading={this.state.loading} // Display the loading overlay when we need it
                    onFetchData={fetchData} // Request new data when things change
                    filterable
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{return{
    Employees:state.employee.Employee
}};

const mapDispatchToProps=(dispatch)=>bindActionCreators({getEmployee,deleteEmployee},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(GetEmp);