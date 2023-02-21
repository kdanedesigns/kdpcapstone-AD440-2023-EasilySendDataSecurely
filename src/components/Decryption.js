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
            <div className="decryptInputs">
                <textarea aria-label='text' onChange={e => setEncryptedText(e.target.value)}></textarea>
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <button onClick={handleDecryption}>Decrypt</button>


            </div>
            <div className='output'>
                <p>Decrypted Text: {decryptedText}</p>
            </div>
        </>
    );
}

export default DecryptionExample;