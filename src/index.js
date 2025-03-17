import { createRoot } from 'react-dom/client';
import { CounterApp } from './Counter'
// import { CounterApp } from './CounterReducer'
// import { CounterApp } from './CounterReducerProps'
// import { CounterApp } from './CounterReducerContext'
// import { CounterApp } from './CounterRedux'
// import { CounterApp } from './CounterReduxAsync'

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));
root.render(<CounterApp />);
