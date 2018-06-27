import _ from 'lodash';
export const ADDEMPLOYEE='addemployee';
export const GETEMPLOYEE='getemployee';
export const DELETEEMPLOYEE='deleteemployee';
export const EDITEMPLOYEE='editemployee';
export const ORDER='order';
export const ORDERSDISPLAY='ordersdisplay';

const initialState={
    Employee:[],
    orderEmployee:[],
};

export default (state=initialState,action)=>{
    switch (action.type){
        case ADDEMPLOYEE:
            debugger;
            const data = state.Employee;
            data.push(action.payload);
            return {...state,Employee:_.cloneDeep(data)};
        case ORDER:
            debugger;
            //return {...state,orderEmployee:_.cloneDeep(action.payload)};
        case ORDERSDISPLAY:
            debugger;
            return {...state,orderEmployee:_.cloneDeep(action.payload)};
        case GETEMPLOYEE:
            return {...state,Employee:_.cloneDeep(action.payload)};
        case DELETEEMPLOYEE:
            const delEmp = state.Employee;
            const index = _.findIndex(delEmp, {'id': action.payload});
            delEmp.splice(index,1);
            return { ...state,Employee:_.cloneDeep(delEmp)};
        case EDITEMPLOYEE:
            debugger;
            const updateEmp = state.Employee;
            const findid = action.payload;
            const indexfind = _.findIndex(updateEmp, {'id': findid.id});
            updateEmp[indexfind] = action.payload;
            return { ...state,Employee:_.cloneDeep(updateEmp)};
        default:
            return state;
    }
}