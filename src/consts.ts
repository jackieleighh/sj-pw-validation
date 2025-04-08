export const hooksString = `const [password, setPassword] = useState(''); \nconst [strength, setStrength] = useState('');`;
export const inputString = `<Input 
    id="password-input" 
    type="password" 
    value={password}  
    onChange={(event) => {
      setPassword(event.target.value);
      setStrength(evaluatePasswordStrength(event.target.value));
    }} 
    />`;
export const pwFunctionString = `function evaluatePasswordStrength(password: string) {
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
  }`;
export const helperString = `<FormHelperText>
  Password strength: 
    <span style={{
      color: strength === 'Weak' ? 
        '#EE4B2B' : 
        strength === 'Medium' ? 
          '#FFAC1C' : 
          '#228B22'}}>
    {strength}
    </span>
  </FormHelperText>`;
export const btnString = `<Tooltip 
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
  </Tooltip>`;