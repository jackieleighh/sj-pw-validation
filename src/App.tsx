import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlgXrTBT5lSMA3hFKePPA9gY57i_yH91Q",
  authDomain: "sj-pw-validation.firebaseapp.com",
  projectId: "sj-pw-validation",
  storageBucket: "sj-pw-validation.firebasestorage.app",
  messagingSenderId: "1024881198428",
  appId: "1:1024881198428:web:b4d0ab3ced2d35940ced99"
};

function App() {
  // Initialize Firebase
  initializeApp(firebaseConfig);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
