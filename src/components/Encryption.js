import React, { useState } from 'react';
import axios from 'axios';

function EncryptionExample() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const [encrypted, setEncrypted] = useState(false);

    const handleEncryption = async () => {

        try {
            axios
                .post("https://fogbnvtkba.execute-api.us-west-2.amazonaws.com/Encrypt-AD440Winter2023-V3", { message: text, key: password })
                .then(function (response) {
                    setEncryptedText(response.data.encryptedMessage);
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                    } else {
                        console.log("Error", error.message);
                    }
                    console.log(error.config);
                });
            setEncrypted(true);
            await navigator.clipboard.writeText(`${encryptedText}`);
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <>
            <div className='encryptInputs'>
                <textarea type="text" onChange={e => setText(e.target.value)} />
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <button onClick={handleEncryption}>{encrypted ? "Encrypted!" : "Click to Encrypt"}</button>
            </div>
            <div className='output'>
                <p>Encrypted Text: {encryptedText}</p>
            </div>
        </>
    );
}

export default EncryptionExample;