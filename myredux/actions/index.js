export const myTodo = (items)=>{
    return{
        type:'DATA_CREATED',
        payload:items
    }
}
export const statusChange =(payload,index)=>{
    return{
        type: 'STATUS_CHANGED',
        payload,
        index
    }
}

export const changeIndex =(payload,index) =>(
    {
        type:'CHANGE_INDEX',
        payload,
        index
    }
)

export  const removeIndex = (index)=>(
    console.log('remove clicked'),
    {
        type:'REMOVE_INDEX',
        index
}
)

export  const isEdit = (index)=>(
    console.log('edit clicked'),
    {
        type:'EDIT_INDEX',
        index
}
)

export const changeTitle =(payload,index) =>(
    console.log('title changed', payload),
    {
        type:'TITLE_CHANGED',
        payload,
        index
    }
)