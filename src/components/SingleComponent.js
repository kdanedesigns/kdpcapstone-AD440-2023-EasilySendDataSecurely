import React, { useState, useRef } from 'react';
import axios from 'axios';
import { BsFillKeyFill } from 'react-icons/bs';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { BsFillUnlockFill } from 'react-icons/bs';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { FaClipboard } from 'react-icons/fa';
import { SiLetsencrypt } from "react-icons/si";
import { BsArrowRepeat } from "react-icons/bs";


function EncryptionExample() {
    //button states
    const [encryptedButtonState, setEncryptedButtonState] = useState(false);
    const [decryptedButtonState, setDecryptedButtonState] = useState(false);
    // state of output
    const [outputText, setOutputText] = useState('');
    // state of textarea
    const [textAreaValue, setTextAreaValue] = useState('');
    // state of password
    const [passwordAreaValue, setPasswordAreaValue] = useState('');
    //shake input if no key is provided
    const passwordInputRef = useRef();

    const handleTextAreaChange = (e) => {
        setTextAreaValue(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordAreaValue(e.target.value);
    };

    const resetAll = () => {
        setEncryptedButtonState(false);
        setDecryptedButtonState(false);
        setOutputText('');
        setTextAreaValue('');
        setPasswordAreaValue('');
    }

    const handleEncryption = async () => {
        try {
            if (!passwordAreaValue) {
                setOutputText('Invalid Key or No key provided.');
                setEncryptedButtonState(false); //prevents button change
                passwordInputRef.current.classList.add('shake', 'highlight'); // Add the class
                setTimeout(() => {
                    passwordInputRef.current.classList.remove('shake', 'highlight'); // Remove the class after 500ms
                }, 500);
                return;
            }
            axios
                .post(
                    'https://fogbnvtkba.execute-api.us-west-2.amazonaws.com/Encrypt-AD440Winter2023-V3',
                    { message: textAreaValue, key: passwordAreaValue }
                )
                .then(function (response) {
                    setOutputText(response.data.encryptedMessage);
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
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
            setEncryptedButtonState(true);
            setDecryptedButtonState(false);
        } catch (error) {
            // console.log(encrypted);
            console.error(error);
        }
    };

    const handleDecryption = async () => {
        try {
            if (!passwordAreaValue) {
                setOutputText('Invalid Key or No key provided.');
                setDecryptedButtonState(false); //prevents button change
                passwordInputRef.current.classList.add('shake', 'highlight'); // Add the class
                setTimeout(() => {
                    passwordInputRef.current.classList.remove('shake', 'highlight'); // Remove the class after 500ms
                }, 500);
                return;
            }
            axios
                .post(
                    "https://fogbnvtkba.execute-api.us-west-2.amazonaws.com/Decrypt-AD440Winter2023-V3",
                    { encryptedMessage: textAreaValue, key: passwordAreaValue }
                )

                .then(function (response) {
                    if (response.data.decryptedMessage === "") {
                        setOutputText("Invalid Key or No key provided.");
                    }
                    console.log(response.data);
                    setOutputText(response.data.decryptedMessage);
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
            setDecryptedButtonState(true);
            setEncryptedButtonState(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="encryptContainer">
                <div className="encryptTextAreaContainer">
                    <div className='textAreaIconContainer'>
                        <p className="textIcon">
                            <BsFillChatLeftTextFill size={40} />
                        </p>

                        <button
                            className="pasteButton"
                            onClick={() => navigator.clipboard.readText().then((clipText) => (setTextAreaValue(clipText)))} //works in Chrome but not Firefox
                        >
                            <FaClipboard size={20} className="pasteButtonIcon" />
                            Paste
                        </button>
                    </div>
                    <textarea
                        aria-label="encrypt_text"
                        value={textAreaValue}
                        className="encryptTextArea"
                        type="text"
                        onChange={handleTextAreaChange}
                        placeholder="Enter Your Message Here: "

                    />
                </div>
                <div className="encryptKeyContainer">
                    <p className="keyIcondiv">
                        <BsFillKeyFill size={40} className="keyIcon" />
                    </p>
                    <input
                        type="password"
                        aria-label="password"
                        value={passwordAreaValue}
                        className="encryptKeyInput"
                        onChange={handlePasswordChange}
                        ref={passwordInputRef}
                        placeholder="Enter Your Key Here: "
                    />
                </div>
                <div className="buttonContainer">
                    <SiLetsencrypt size={20} className="cryptIcon" />
                    <div className="encryptButtonContainer">
                        <button className="encryptButton" onClick={handleEncryption}>
                            {encryptedButtonState ? (
                                <>
                                    <BsFillShieldLockFill size={20} />
                                    Encrypted!
                                </>
                            ) : (
                                <>
                                    <BsFillUnlockFill size={20} />
                                    Click to Encrypt
                                </>
                            )}
                        </button>
                    </div>
                    <div className="decryptButtonContainer">
                        <button
                            className="decryptButton" onClick={handleDecryption}>
                            {decryptedButtonState ? (
                                <>
                                    <BsFillUnlockFill size={20} />
                                    Decrypted!
                                </>
                            ) : (
                                <>
                                    <BsFillShieldLockFill size={20} />
                                    Click to Decrypt
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <div className="encryptOutput">
                    <div className="copyButtonContainer">
                        <button
                            className="copyButton"
                            onClick={() => navigator.clipboard.writeText(`${outputText}`)}
                        >
                            <FaClipboard size={20} className="clipButton" />
                            Copy
                        </button>
                        <button className="resetButton" onClick={resetAll}>
                            <BsArrowRepeat size={20} className="resetIcon" />
                            Reset
                        </button>
                    </div>
                    <textarea
                        aria-label="text"
                        className="encryptOutputTextArea"
                        type="text"
                        placeholder="Output: "
                        value={outputText}
                    />
                </div>
            </div>
        </>
    );
}
export default EncryptionExample;
