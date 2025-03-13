const sleep = async () => await new Promise(r => setTimeout(r, 2000))

export const api = {
    increment: async (currentValue) => {
        await sleep()
        return currentValue + 1
    },
    decrement: async (currentValue) => {
        await sleep()
        return currentValue - 1
    },
    set: async (newValue) => {
        await sleep()
        return newValue
    }
}