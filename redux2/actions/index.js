export const myTodo= (items)=>{
    return{
        type:'DATA_CREATED',
        payload:items
    };
};
export const statuschange =(items,index)=>{
    return{
        type:'status_changed',
        payload,
        index

    }
}