// Action Creator

export const createToDo = (items) => {
    //Return the action
    return {
        type: 'ITEM_CREATED',
        payload: items
    };
};

export const changeStatus = (payload,index) => {
    //Return the action
    // console.log(';kelrfv.vc')
    return {

        type: 'STATUS_CHANGED',
        payload,
        index
    };

};


export const changeIndex = (index) => (
    //Return the action
    {
        type: 'CHANGE_INDEX',
        
        index
    }
)

