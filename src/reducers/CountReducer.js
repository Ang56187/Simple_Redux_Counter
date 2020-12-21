const INITIAL_STATE = {count:0};

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'increment':
            return {count: state.count+action.payload};
        case 'decrement':
            return {count: state.count-action.payload};
        default:
            return state;
    }
}