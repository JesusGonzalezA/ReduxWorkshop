import { useReducer, useState } from 'react'
import { countReducer } from './state/countReducer'
import styles from './counter.module.css'

// Counter
const Counter = ({ count }) => <p>Counter: <span>{count}</span></p>

// Counter Buttons
const CounterButtons = ({ dispatch }) => {
    return <div className={styles.buttonWrapper}>
        <DecrementButton dispatch={dispatch} />
        <IncrementButton dispatch={dispatch} />
    </div>
}
const DecrementButton = ({ dispatch }) => <button onClick={() => dispatch({ type: 'decrement' })}>Decrement -</button>
const IncrementButton = ({ dispatch }) => <button onClick={() => dispatch({ type: 'increment' })}>Increment +</button>

// Counter Input
const CounterInput = ({ dispatch }) => {
    const [userCount, setUserCount] = useState()

    return <div className={styles.inputWrapper}>
        <input type="number" onChange={(ev) => setUserCount(Number(ev.target.value)) }/>
        <button onClick={() => dispatch({ type: 'set', payload: userCount })}>Set</button>
    </div>
}

export const CounterApp = () => {
    const [count, dispatch] = useReducer(countReducer, 0)

    return <div className={styles.wrapper}>
        <Counter count={count} />

        <CounterButtons dispatch={dispatch} />
        
        <CounterInput dispatch={dispatch} />
    </div>
}