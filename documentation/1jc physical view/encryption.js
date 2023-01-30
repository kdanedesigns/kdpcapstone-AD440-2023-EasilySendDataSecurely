import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function EncryptionExample() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const handleEncryption = () => {
        const ciphertext = CryptoJS.AES.encrypt(text, password);
        setEncryptedText(ciphertext.toString());
    };

    return (
        <>
        <div className='container1'>
            <div className='encryptInput1'>        
                <p style="flex-grow: 1;">Text to Encrypt: </p> 
                <textarea style="flex-grow: 10;" type="text" onChange={e => setText(e.target.value)} />
            </div>         
            <div className='encryptInput2'>
                <div style="flex-grow: 1;"><p>Key: </p> </div>
                <div style="flex-grow: 10;"></div> input type="password" onChange={e => setPassword(e.target.value)} /div>
                
            </div>
            <div className='encryptButton'>
                <button onClick={handleEncryption}>Encrypt</button>
            </div>
            <div className='output'>
                <p>Encrypted Text: {encryptedText}</p>
            </div>
        </div>
        </>
    );
}

export default EncryptionExample;
