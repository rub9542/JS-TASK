import {combineReducers} from 'redux';

const INITIAL_STATE ={
    items:[
        // {
        //     title:'abdul',status:'incomplete'
        // },
        // {
        //     title:'Vinayak',status:'incomplete'
        // },
        // {
        //     title:'ashish',status:'incomplete'
        // },
    ]
}

const todoReducer= (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'DATA_CREATED':
            return{
                ...state,
                items:action.payload
            };
        case 'status_changed':
            return{
                ...state,
                items:action.payload
            }
            default: 
            return state
    }
}

export default combineReducers({todo:todoReducer,})