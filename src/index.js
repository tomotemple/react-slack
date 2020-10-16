import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducers } from './redux/reducers/index'


let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render(
<Provider store= {store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
