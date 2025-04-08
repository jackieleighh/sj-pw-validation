import React, { useState } from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, Tooltip } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { btnString, helperString, hooksString, inputString, pwFunctionString } from './consts';

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
          <h2>Safe passwords</h2>
          <p>Here at Security Journey, we care about the privacy of our users.</p>
          <p>In our first example on the left, we have an unsafe form.  There is no validation, and a user can create an email/password login of their choosing.  This puts our users at risk!</p>
          <p>Today, we're going to learn how to ensure users are choosing safe passwords using basic form validation.  
            We will be using a custom validator built using React hooks and a custom validator function.  
            We will be displaying to the user whether their password is safe, and disabling account creation until they have a strong password.</p>
          <h3>Setting up our form</h3>
          <p>First, let's start by setting up our hooks.  These should go at the beginning of your application.</p>
          <SyntaxHighlighter language="javascript" customStyle={{overflow:'visible'}}>{hooksString}</SyntaxHighlighter>
          <p>Next, let's add these hooks and some onChange functions to our password input.</p>
          <SyntaxHighlighter language="javascript" customStyle={{overflow:'visible'}}>{inputString}</SyntaxHighlighter>
          <h3>Our function</h3>
          <p>Looking good!  Let's make a quick function to evaluate our password strength.</p>
          <SyntaxHighlighter language="javascript" customStyle={{overflow:'visible'}}>{pwFunctionString}</SyntaxHighlighter>
          <h3>Enforcing password strength</h3>
          <p>Finally, we want to let the user know if their password is strong enough.  We'll make it colorful for extra readability.</p>
          <SyntaxHighlighter language="javascript" customStyle={{overflow:'visible'}}>{helperString}</SyntaxHighlighter>
          <p>And disable our form submission until our password is strong enough!  Let's include a tooltip to let the user know why our form won't submit while we're at it.</p>
          <SyntaxHighlighter language="javascript" customStyle={{overflow:'visible'}}>{btnString}</SyntaxHighlighter>
          <h3>Great work!</h3>
          <p>You just successfully completed a basic form validator to make sure your user is using a strong password.  Great job!</p>
        </Box>
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
