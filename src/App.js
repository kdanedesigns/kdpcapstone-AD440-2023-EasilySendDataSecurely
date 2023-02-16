import React from 'react';
import './App.css';
import Decryption from './components/Decryption';
import Encryption from './components/Encryption';


// TODO: Split the components into seperate routes and use react - router - dom to navigate between them(https://reactrouter.com/web/guides/quick-start)
// TODO: Upload the backend code to AWS Lambda and connect the frontend to it
// TODO: Connect the components to AWS Lambda functions to encrypt and decrypt data


function App() {
    return (
        <div className="App">
            <Encryption />
            <Decryption />
        </div>
    );
}

export default App;
