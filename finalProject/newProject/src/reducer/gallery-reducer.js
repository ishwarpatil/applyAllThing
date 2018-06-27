import _ from 'lodash';

export const GALLERY='gallery';
export const GALLERYDATA='gallerydata';
const initialState={
    galleryProfileData:[]
};

export default (state=initialState,action)=>{
    switch (action.type){
        case GALLERY:
            debugger;
            const {data} = state;
            data.push(action.payload.galleryPhoto.name);
            return { ...state,galleryProfileData:_.cloneDeep(data)};
        case GALLERYDATA:
            return { ...state,galleryProfileData:_.cloneDeep(action.payload)};
        default:
            return state;
    }
}