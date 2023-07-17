
import React, {useState} from "react";

const FormSection3 = () => {
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Handle form submission logic
      console.log('Submitted using useState:', { fullName, email, password, passwordConfirmation });
    };
  
    return (
      <div>
        <h2>Section 3 - Form with useState</h2>
        <form id="info-form" onSubmit={handleSubmit}>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id="full_name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  export default FormSection3;