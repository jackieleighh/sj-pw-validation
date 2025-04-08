import React from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { basicForm, btnString, helperString, hooksString, inputString, pwFunctionString } from './consts';

function LessonPlan() {
  return (
    <>
      <h2>Safe passwords</h2>
      <p>Here at Security Journey, we care about the privacy of our users.</p>
      <p>In our first example on the left, we have an unsafe form.  There is no validation, and a user can create an email/password login of their choosing.  This puts our users at risk!</p>
      <p>Today, we're going to learn how to ensure users are choosing safe passwords using basic form validation.  
        We will be using a simple validator built using React hooks and a custom validator function.  
        We will be displaying to the user whether their password is safe, and disabling account creation until they have a strong enough password.</p>
      <h3>Setting up our form</h3>
      <p>First, let's start by setting up our hooks.  These should go at the beginning of your application, above your JSX.</p>
      <SyntaxHighlighter language="javascript" customStyle={{overflowY:'visible'}}>{hooksString}</SyntaxHighlighter>
      <p>Time to set up our form.  This is just a basic form, without any validation.  This is our first, unsafe form on the right.</p>
      <SyntaxHighlighter language="javascript" customStyle={{overflowY:'visible'}}>{basicForm}</SyntaxHighlighter>
      <p>Next, let's add these hooks and some onChange functions to our password input.</p>
      <SyntaxHighlighter language="javascript" customStyle={{overflowY:'visible'}}>{inputString}</SyntaxHighlighter>
      <h3>Our validation function</h3>
      <p>Looking good!  Let's make a quick function to evaluate our password strength.</p>
      <SyntaxHighlighter language="javascript" customStyle={{overflowY:'visible'}}>{pwFunctionString}</SyntaxHighlighter>
      <h3>Enforcing password strength</h3>
      <p>Finally, we want to let the user know if their password is strong enough.  We'll make it colorful for extra readability.</p>
      <SyntaxHighlighter language="javascript" customStyle={{overflowY:'visible'}}>{helperString}</SyntaxHighlighter>
      <p>And disable our form submission until our password is strong enough!  Let's include a tooltip to let the user know why our form won't submit while we're at it.  We'll disable the tooltip and enable our the button if our password is strong enough.</p>
      <SyntaxHighlighter language="javascript" customStyle={{overflowY:'visible'}}>{btnString}</SyntaxHighlighter>
      <h3>Great work!</h3>
      <p>You just successfully completed a basic form validator to make sure your user is using a strong password.  This keeps your users safe from hack attacks!  Great job!</p>
    </>
  );
}

export default LessonPlan;
