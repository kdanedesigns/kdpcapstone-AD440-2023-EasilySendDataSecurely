import React from 'react';
import './App.css';
import Decryption from './components/Decryption';
import Encryption from './components/Encryption';
import Header from './components/Header';    //1jc added for changes to UI

function App() {
    return (
        <div className="App">
        <Header/>                                       //1jc added for changes to UI
        <div className="encryptDecryptContainer1">      //1jc added for changes to UI
            <Encryption />
            <Decryption />
        </div>
       </div>
    );
}

export default App;
