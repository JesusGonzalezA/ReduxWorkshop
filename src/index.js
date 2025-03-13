import { createRoot } from 'react-dom/client';
import { CounterApp } from './CounterReduxAsync'

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));
root.render(<CounterApp />);
