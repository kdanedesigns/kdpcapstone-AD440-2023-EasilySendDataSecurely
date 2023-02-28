import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function EncryptionExample() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const handleEncryption = async () => {
        const ciphertext = CryptoJS.AES.encrypt(text, password);
        setEncryptedText(ciphertext.toString());

        //https://do2if6u69i.execute-api.us-west-2.amazonaws.com/default/scott_ed
        //https://pvz6dynre2wv5don2glryirr5e0ehlnc.lambda-url.us-west-2.on.aws/
        /* 'Access-Control-Allow-Origin': '"Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
        'Content-Type': 'application/json' */

        const response = await fetch('https://do2if6u69i.execute-api.us-west-2.amazonaws.com/default/scott_ed', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                'Access-Control-Allow-Methods': 'POST,OPTIONS'

            },
            body: JSON.stringify({
                encryptedText: encryptedText
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