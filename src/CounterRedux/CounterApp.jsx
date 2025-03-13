import { useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import styles from './counter.module.css'
import store from './state/store'
import { decrement, increment, set } from './state/countSlice'

// Counter
const Counter = () => {
    const count = useSelector(state => state.counter.value)
    return <p>Counter: <span>{count}</span></p>
}

// Counter Buttons
const CounterButtons = () => {
    return <div className={styles.buttonWrapper}>
        <DecrementButton />
        <IncrementButton  />
    </div>
}
const DecrementButton = () => {
    const dispatch = useDispatch()
    
    return <button onClick={() => dispatch(decrement())}>Decrement -</button>
}
const IncrementButton = () => {
    const dispatch = useDispatch()
    
    return <button onClick={() => dispatch(increment())}>Increment +</button>
}

// Counter Input
const CounterInput = () => {
    const [userCount, setUserCount] = useState()
    const dispatch = useDispatch()

    return <div className={styles.inputWrapper}>
        <input type="number" onChange={(ev) => setUserCount(Number(ev.target.value)) }/>
        <button onClick={() => dispatch(set(userCount))}>Set</button>
    </div>
}

export const CounterApp = () => {
    return <div className={styles.wrapper}>
        <Provider store={store}>
            <Counter />

            <CounterButtons />
            
            <CounterInput />
        </Provider>
    </div>
}