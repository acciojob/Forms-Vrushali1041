import React, {useRef} from "react";

const FormSection2 = () => {
    const fullNameRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const passwordConfirmationRef = React.useRef();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const fullName = fullNameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const passwordConfirmation = passwordConfirmationRef.current.value;
  
      // Handle form submission logic
      console.log('Submitted using useRef:', { fullName, email, password, passwordConfirmation });
    };
  
    return (
      <div>
        <h2>Section 2 - Form with useRef</h2>
        <form id="info-form" onSubmit={handleSubmit}>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id="full_name" ref={fullNameRef} />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
  
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input type="password" id="password_confirmation" ref={passwordConfirmationRef} />
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  export default FormSection2;