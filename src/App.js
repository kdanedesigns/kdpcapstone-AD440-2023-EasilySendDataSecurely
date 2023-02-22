import React from 'react';
import './App.css';
import Decryption from './components/Decryption';
import Encryption from './components/Encryption';
import Header from './components/Header';    //1jc added for changes to UI

function App() {
    return (
        <div className="App">
        <Header/>                                       //1jc added for changes to UI
                                                        //1jc took out line 11 per review of reviewer
            <Encryption />
            <Decryption />
        </div>
                                                        //1jc took out line 15 per review of reviewer
    );
}

export default App;
