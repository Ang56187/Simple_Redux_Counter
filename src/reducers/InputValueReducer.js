
INITIAL_STATE = {value: 1}

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'change_value':
            return {value: parseInt(action.payload)};
        default:
            return state;

    };
}
