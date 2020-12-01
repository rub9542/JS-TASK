// Action Creator

export const createToDo = (items) => {
    //Return the action
    return {
        type: 'ITEM_CREATED',
        payload: items
    };
};

export const changeStatus = (payload) => {
    //Return the action
    // console.log(1222)
    return {

        type: 'STATUS_CHANGED',
        payload
    };

};


// export const statuschange = (payload,index) => (
//     //Return the action
//     {
//         type: 'STATUS_CHANGED',
//         payload,
//         index
//     }
// )

