import React from 'react';
import { Button } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import { connect} from 'react-redux';
import {Modal,Grid,Row,Table} from 'react-bootstrap';
import '../css/ihover.css';

class View extends React.Component{
    constructor(){
        super();

        this.state = {
            show: false,
            viewData:[],
        }
    }

    close = () => {
        this.props.closeModal();
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.Edit && nextProps.Edit.id) {
            this.setState({
               viewData:nextProps.Edit,
            });
        }
    };

    render(){
        return (
            <div>
                <div className="modal-container" style={{ height: 200 }}>
                    <Modal
                        show={this.props.show}
                        onHide={this.close}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                View
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Grid>
                                <Row className="show-grid">
                                    <Table style={{width:'48%'}}>
                                        <tbody>
                                        <tr style={{borderTop:'10px solid white'}}>
                                            <td>
                                                <div className="ih-item circle effect18 left_to_right"><a href="#">
                                                    <div className="img"><img src={'http://localhost:8010/upload/' + this.state.viewData.profilePhoto} width={200} height={200} style={{borderRadius: '50%', marginTop: '5%', marginBottom: '5%'}}/></div>
                                                    <div className="info">
                                                        <div className="info-back">
                                                            <h3>{this.state.viewData.firstName}</h3>
                                                            <p>{this.state.viewData.lastName}</p>
                                                        </div>
                                                    </div></a></div>
                                            </td>
                                        </tr>
                                        <tr style={{borderTop:'ridge'}}>
                                            <th>First Name</th>
                                            <td>{this.state.viewData.firstName}</td>
                                        </tr>
                                        <tr style={{borderTop:'ridge'}}>
                                            <th>Last Name</th>
                                            <td>{this.state.viewData.lastName}</td>
                                        </tr>
                                        <tr style={{borderTop:'ridge'}}>
                                            <th>Gender</th>
                                            <td>{this.state.viewData.gender}</td>
                                        </tr>
                                        <tr style={{borderTop:'ridge'}}>
                                            <th>Hobby</th>
                                            <td>{this.state.viewData.hobby}</td>
                                        </tr>
                                        <tr style={{borderTop:'ridge'}}>
                                            <th>State</th>
                                            <td>{this.state.viewData.state}</td>
                                        </tr>
                                        <tr style={{borderTop:'ridge'}}>
                                            <th>City</th>
                                            <td>{this.state.viewData.city}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Row>
                            </Grid>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}
//http://gudh.github.io/ihover/dist/  Css Link
const mapStateToProps=(state)=>{return{
}};

const mapDispatchToProps=(dispatch)=>bindActionCreators({},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(View);

