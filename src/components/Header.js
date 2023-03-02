import React from "react";

import encryptDecryptPic from "../images/encryptDecryptZaya.jpg"; // gives image path
import logo from "../images/logoScott.png"; // gives image path
import logoOption13 from "../images/Logo_Option_13.jpg"; // gives image path
import logoOption14 from "../images/Logo_Option_14.jpg"; // gives image path
function HeaderExample() {
  return (
    <div className="logoAndBackground">
      <img
        src={logoOption14}
        width={250}
        height={300}
        alt="this is the group logo"
      />
      <div className="headerContainer">
        <h1><b>Encryption/Decryption Website</b></h1>
        <h2><b>Key in the encryption key in the encryption field</b></h2>
        <h2><b>Key in your plain text or encrypted data in the data field</b></h2>
        <p>
          <b>Select the encrypt key to encrypt your data or the decrypt key to
          decrypt your data,</b>alert("Need your key!")
        </p>
      </div>
      <img
        src={encryptDecryptPic}
        width={400}
        height={175}
        alt="this is Zaya's encryptdecrypt background jpg the group logo"
      />
    </div>
  );
}
export default HeaderExample;
