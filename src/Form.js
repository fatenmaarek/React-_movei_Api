import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };
  const validatePassword = (value) => {
    setPassword(value);
  
    if (!value) {
      setPasswordError('Password is required');
    } else if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    validateEmail(email);
    validatePassword(password);

    // If both email and password are valid, proceed with login
    if (!emailError && !passwordError) {
      onLogin(email);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            id="email"
            className={`form-control ${emailError && 'is-invalid'}`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            onBlur={() => validateEmail(email)}
            required
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className={`form-control ${passwordError && 'is-invalid'}`}
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              onBlur={() => validatePassword(password)}
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <input
                  type="checkbox"
                  id="showPassword"
                  className="form-check-input"
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="showPassword" className="form-check-label ms-2">Show Password</label>
              </div>
            </div>
          </div>
          {passwordError && <div className="invalid-feedback">{passwordError}</div>}
        </div>

        <div className="mb-3 text-center">
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
