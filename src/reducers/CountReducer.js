const INITIAL_STATE = {count:0,inner_counter1:1, inner_counter2: 2};
//const INITIAL_STATE = {inner_counter1:1,inner_counter2: 2};

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'increment':
            return {...state,count: state.count+action.payload};
        case 'decrement':
            return {...state,count: state.count-action.payload};
        case 'increment1':
            return {...state,inner_counter1: state.inner_counter1+action.payload};
        case 'decrement1':
            return {...state,inner_counter1: state.inner_counter1-action.payload};
        case 'increment2':
            return {...state,inner_counter2: state.inner_counter2+action.payload};
        case 'decrement2':
            return {...state,inner_counter2: state.inner_counter2-action.payload};
        default:
            return state;
    }
}