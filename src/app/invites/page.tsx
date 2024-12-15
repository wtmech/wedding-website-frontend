'use client';

import { useState, useEffect } from 'react';
import InviteList from '@/components/layout/invites/InviteList';
import Content from '@/components/base/content/Content';
import './page.css';

export default function InvitesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPassword('');
    setError('');
    setIsAuthenticated(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (password === '101610') {
        setIsAuthenticated(true);
      } else {
        setError('Incorrect password');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="invites-page">
        <Content backgroundColor="#332c2a">
          <div className="password-protection">
            <h2>Protected Page</h2>
            <form onSubmit={handleSubmit} className="password-form">
              <div className="form-group">
                <label htmlFor="password">Enter Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="password-input"
                  disabled={isLoading}
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? 'Checking...' : 'Submit'}
              </button>
            </form>
          </div>
        </Content>
      </div>
    );
  }

  return (
    <div className="invites-page">
      <Content backgroundColor="#332c2a">
        <h2>Guest List</h2>
        <InviteList />
      </Content>
    </div>
  );
}