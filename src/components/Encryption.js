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
          <div className='encryptDecryptContainer2'>                    /*added lines 18 to 33 for flex 1jc*/
                <div className="encryptDecryptContainer3">
                    <p>key</p>
                    <div className="encryptDecryptContainer3a">
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="encryptDecryptContainer3">
                    <p>text</p>
                    <div className="encryptDecryptContainer3a">
                        <textarea type="text" onChange={e => setText(e.target.value)} />
                    </div>
                </div>
                <div className="encryptDecryptContainer4">
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
