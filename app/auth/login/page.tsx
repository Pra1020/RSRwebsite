"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  // State for form inputs, loading status, and error handling
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error state before making the request
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to a dashboard or home page after successful login
        // Store JWT in localStorage or cookies
        localStorage.setItem('token', data.token);
        router.push('/courses');
      } else {
        // Handle error response
        setError(data.message || 'Error logging in');
      }
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        {error && <p className="error">{error}</p>}
      </form>

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        input {
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          outline: none;
        }

        input:focus {
          border-color: #4d90fe;
        }

        button {
          padding: 12px;
          background-color: #4d90fe;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:disabled {
          background-color: #aaa;
        }

        button:hover:not(:disabled) {
          background-color: #357ae8;
        }

        .error {
          color: red;
          text-align: center;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
