import React from 'react';
import {getEmployee,deleteEmployee,orders} from './../actions/auth';
import {bindActionCreators} from 'redux';
import { connect} from 'react-redux';
import AddEmp from './addEmp';
import View from './view';
import {Button} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './component.css';
import {CSVLink, CSVDownload} from 'react-csv';

class PaginationHookTable  extends React.Component{
    constructor(){
        super();

        this.handleHide = this.handleHide.bind(this);

        this.options = {
            defaultSortName: 'firstName',
            defaultSortOrder: 'desc'
        };

        this.state = {
            p:[],
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
        this.setState({
            p:nextProps.Employees
        },()=>console.log(this.state.p));
    };

    componentWillMount(){
        this.props.getEmployee();
    }

    closeModal=()=>{
        this.setState({
            isActive:false,
            editData:[],
        })
    };

    data = [
        {
            id:1,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:2,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:3,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:4,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:5,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:6,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:7,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:8,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:9,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:10,
            firstName:'Rahul',
            lastName:'Namdev'
        },
        {
            id:11,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:12,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:13,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:14,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:15,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:16,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:17,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:18,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:19,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:20,
            firstName:'Rahul',
            lastName:'Namdev'
        },
        {
            id:21,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:22,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:23,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:24,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:25,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:26,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:27,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:28,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:29,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:30,
            firstName:'Rahul',
            lastName:'Namdev'
        },
        {
            id:31,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:32,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:33,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:34,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:35,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:36,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:37,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:38,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:39,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:40,
            firstName:'Rahul',
            lastName:'Namdev'
        },
        {
            id:41,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:42,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:43,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:44,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:45,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:46,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:47,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:48,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:49,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:50,
            firstName:'Rahul',
            lastName:'Namdev'
        },
        {
            id:51,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:52,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:53,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:54,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:55,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:56,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:57,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:58,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:59,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:60,
            firstName:'Rahul',
            lastName:'Namdev'
        },
        {
            id:61,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:62,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:63,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:64,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:65,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:66,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:67,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:68,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:69,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:70,
            firstName:'Rahul',
            lastName:'Namdev'
        },
        {
            id:71,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:72,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:73,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:74,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:75,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:76,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:77,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:78,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:79,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:80,
            firstName:'Rahul',
            lastName:'Namdev'
        },
        {
            id:81,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:82,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:83,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:84,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:85,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:86,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:87,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:88,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:89,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:90,
            firstName:'Rahul',
            lastName:'Namdev'
        },
        {
            id:91,
            firstName:'Ishwar',
            lastName:'Patil'
        },
        {
            id:92,
            firstName:'Dipesh',
            lastName:'Mali'
        },
        {
            id:93,
            firstName:'Nehal',
            lastName:'Guhlane'
        },
        {
            id:94,
            firstName:'Shubham',
            lastName:'Godbole'
        },
        {
            id:95,
            firstName:'Abhinav',
            lastName:'Devkar'
        },
        {
            id:96,
            firstName:'Hitesh',
            lastName:'Warake'
        },
        {
            id:97,
            firstName:'Prashanat',
            lastName:'Patel'
        },
        {
            id:98,
            firstName:'Mayur',
            lastName:'patil'
        },
        {
            id:99,
            firstName:'Manoj',
            lastName:'Bhausar'
        },
        {
            id:100,
            firstName:'Rahul',
            lastName:'Namdev'
        },
    ];

    render(){
        return (
            <div>

                <br /><CSVLink data={this.data} ><Button bsStyle="primary" style={{marginLeft:'-31%'}}><span class="glyphicon glyphicon-export"></span>&nbsp;&nbsp;&nbsp;Export To CSV</Button></CSVLink>

                <div style={{marginLeft:'30%',width:'50%'}}>
                    <BootstrapTable ref='table' data={ this.data } pagination options={ this.options }>
                        <TableHeaderColumn dataField='id' isKey dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>Id</TableHeaderColumn>
                        <TableHeaderColumn dataField='firstName' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>First Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='lastName' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>Last Name</TableHeaderColumn>
                    </BootstrapTable>
                </div>

                <AddEmp show={this.state.isActive} closeModal={this.closeModal} Edit={this.state.editData} />
                <View show={this.state.show} closeModal={this.handleHide} Edit={this.state.editData} />

                <form action="your-server-side-code" method="POST">
                    <script
                        src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                        data-key="pk_test_UdoRNiwa9U5z7Q1kTKjet2xR"
                        data-amount="999"
                        data-name="Lanetteam"
                        data-description="Example charge"
                        data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                        data-locale="auto">
                    </script>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{return{
    Employees:state.employee.Employee
}};

const mapDispatchToProps=(dispatch)=>bindActionCreators({getEmployee,deleteEmployee,orders},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(PaginationHookTable );