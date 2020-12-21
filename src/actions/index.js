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