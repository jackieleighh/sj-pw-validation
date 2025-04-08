import React, { useState } from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, Tooltip } from '@mui/material';

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

  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  
  function evaluatePasswordStrength(password: string) {
    let score = 0;
  
    if (!password) return '';

    // Check password length
    if (password.length > 8) score += 1;
    // Contains lowercase
    if (/[a-z]/.test(password)) score += 1;
    // Contains uppercase
    if (/[A-Z]/.test(password)) score += 1;
    // Contains numbers
    if (/\d/.test(password)) score += 1;
    // Contains special characters
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    switch (score) {
      case 0:
      case 1:
      case 2:
      return "Weak";
    case 3:
      return "Medium";
    case 4:
    case 5:
      return "Strong";
    default:
      return "Weak";
    }
  }

  return (
    <Grid container>
      <Grid size={7}>
        lesson plan with scrollbar here
      </Grid>
      <Grid size={5}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="10px 60px"
          minHeight="100vh"
          flexDirection="column"
        >
          <Box
            display="flex"
            padding="20px 0"
            flexDirection="column"
            width="100%"
          >
            <p>Unsafe Form</p>
            <form style={{width: '100%'}}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email-input">Email address</InputLabel>
                <Input fullWidth id="email-input" type="email" />
              </FormControl>
              <Box height="12px" />
              <FormControl fullWidth>
                <InputLabel htmlFor="password-input">Password</InputLabel>
                <Input fullWidth id="password-input" type="password" />
              </FormControl>
              <Box display="flex" justifyContent="flex-end" padding="16px 0">
                <Button>Submit</Button>
              </Box>
            </form>
          </Box>
          <Box
            display="flex"
            padding="20px 0"
            flexDirection="column"
            width="100%"
          >
            <p>Safe Form</p>
            <form style={{width: '100%'}}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email-input">Email address</InputLabel>
                <Input fullWidth id="email-input" type="email" />
              </FormControl>
              <Box height="12px" />
              <FormControl fullWidth>
                <InputLabel htmlFor="password-input">Password</InputLabel>
                <Input 
                  fullWidth 
                  id="password-input" 
                  type="password" 
                  value={password}  
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setStrength(evaluatePasswordStrength(event.target.value));
                  }} 
                  />
                <FormHelperText>Password strength: <span style={{color: strength === 'Weak' ? '#EE4B2B' : strength === 'Medium' ? '#FFAC1C' : '#228B22'}}>{strength}</span></FormHelperText>
              </FormControl>
              <Box display="flex" justifyContent="flex-end" padding="16px 0">
                <Tooltip 
                  title="Must use a strong password"
                  content="content"
                  arrow
                  disableInteractive={strength === "Strong"}
                  disableFocusListener={strength === "Strong"}
                  disableHoverListener={strength === "Strong"}
                  disableTouchListener={strength === "Strong"}
                  >
                    <span>
                      <Button disabled={strength !== "Strong"}>Submit</Button>
                    </span>
                </Tooltip>
              </Box>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
