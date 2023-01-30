import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

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
        <div className='container1'>
            <div className='encryptInput1'>
                <p>Text to Decrypt: </p>
                <textarea onChange={e => setEncryptedText(e.target.value)}></textarea>
            </div>
            <div className='encryptInput2'>
                <p>Key: </p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='encryptButton'>
                <button onClick={handleDecryption}>Decrypt</button>
            </div>           
            <div className='output'>
                <p>Decrypted Text: {decryptedText}</p>
            </div>
        </div>
        </>
    );
}

export default DecryptionExample;
