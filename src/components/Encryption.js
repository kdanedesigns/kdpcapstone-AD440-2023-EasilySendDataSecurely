import React, { useState } from 'react';
import axios from 'axios';

function EncryptionExample() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const [encrypted, setEncrypted] = useState(false);

  const handleEncryption = async () => {

    try {
      if (password == '') {
        setEncryptedText('Invalid Key');
        encrypted = false;
      }

      axios
        .post(
          'https://fogbnvtkba.execute-api.us-west-2.amazonaws.com/Encrypt-AD440Winter2023-V3',
          { message: text, key: password }
        )
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
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
      setEncrypted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="encryptDecryptContainer2">
        <div className="encryptDecryptContainer3">
          <p>key</p>
          <input
            aria-label="password"
            className="encryptDecryptContainer3a"
            type="password"
            placeholder="Input Encryption Key Here: "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="encryptDecryptContainer3b">
          <p>text</p>
          <textarea
            aria-label="text"
            className="encryptDecryptContainer3a"
            placeholder="Input Text to Encrypt Here: "
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="encryptDecryptContainer4">
          <button
            className="encryptDecryptContainer4a"
            onClick={handleEncryption}
          >
            {encrypted ? 'Encrypted!' : 'Encrypt'}
          </button>
        </div>
        <div className="encryptDecryptContainer3c">
          <p>Encrypted Text: {encryptedText}</p>
        </div>
      </div>
    </>
  );
}
export default EncryptionExample;
