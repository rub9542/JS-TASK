import { combineReducers } from 'redux';


const INITIAL_STATE = {
    items: [
        {title: 'ssssssssssss',
        status:false},
        {title: 'Learn JavaScript',status:false},
        {title: 'Learn Django' ,
        status:false},
    ]
};

const todoReducer = (state=INITIAL_STATE, action) => {
    // state.items[1].status = true
    switch(action.type) {
        case 'ITEM_CREATED':
            return {...state,
                items: action.payload }
        
        case 'STATUS_CHANGED':

            return{
                ...state, 
                items: action.payload

            }        
            ;
        default:
            return state;
    }
};

export default combineReducers({
    todo: todoReducer,
})