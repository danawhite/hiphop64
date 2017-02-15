import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import bracketApp from './reducers';

import './main.css';

import Bracket from './components/bracket/bracket';

const container = document.getElementById('app');
const store = createStore(bracketApp);

render(
        /** returns a reference to component's backing instance (in this case <Bracket/>) **/
    <Provider store={store}>
        <Bracket/>
    </Provider>,container
);
