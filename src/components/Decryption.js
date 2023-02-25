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
        .post(
          "https://fogbnvtkba.execute-api.us-west-2.amazonaws.com/Decrypt-AD440Winter2023-V3",
          { encryptedMessage: text, key: password }
        )

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

        <div className="encryptDecryptContainer2">
        <div className="encryptDecryptContainer3b">
          <p>text</p>
          <textarea
            aria-label="text"
            className="encryptDecryptContainer3a"
            type="text"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className="encryptDecryptContainer3">
          <p>key</p>
          <input
            aria-label="password"
            className="encryptDecryptContainer3a"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="encryptDecryptContainer4">
          <button
            className="encryptDecryptContainer4b"
            onClick={handleDecryption}
          >
            Decrypt
          </button>
        </div>

        <div className="encryptDecryptContainer3c">
          <p>Decrypted Text: {decryptedText}</p>
        </div>
      </div>
  
  );
};

export default DecryptionComponent;
