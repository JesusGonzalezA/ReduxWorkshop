import { useReducer, useState } from 'react'
import { countReducer } from './state/countReducer'
import styles from './counter.module.css'

export const CounterApp = () => {
    const [count, dispatch] = useReducer(countReducer, 0)
    const [userCount, setUserCount] = useState()

    return <div className={styles.wrapper}>
        <p>Counter: <span>{count}</span></p>

        <div className={styles.buttonWrapper}>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement -</button>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment +</button>
        </div>

        <div className={styles.inputWrapper}>
            <input type="number" onChange={(ev) => setUserCount(Number(ev.target.value)) }/>
            <button onClick={() => dispatch({ type: 'set', payload: userCount })}>Set</button>
        </div>
    </div>
}