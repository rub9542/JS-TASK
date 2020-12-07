import { combineReducers } from 'redux';



const INITIAL_STATE ={
    items:[
        {title:'Abdul', status:'incomplete', readonly:true},
        {title:'Rub', status:'incomplete',readonly:true},
        {title:'Irfan', status:'incomplete',readonly:true}
    ]
}

const todoReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'DATA_CREATED':
            return{
                ...state,
                items:action.payload
            }
        case 'STATUS_CHANGED':
            const temp= state.items[action.index]
            temp.status=action.payload
            const newitems=state.items
            const item= newitems.splice(action.index, 1)
            const newList=[...state.items,item[0]]
            // newitems[action.index]=temp
            return{
                ...state,
                items:newList
            }
        case 'CHANGE_INDEX':
            const temp1=state.items[action.index]
            temp1.status=action.payload
            const newitems1=state.items
            const item1=newitems1.splice(action.index,1)
            const newList1=[item1[0],...state.items]
            return{
                ...state,items:newList1
            }


        case 'REMOVE_INDEX':
            // const temp2= state.items[action.index]
            // temp.status=action.payload
            const newitems2=state.items
            newitems2.splice(action.index, 1)
            const newList2= [...newitems2]
            // const newList=[...state.items,item[0]]    
        return{
            ...state,
            items:newList2
            }
        
        case 'EDIT_INDEX':
            const temp2=state.items[action.index]
            temp2.readonly= !temp2.readonly
            const newList3= [...state.items]
            return{
                ...state,
                items:newList3
                }

        case 'TITLE_CHANGED':
            const temp3=state.items[action.index]
            temp3.title= action.payload  
            const newList4= [...state.items]
            return{
                ...state,
                items:newList4
            }      
            default: return state;
    }
}
export default combineReducers({
    todo: todoReducer,
})