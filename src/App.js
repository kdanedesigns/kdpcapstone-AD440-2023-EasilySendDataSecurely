import React from 'react';
import './App.css';
import Decryption from './components/Decryption';
import Encryption from './components/Encryption';


function App() {
    return (
        <div className="App">
            <Encryption />
            <Decryption />
        </div>
    );
}

export default App;
