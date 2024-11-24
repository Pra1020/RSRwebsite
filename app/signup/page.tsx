"use client"
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login or signup logic here
    console.log(isLogin ? 'Logging in...' : 'Signing up...', { email, password, rememberMe });
  };

  return (
    <div className="login-container">
      {/* Tab Header */}
      <div className="form-header">
        <button
          className={`tab ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`tab ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>

      {/* Form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon">👁️</span>
          </label>
        </div>

        {isLogin ? (
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="confirm-password">
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                required
              />
            </label>
          </div>
        )}

        <button type="submit" className="login-btn">
          {isLogin ? 'Login' : 'Signup'}
        </button>

        {isLogin && (
          <a href="/forgot-password" className="forgot-password-link">
            Forgot your password?
          </a>
        )}
      </form>

      {/* Internal CSS */}
      <style jsx>{`
        .login-container {
          width: 350px;
          margin: auto;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .form-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          margin-bottom: 20px;
        }

        .tab {
          flex: 1;
          padding: 10px 0;
          text-align: center;
          cursor: pointer;
          background: none;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .tab.active {
          font-weight: bold;
          color: #007bff;
          border-bottom: 2px solid #007bff;
        }

        .form-group {
          margin-bottom: 15px;
        }

        input[type='email'],
        input[type='password'] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .eye-icon {
          position: absolute;
          right: 10px;
          top: 35%;
          cursor: pointer;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .login-btn {
          width: 100%;
          padding: 10px;
          background: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-btn:hover {
          background: #0056b3;
        }

        .forgot-password-link {
          display: block;
          margin-top: 10px;
          text-align: center;
          color: #007bff;
          text-decoration: none;
        }

        .forgot-password-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default LoginForm;
