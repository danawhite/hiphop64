import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import App from './app';

main();

function main() {
    const container = document.getElementById('app');

    document.body.appendChild(container);

    // returns a reference to component's backing instance (in this case <VideoPlayer/>)
    ReactDOM.render(<App/>, container);
}