import React from 'react';
import classes from './App.module.scss';
import Board from './Board/Board';
import Button from './Components/Button/Button';

function App() {
    return (
        <div className={classes.container}>
            <header>
                <h1>Three musketeers</h1>
            </header>
            <main>
                <Board/>
                <div className = {classes.buttonMenu}>
                    <Button>New game</Button>
                    <Button>New game</Button>
                    <Button>New game</Button>
                    <Button>New game</Button>
                    <Button>New game</Button>
                </div>
            </main>
        </div>
    );
}

export default App;
