import { useState } from 'react'
import styles from './counter.module.css'

export const CounterApp = () => {
    const [count, setCount] = useState(0)
    const [userCount, setUserCount] = useState()

    return <div className={styles.wrapper}>
        <p>Counter: <span>{count}</span></p>

        <div className={styles.buttonWrapper}>
            <button onClick={() => setCount(count - 1)}>Decrement -</button>
            <button onClick={() => setCount(count + 1)}>Increment +</button>
        </div>

        <div className={styles.inputWrapper}>
            <input type="number" onChange={(ev) => setUserCount(Number(ev.target.value)) }/>
            <button onClick={() => setCount(userCount)}>Set</button>
        </div>
    </div>
}