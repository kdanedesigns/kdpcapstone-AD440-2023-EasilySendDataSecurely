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
            <div className='encryptInputs'>
                <textarea type="text" onChange={e => setText(e.target.value)} />
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <button onClick={handleEncryption}>Encrypt</button>
            </div>
            <div className='output'>
                <p>Encrypted Text: {encryptedText}</p>
            </div>
        </>
    );
}

export default EncryptionExample;