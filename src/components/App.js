<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



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
