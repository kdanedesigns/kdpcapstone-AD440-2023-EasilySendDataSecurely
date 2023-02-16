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
            <div className="encryptDecryptContainer2">                /*added lines 17 to 31 for flex 1jc*/
                <div className="encryptDecryptContainer3">
                    <p>key</p>
                    <div className="encryptDecryptContainer3a">
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="encryptDecryptContainer3">
                    <p>text</p>
                    <div className="encryptDecryptContainer3a">
                        <textarea onChange={e => setEncryptedText(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="encryptDecryptContainer4">
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
