'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login Successful!');
    router.push('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 50%, #ffd3b6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }}>
      
      {/* Background glow circles */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(76, 175, 80, 0.3) 0%, transparent 70%)',
        top: '10%',
        left: '10%',
        filter: 'blur(80px)'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 211, 182, 0.4) 0%, transparent 70%)',
        bottom: '5%',
        right: '5%',
        filter: 'blur(100px)'
      }}></div>

      {/* Login Box - Centered */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        padding: '50px 40px',
        borderRadius: '28px',
        maxWidth: '420px',
        width: '100%',
        boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
        position: 'relative',
        zIndex: 2
      }}>
        
        <div style={{textAlign: 'center', marginBottom: '35px'}}>
          <div style={{
            width: '85px',
            height: '85px',
            background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '42px',
            boxShadow: '0 12px 35px rgba(76, 175, 80, 0.5)',
            border: '4px solid rgba(255,255,255,0.7)'
          }}>👨‍🌾</div>
          
          <h1 style={{
            color: '#1b5e20',
            fontSize: '32px',
            fontWeight: '800',
            marginBottom: '6px'
          }}>
            Farmer Login
          </h1>
          <p style={{color: '#2e7d32', fontSize: '15px', fontWeight: '500'}}>
            Smart Farming Portal
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{marginBottom: '22px', position: 'relative'}}>
            <span style={{
              position: 'absolute',
              left: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '20px'
            }}>👤</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username / Phone"
              required
              style={{
                width: '100%',
                padding: '15px 15px 15px 52px',
                borderRadius: '14px',
                border: '2px solid rgba(76, 175, 80, 0.3)',
                fontSize: '16px',
                outline: 'none',
                background: 'rgba(255, 255, 255, 0.9)',
                fontWeight: '500'
              }}
            />
          </div>

          <div style={{marginBottom: '32px', position: 'relative'}}>
            <span style={{
              position: 'absolute',
              left: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '20px'
            }}>🔒</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{
                width: '100%',
                padding: '15px 15px 15px 52px',
                borderRadius: '14px',
                border: '2px solid rgba(76, 175, 80, 0.3)',
                fontSize: '16px',
                outline: 'none',
                background: 'rgba(255, 255, 255, 0.9)',
                fontWeight: '500'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              fontSize: '17px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(76, 175, 80, 0.4)'
            }}
          >
            Login →
          </button>
        </form>

        <div style={{
          marginTop: '28px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#1b5e20'
        }}>
          New Farmer? <a href="/register" style={{
            color: '#2e7d32', 
            fontWeight: '700', 
            textDecoration: 'none',
            borderBottom: '2px solid #4caf50'
          }}>Create Account</a>
        </div>

      </div>
    </div>
  );
}