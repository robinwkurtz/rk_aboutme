// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const target = document.getElementById('root');
if (target) {
    ReactDOM.render(<App />, target);
}
