import React from 'react';
import {getEmployee,deleteEmployee,orders,ordersDisplay} from './../actions/auth';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import { connect} from 'react-redux';
import AddEmp from './addEmp';
import View from './view';
import {
    SortableContainer,
    SortableElement,
    SortableHandle,
    arrayMove,
} from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <td><span class="glyphicon glyphicon-move"></span></td>);

const SortableItem = SortableElement(({value,index}) => {
    return (
        <tr>
            <td><DragHandle/></td>
            <td>{value.firstName}</td>
            <td>{value.lastName}</td>
            <td>{value.gender}</td>
            <td>{value.city}</td>
        </tr >

    );
});

const SortableList = SortableContainer(({items}) => {
    return (
        <tBody>
            {items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} value={value} />
            )}
        </tBody>
    )
});

class GetEmp extends React.Component{
    constructor(){
        super();

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            p:[],
            op:[],
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

    onSortEnd = ({oldIndex, newIndex}) => {
        if(this.state.op.length===0){
            const {p} = this.state;
            this.setState({
                p: arrayMove(p, oldIndex, newIndex),
            });
            this.props.orders(this.state.p);
        }else{
            const {op} = this.state;
            this.setState({
                op: arrayMove(op, oldIndex, newIndex),
            });
            this.props.orders(this.state.op);
        }
    };

    handleHide() {
        this.setState({ show: false });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            p:nextProps.Employees,
            op:nextProps.Employees1
        });
    };

    componentWillMount(){
        this.props.getEmployee();
        this.props.ordersDisplay();
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
        return (
            <div
            >
                <Table style={{width:'50%',marginLeft:'20%'}}  striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Priority</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    {
                        this.state.op.length===0?
                        <SortableList items={this.state.p}
                                      onSortEnd={this.onSortEnd}
                                      useDragHandle={true} />:
                            <SortableList items={this.state.op}
                                          onSortEnd={this.onSortEnd}
                                          useDragHandle={true} />
                    }
                </Table>
                <AddEmp show={this.state.isActive} closeModal={this.closeModal} Edit={this.state.editData} />
                <View show={this.state.show} closeModal={this.handleHide} Edit={this.state.editData} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{return{
    Employees:state.employee.Employee,
    Employees1:state.employee.orderEmployee
}};

const mapDispatchToProps=(dispatch)=>bindActionCreators({getEmployee,deleteEmployee,orders,ordersDisplay},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(GetEmp);