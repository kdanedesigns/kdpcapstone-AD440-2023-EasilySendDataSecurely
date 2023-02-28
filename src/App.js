
import './App.css';
import Decryption from './components/Decryption';
// import Encryption from './components/Encryption';
import EncryptionExample from './components/EncryptionExample';



// TODO: Split the components into seperate routes and use react - router - dom to navigate between them(https://reactrouter.com/web/guides/quick-start)
// TODO: Upload the backend code to AWS Lambda and connect the frontend to it
// TODO: Connect the components to AWS Lambda functions to encrypt and decrypt data


function App() {
    return (
        <div className="App">
            {/* <Encryption /> */}
            <EncryptionExample />
            <Decryption />
        </div>
    );
}

export default App;
