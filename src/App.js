import { mainWrapper } from 'App.css';
import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
    return (
        <div className={mainWrapper}>
            <h1>Hello, World</h1>
        </div>
    )
}

export default hot(module)(App);