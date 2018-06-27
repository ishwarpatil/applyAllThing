import React from 'react';
import Enzyme, { shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedLogin,{Login} from './login';
import configureStore from 'redux-mock-store'
import {MemoryRouter} from 'react-router-dom';
import 'mock-local-storage';
Enzyme.configure({adapter: new Adapter()});
const props = {
    login: jest.fn(),
    LoginUser: jest.fn(),
    userData: {
        msg:'success',
    },
    history:{
        push:jest.fn()
    },
    onChange : jest.fn(),
    onClick : jest.fn()
};

describe('Login component', () => {
    let component, inst;

    beforeEach(() => {
        localStorage.setItem('userEmail','sagar@gmail.com');
        component = mount(<MemoryRouter><Login {...props} /></MemoryRouter>).find('Login');
        inst = component.instance();
        inst.setState({ userValues: {username: "", password: ""}})
    });

    it('component should render', () => {
        // console.log(component.html());
        // const expectedHtml = "";
        // expect(component.html()).toEqual(expectedHtml);
        //console.log(shallow(<Login />).html());
    });

    it('should render Login', () => {
        const loginWrapper = component.find('.materialContainer');
        expect(loginWrapper.length).toBe(1);
        const loginButton = component.find('button #buttonLogin');
        expect(loginButton.length).toBe(1);

        localStorage.setItem('userEmail','');
        loginButton.simulate('click');
        expect(inst.state.message).toEqual('UserName or Password Invalid');

        inst.setState({ userValues: {username: "sagar@gmail.com", password: "lanetteam1"}});
        localStorage.setItem('userEmail','sagar@gmail.com');
        loginButton.simulate('click');
        expect(inst.state.message).toEqual("success");

        // inst.setState({ userValues: {username: "sagar@gmail.com", password: "lanetteam1"}});
        // loginButton.simulate('click');
        // expect(inst.props.userData.msg).toEqual("success");
        // loginButton.simulate('click');
        // expect(props.LoginUser).toHaveBeenCalled();
        // expect(inst.props.userData.user.msg).toEqual("success");
        //expect(props.history.push).toHaveBeenCalledWith('/login');
    });

});

// describe('Login Store', () => {
//     let component, inst;
//     const initialState = {userData:''};
//     const mockStore = configureStore();
//     let store,container;
//
//     beforeEach(() => {
//         localStorage.setItem('userEmail','sagar@gmail.com');
//         store = mockStore(initialState);
//         component = mount(<ConnectedLogin store={store} /> );
//         inst=component.instance();
//     });
//
//
//     it('render the connected(SMART) component', () => {
//         //expect(container.length).toEqual(1)
//     });
// });
