// usesignup.js
import { useState } from 'react';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Sending signup request with:', { email, password });
      const response = await fetch('http://localhost:5000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();
      console.log('Response:', json);

      if (!response.ok) {
        throw new Error(json.error || 'Something went wrong');
      }

      // Handle success (e.g., update state, navigate, etc.)
      console.log('Signup successful:', json);
    } catch (err) {
      console.error('Signup error:', err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};
