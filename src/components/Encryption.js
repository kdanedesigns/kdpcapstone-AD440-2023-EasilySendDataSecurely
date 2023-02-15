import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function EncryptionExample() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const handleEncryption = async () => {
        const ciphertext = CryptoJS.AES.encrypt(text, password);
        setEncryptedText(ciphertext.toString());
        await navigator.clipboard.writeText(`${ciphertext.toString()}`);

    };

    return (
        <>
            <div className='encryptDecryptContainer2'>

                <div className="encryptDecryptContainer3">
                    <p>key</p>
                    <input className="encryptDecryptContainer3a" type="password" onChange={e => setPassword(e.target.value)} />
                </div>              


                <div className="encryptDecryptContainer3b">
                    <p>text</p>                    
                    <textarea className="encryptDecryptContainer3a" type="text" onChange={e => setText(e.target.value)} />
                </div>

                <div className="encryptDecryptContainer4">
                    <button className="encryptDecryptContainer4a" onClick={handleEncryption}>Encrypt</button>
                </div>

                <div className='encryptDecryptContainer3c'>
                    <p>Encrypted Text: {encryptedText}</p>
                </div>

            </div>
        </>
    );
}

export default EncryptionExample;