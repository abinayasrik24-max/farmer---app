'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter username and password');
      return;
    }
    // Your login logic here
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    router.push('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '50px 40px',
        borderRadius: '24px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '420px',
        border: '1px solid rgba(255,255,255,0.3)'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#15803d',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Farmer Login
        </h2>

        <form onSubmit={handleLogin}>
          <div style={{marginBottom: '24px'}}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid #e2e8f0',
                fontSize: '16px',
                outline: 'none',
                transition: 'border 0.2s'
              }}
              onFocus={(e) => e.target.style.border = '2px solid #22c55e'}
              onBlur={(e) => e.target.style.border = '2px solid #e2e8f0'}
            />
          </div>

          <div style={{marginBottom: '24px'}}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid #e2e8f0',
                fontSize: '16px',
                outline: 'none',
                transition: 'border 0.2s'
              }}
              onFocus={(e) => e.target.style.border = '2px solid #22c55e'}
              onBlur={(e) => e.target.style.border = '2px solid #e2e8f0'}
            />
          </div>

          {error && (
            <p style={{
              color: '#ef4444',
              fontSize: '14px',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              {error}
            </p>
          )}

          <button type="submit" style={{
            width: '100%',
            background: '#22c55e',
            color: 'white',
            padding: '16px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            Login
          </button>
        </form>

        {/* Test text removed - clean professional look */}
      </div>
    </div>
  );
}