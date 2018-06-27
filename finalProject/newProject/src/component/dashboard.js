import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './component.css';

class Dashboard extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render(){
        return(
            <div>
                <AppBar
                    title="Inventory Management For Sophio Automotive E-Commerce"
                    onLeftIconButtonClick={this.handleToggle}
                >
                    <h3>Home</h3>
                    <h3 style={{marginLeft:'2%'}}><NavLink to="/gallery">Gallery</NavLink></h3>
                    <h3 style={{marginLeft:'2%'}}>About</h3>
                    <h3 style={{marginLeft:'2%'}}>Contact</h3>
                </AppBar>

                <div className="dash">
                    <Drawer width={200} openSecondary={false} open={this.state.open}>
                        <AppBar
                            title="Admin"
                            onLeftIconButtonClick={()=>{
                                this.setState({
                                    open:false
                                })
                            }}/>
                        <NavLink to="/"><MenuItem><span class="glyphicon glyphicon-envelope" style={{fontSize:'25px'}}></span>&nbsp;&nbsp;&nbsp;DashBoard</MenuItem></NavLink>
                        <NavLink to="/addEmp"><MenuItem><span class="glyphicon glyphicon-th" style={{fontSize:'25px'}}></span>&nbsp;&nbsp;&nbsp;Add Employees</MenuItem></NavLink>
                        <NavLink to="/getEmp"><MenuItem><span class="glyphicon glyphicon-user" style={{fontSize:'25px'}}></span>&nbsp;&nbsp;&nbsp;Employees</MenuItem></NavLink>
                        <NavLink to="/addToCard"><MenuItem><span class="glyphicon glyphicon-home" style={{fontSize:'25px'}}></span>&nbsp;&nbsp;&nbsp;Add To Card</MenuItem></NavLink>
                        <NavLink to="/MaterialUiform"><MenuItem><span class="glyphicon glyphicon-inbox" style={{fontSize:'25px'}}></span>&nbsp;&nbsp;&nbsp;Redux Form</MenuItem></NavLink>
                        <NavLink to="/form"><MenuItem><span class="glyphicon glyphicon-book" style={{fontSize:'25px'}}></span>&nbsp;&nbsp;&nbsp;Checkout Form</MenuItem></NavLink>
                        <NavLink to="/reactTable"><MenuItem><span class="glyphicon glyphicon-picture" style={{fontSize:'25px'}}></span>&nbsp;&nbsp;&nbsp;React Table</MenuItem></NavLink>
                        <NavLink to="/dragDrop"><MenuItem><span class="glyphicon glyphicon-bookmark" style={{fontSize:'25px'}}></span>&nbsp;&nbsp;&nbsp;Drag Drop</MenuItem></NavLink>
                        <NavLink to="/reactBootstrapTable"><MenuItem><span class="glyphicon glyphicon-list-alt" style={{fontSize:'25px'}}></span>&nbsp;&nbsp;&nbsp;React Bootstrap Table</MenuItem></NavLink>
                    </Drawer>
                </div>
            </div>
        )
    }
}

export default Dashboard;


