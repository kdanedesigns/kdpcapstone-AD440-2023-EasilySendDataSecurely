import React from 'react';
import encryptDecryptPic from '../images/encryptDecryptZaya.jpg'; // gives image path
import logo from '../images/logoScott.png'; // gives image path
import logoOption13 from '../images/Logo_Option_13.jpg'; // gives image path
import logoOption14 from '../images/Logo_Option_14.jpg'; // gives image path
function HeaderExample() {

    return (
        <div className='logoAndBackground'> 
        <img src={logoOption14} width={250} height={300} alt="this is the group logo" /> 
        <div className='headerContainer'>      
       
        <h1>Encryption/Decryption Website</h1>
        <p>Key in the encryption key in the encryption field</p>
        <p>Key in your plain text or encrypted data in the data field</p>
        <p>Select the encrypt key to encrypt your data or the decrypt key to decrypt your data, </p>
        </div>
        <img src={encryptDecryptPic} width={400} height={175} alt="this is Zaya's encryptdecrypt background jpg the group logo" /> 
        </div>
    );
}


export default HeaderExample;