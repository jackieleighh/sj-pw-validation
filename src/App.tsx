import React, { useState } from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, Tooltip } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { basicForm, btnString, helperString, hooksString, inputString, pwFunctionString } from './consts';
import { evaluatePasswordStrength } from './utils';
import LessonPlan from './LessonPlan';

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

  return (
    <Grid container>
      <Grid size={{ sm: 7 }} display={{ xs: 'none', sm: 'block' }}>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="10px 20px"
          minHeight="100vh"
          maxHeight="100vh"
          flexDirection="column"
          overflow="scroll"
        >
          <LessonPlan />
        </Box>
      </Grid>
      <Grid size={{ sm: 5 }}>
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
        <Box
          padding="20px" 
          display={{ xs: 'block', sm: 'none' }}> 
          <LessonPlan />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
