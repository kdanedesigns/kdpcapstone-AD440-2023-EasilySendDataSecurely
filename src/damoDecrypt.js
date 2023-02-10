mport React, { useState } from 'react';
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
            <div className='mainBackground'>
                <div className='encryptDataEasily'>
                <h2> DECRYPT</h2>
             </div>
            <div className="decryptInputs">
                <p>Text to decode</p>
                <textarea onChange={e => setEncryptedText(e.target.value)}></textarea>
                <p>Key</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
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
