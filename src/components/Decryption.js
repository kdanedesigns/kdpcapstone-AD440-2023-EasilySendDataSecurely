import React, { useState } from 'react';

function DecryptionExample() {
    const [encryptedText, setEncryptedText] = useState('');
    const [password, setPassword] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleDecryption = () => {
        //INSERT AXIOS POST CODE HERE
    };

    return (
        <>
//add css lines 1jc
        
           
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
 
//add css lines 1jc
            </div>
        </>
    );
}

export default DecryptionExample;
