<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const FormSection1 = () => {
  return (
    <div>
      <h2>Section 1 - Form Rendering</h2>
      <form id="info-form">
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input type="password" id="password_confirmation" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

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

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/section1" id="form-link">
              Section 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/section2" id="form-ref-link">
              Section 2
            </NavLink>
          </li>
          <li>
            <NavLink to="/section3" id="form-state-link">
              Section 3
            </NavLink>
          </li>
        </ul>
      </nav>

      <Route path="/section1" component={FormSection1} />
      <Route path="/section2" component={FormSection2} />
      <Route path="/section3" component={FormSection3} />
    </Router>
  );
};

export default App;
