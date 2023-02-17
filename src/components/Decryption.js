import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

//dummy line to commit and push

function DecryptionExample() {
    const [encryptedText, setEncryptedText] = useState('');
    const [password, setPassword] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleDecryption = () => {
        const bytes = CryptoJS.AES.decrypt(encryptedText, password);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        setDecryptedText(originalText);
    };

    return (
        <>
            <div className="encryptDecryptContainer2">

                <div className="encryptDecryptContainer3">
                    <p>key</p>
                    <input className="encryptDecryptContainer3a" type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                                    
                <div className="encryptDecryptContainer3b">
                <p>text</p> 
                <textarea className="encryptDecryptContainer3a" onChange={e => setEncryptedText(e.target.value)}></textarea>
                </div>

                <div className="encryptDecryptContainer4">
                    <button className="encryptDecryptContainer4b" onClick={handleDecryption}>Decrypt</button>
                </div>

                <div className='encryptDecryptContainer3c'>
                    <p>Decrypted Text: {decryptedText}</p>
                </div>
            </div>
        </>

    );
}

export default DecryptionExample;