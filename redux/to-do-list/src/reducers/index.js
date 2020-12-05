import { combineReducers } from 'redux';


const INITIAL_STATE = {
    items: [
        {title: 'ssssssssssss',
        status:'incomplete'},
        {title: 'Learn JavaScript',status:'incomplete'},
        {title: 'Learn Django' ,
        status:'incomplete'},
    ]
};

const todoReducer = (state=INITIAL_STATE, action) => {
    // state.items[1].status = true
    switch(action.type) {
        case 'ITEM_CREATED':
            return {...state,
                items: action.payload }
        
        case 'STATUS_CHANGED':
            const temp= state.items[action.index]
            temp.status=action.payload
            const newitems= [...state.items]
            newitems[action.index]=temp
            return{
                ...state, 
                items: newitems

            }
        case "CHANGE_INDEX":
                    
            const newItems=state.items
            const item=newItems.splice(action.index,1)
            const newList=[...state.items,item[0]]
            return{
                ...state,
                items:newList
                // 8483094849
            }

        default:
            return state;
    }
};

export default combineReducers({
    todo: todoReducer,
})