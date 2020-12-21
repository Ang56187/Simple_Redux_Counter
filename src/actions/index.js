export const incrementCount = (num) => {
    return{
        type: 'increment',
        payload: num
    }
}

export const decrementCount = (num) => {
    return{
        type: 'decrement',
        payload: num
    }
}

export const increment1Count = (num) => {
    return{
        type: 'increment1',
        payload: num
    }
}

export const decrement1Count = (num) => {
    return{
        type: 'decrement1',
        payload: num
    }
}

export const increment2Count = (num) => {
    return{
        type: 'increment2',
        payload: num
    }
}

export const decrement2Count = (num) => {
    return{
        type: 'decrement2',
        payload: num
    }
}

export const changeValue = (num) => {
    return{
        type: 'change_value',
        payload: num
    }
}