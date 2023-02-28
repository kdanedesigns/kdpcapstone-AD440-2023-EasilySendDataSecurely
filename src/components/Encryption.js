import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function EncryptionExample() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const handleEncryption = async () => {
        // const ciphertext = CryptoJS.AES.encrypt(text, password);
        // setEncryptedText(ciphertext.toString());
        // await navigator.clipboard.writeText(`${ciphertext.toString()}`);

        //post request to backend
        const response = await fetch('https://do2if6u69i.execute-api.us-west-2.amazonaws.com/default/scott_ed', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // encryptedText: ciphertext.toString()
                message: text,
                key: password
            })
        });
        const data = await response.json();
        console.log(data);


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