import React from 'react';
import './App.css';
import Decryption from './components/Decryption';
import Encryption from './components/Encryption';
import Header from './components/Header';    

function App() {
    return (
        <div className="App">
        <Header/>                                       
         <div className="encryptDecryptContainer1">                                               
            <Encryption />
            <Decryption />
        </div>
     </div>                                                   
    );
}

export default App;
