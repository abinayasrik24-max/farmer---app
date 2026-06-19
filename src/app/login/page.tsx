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
      background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 50%, #ffd3b6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Floating circles decoration */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(76, 175, 80, 0.15)',
        top: '-100px',
        left: '-100px',
        filter: 'blur(60px)'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(255, 211, 182, 0.2)',
        bottom: '-150px',
        right: '-150px',
        filter: 'blur(80px)'
      }}></div>

      {/* Login Card with Glass Effect */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        padding: '50px 40px',
        borderRadius: '30px',
        maxWidth: '420px',
        width: '100%',
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Farmer Icon */}
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <div style={{
            width: '90px',
            height: '90px',
            background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '45px',
            boxShadow: '0 10px 30px rgba(76, 175, 80, 0.4)',
            border: '4px solid rgba(255,255,255,0.5)'
          }}>👨‍🌾</div>
          
          <h1 style={{
            color: '#1b5e20',
            fontSize: '34px',
            fontWeight: '800',
            marginBottom: '5px',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            Farmer Login
          </h1>
          <p style={{color: '#2e7d32', fontSize: '15px', fontWeight: '500'}}>
            Smart Farming Portal
          </p>
        </div>

        <form onSubmit={handleLogin}>
          {/* Username with Icon */}
          <div style={{marginBottom: '25px', position: 'relative'}}>
            <span style={{
              position: 'absolute',
              left: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '20px',
              zIndex: 2
            }}>👤</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username / Phone"
              required
              style={{
                width: '100%',
                padding: '16px 16px 16px 55px',
                borderRadius: '15px',
                border: '2px solid rgba(76, 175, 80, 0.3)',
                fontSize: '16px',
                outline: 'none',
                background: 'rgba(255, 255, 255, 0.7)',
                transition: 'all 0.3s',
                fontWeight: '500'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#4caf50';
                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                e.target.style.boxShadow = '0 0 0 4px rgba(76, 175, 80, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(76, 175, 80, 0.3)';
                e.target.style.background = 'rgba(255, 255, 255, 0.7)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Password with Icon */}
          <div style={{marginBottom: '35px', position: 'relative'}}>
            <span style={{
              position: 'absolute',
              left: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '20px',
              zIndex: 2
            }}>🔒</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{
                width: '100%',
                padding: '16px 16px 16px 55px',
                borderRadius: '15px',
                border: '2px solid rgba(76, 175, 80, 0.3)',
                fontSize: '16px',
                outline: 'none',
                background: 'rgba(255, 255, 255, 0.7)',
                transition: 'all 0.3s',
                fontWeight: '500'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#4caf50';
                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                e.target.style.boxShadow = '0 0 0 4px rgba(76, 175, 80, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(76, 175, 80, 0.3)';
                e.target.style.background = 'rgba(255, 255, 255, 0.7)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Gradient Button with Hover Effect */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '17px',
              background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              fontSize: '18px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(76, 175, 80, 0.4)',
              transition: 'all 0.3s',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(76, 175, 80, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(76, 175, 80, 0.4)';
            }}
          >
            Login →
          </button>
        </form>

        <div style={{
          marginTop: '30px',
          textAlign: 'center',
          fontSize: '15px',
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