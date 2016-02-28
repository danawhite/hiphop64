import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import Bracket from './components/bracket/bracket';

main();

function main() {
    const container = document.getElementById('app');

    document.body.appendChild(container);

    // returns a reference to component's backing instance (in this case <Bracket/>)
    ReactDOM.render(<Bracket/>, container);
}