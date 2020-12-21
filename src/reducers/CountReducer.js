const INITIAL_STATE = {count:0};

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'increment':
            return {count: state.count+1};
        case 'decrement':
            return {count: state.count-1};
        default:
            return state;
    }
}