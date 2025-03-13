import { createContext, useReducer, useState, useContext } from 'react'
import { countReducer } from './state/countReducer'
import styles from './counter.module.css'

// Context
const CountContext = createContext()

// Counter
const Counter = () => {
    const { count } = useContext(CountContext)
    return <p>Counter: <span>{count}</span></p>
}

// Counter Buttons
const CounterButtons = () => {
    return <div className={styles.buttonWrapper}>
        <DecrementButton />
        <IncrementButton />
    </div>
}
const DecrementButton = () => {
    const { dispatch } = useContext(CountContext)
    
    return <button onClick={() => dispatch({ type: 'decrement' })}>Decrement -</button>
}
const IncrementButton = () => {
    const { dispatch } = useContext(CountContext)
    
    return <button onClick={() => dispatch({ type: 'increment' })}>Increment +</button>
}

// Counter Input
const CounterInput = () => {
    const [userCount, setUserCount] = useState()
    const { dispatch } = useContext(CountContext)

    return <div className={styles.inputWrapper}>
        <input type="number" onChange={(ev) => setUserCount(Number(ev.target.value)) }/>
        <button onClick={() => dispatch({ type: 'set', payload: userCount })}>Set</button>
    </div>
}

export const CounterApp = () => {
    const [count, dispatch] = useReducer(countReducer, 0)

    return <div className={styles.wrapper}>
        <CountContext.Provider value={{ count, dispatch }}>
            <Counter />

            <CounterButtons />
            
            <CounterInput />
        </CountContext.Provider>
    </div>
}