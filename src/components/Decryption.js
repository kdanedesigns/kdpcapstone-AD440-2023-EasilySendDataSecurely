import React, { useState } from "react";

function DecryptionExample() {
  const [encryptedText, setEncryptedText] = useState("");
  const [password, setPassword] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleDecryption = () => {
    //INSERT AXIOS POST CODE HERE
  };

  return (
    <>
      <div className="decryptInputs">
        <textarea
          aria-label="text"
          onChange={(e) => setEncryptedText(e.target.value)}
        ></textarea>

        <input
          aria-label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleDecryption}>Decrypt</button>
      </div>
      <div className="output">
        <p>Decrypted Text: {decryptedText}</p>
      </div>
    </>
  );
}

export default DecryptionExample;
