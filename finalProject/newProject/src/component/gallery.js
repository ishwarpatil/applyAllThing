import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {gallerys, galleryData} from '../actions/auth';
import './gallery.css';
import '../css/ihover.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false,
            galleryPhoto: [],
            jsonObject: {},
            temp: [],
            info: {
                title: '',
                author: '',
            }
        };
    }

    handleHide() {
        this.setState({show: false});
    }

    componentWillMount() {
        this.props.galleryData();
    }

    handleFileChange = (e) => {
        let Arr = [];
        for (let i = 0; i < e.target.files.length; i++) {
            Arr.push(e.target.files[i]);
        }
        this.setState({
            galleryPhoto: Arr

        });
    };

    formHandler = (e) => {
        e.preventDefault();
        let Obj = new FormData();
        Obj.append('title', this.state.info.title);
        Obj.append('author', this.state.info.author);
        for (let i = 0; i < this.state.galleryPhoto.length; i++) {
            Obj.append('galleryPhoto', this.state.galleryPhoto[i]);
        }
        for (const [key, value]  of Obj.entries()) {
            this.state.jsonObject[key] = value;
        }
        console.log(this.state);
        this.props.gallerys(Obj, this.state.jsonObject);
        this.setState({
            show: false,
        });

        setTimeout(() => {
            this.props.history.push('/gallery');
        }, 1000);
    };

    changeHandler = (e) => {
        const {info} = this.state;
        info[e.target.name] = e.target.value;
        this.setState({info});
    };

    render() {
        return (
            <div>
                <div className="modal-container" style={{height: 200}}>
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={() => this.setState({show: true})}
                    >
                        Add Photos
                    </Button>

                    <Modal
                        show={this.state.show}
                        onHide={this.handleHide}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                Add Photos
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form encType="multipart/form-data">
                                <TextField
                                    name="title"
                                    onChange={this.changeHandler}
                                    hintText="Hint Text"
                                    floatingLabelText="Title"
                                />&nbsp;&nbsp;&nbsp;

                                <TextField
                                    name="author"
                                    onChange={this.changeHandler}
                                    hintText="Hint Text"
                                    floatingLabelText="Author"
                                />

                                <TextField name="profilePhoto" multiple="multiple" onChange={this.handleFileChange} type="file"
                                /><br/><br/>
                                <Button bsStyle="primary" bsSize="large" onClick={this.formHandler}>Upload</Button>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div>
                    {
                        this.props.Gallery.map((value, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="ih-item square effect2">
                                    <a href="#">
                                        <div className="img"><img className="img-responsive" src={'http://localhost:8010/Gallery/' + value.fileName}/></div>
                                        <div className="info">
                                            <h3>{value.title}</h3>
                                            <p>{value.author}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            // <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            //     <div className="hovereffect">
                            //         <img className="img-responsive"
                            //              src={'http://localhost:8010/Gallery/' + value.fileName}/>
                            //         <div className="overlay">
                            //             <h2>{value.title}</h2>
                            //             <a className="info" href="#">{value.author}</a>
                            //         </div>
                            //     </div>
                            // </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Gallery: state.gallery.galleryProfileData
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({gallerys, galleryData}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);


