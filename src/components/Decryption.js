
import React, { useState } from "react";
import axios from "axios"; 


const DecryptionComponent = () => {
    const [text, setText] = useState("");
    // const [encryptedText, setEncryptedText] = useState("");
    const [password, setPassword] = useState("");
    const [decryptedText, setDecryptedText] = useState("");
    const [decrypted, setDecrypted] = useState(false);


    const handleDecryption = async () => {
        try {
            axios
                .post("https://fogbnvtkba.execute-api.us-west-2.amazonaws.com/Decrypt-AD440Winter2023-V3", { encryptedMessage: text, key: password })

                .then(function (response) {
                    console.log(response.data);
                    // console.log(response.data.key);
                    // original code setEncryptedText(response.data);
                    setDecryptedText(response.data.decryptedMessage);
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
            setDecrypted(true);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <div className="decryptInputs">


                <textarea aria-label='text' onChange={e => setEncryptedText(e.target.value)}></textarea>

                <input aria-label='password' type="password" onChange={e => setPassword(e.target.value)} />
                <button onClick={handleDecryption}>Decrypt</button>

            <div className="decryptKeyInputs">
                <input
                    className="ekeyinput"
                    type="password"
                    placeholder="Enter Your Encryption key:"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="ebutton" onClick={handleDecryption}>
                    {decrypted ? "Decrypted!" : "Click to Decrypt"}
                </button>
            </div>

            <div className="output">
                <p className="eout">Decrypted Result: {decryptedText}</p>
            </div>
        </div>
    );
};

export default DecryptionComponent;
