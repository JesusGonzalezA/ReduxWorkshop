export const countReducer = (count, action) => {
    switch (action.type) {
        case 'increment':
            return count + 1
        case 'decrement':
            return count - 1
        case 'set':
            return action.payload
    }
}