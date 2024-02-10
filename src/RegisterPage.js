
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function RegisterPage({ onRegister }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailTouched, setEmailTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  function handleRegister() {
    onRegister({ email, name, username, password });
  }

  function validatePassword() {
    return password === confirmPassword;
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isNameValid = name.length > 3;
  const isUsernameValid = /^[^\s]+$/.test(username);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            id="email"
            className={`form-control ${emailTouched && !isEmailValid && 'is-invalid'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            required
          />
          {emailTouched && !isEmailValid && <div className="invalid-feedback">Email is not valid</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className={`form-control ${nameTouched && !isNameValid && 'is-invalid'}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            required
          />
          {nameTouched && !isNameValid && <div className="invalid-feedback">Name should be more than 3 characters</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className={`form-control ${usernameTouched && !isUsernameValid && 'is-invalid'}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => setUsernameTouched(true)}
            required
          />
          {usernameTouched && !isUsernameValid && <div className="invalid-feedback">Username should not contain spaces</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className={`form-control ${passwordTouched && !isPasswordValid && 'is-invalid'}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            required
          />
          {passwordTouched && !isPasswordValid && (
            <div className="invalid-feedback">
              Password should contain at least one lowercase letter,
              one uppercase letter, one digit, and one special character
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className={`form-control ${confirmPasswordTouched && !validatePassword() && 'is-invalid'}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setConfirmPasswordTouched(true)}
            required
          />
          {confirmPasswordTouched && !validatePassword() && <div className="invalid-feedback">Passwords do not match</div>}
        </div>

        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-success text-center">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
