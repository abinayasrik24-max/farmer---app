'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registered: ${name} - ${mobile}`);
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 20px'
    }}>
      <div style={{
        background: 'white',
        padding: '50px 40px',
        borderRadius: '24px',
        maxWidth: '480px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(46, 125, 50, 0.25)',
        borderTop: '6px solid #4caf50'
      }}>
        
        {/* Logo + Title */}
        <div style={{textAlign: 'center', marginBottom: '35px'}}>
          <div style={{fontSize: '60px', marginBottom: '15px'}}>🌱</div>
          <h1 style={{color: '#1b5e20', fontSize: '32px', marginBottom: '8px', fontWeight: '900'}}>
            Join Smart Farmer
          </h1>
          <p style={{color: '#2e7d32', fontSize: '15px', fontWeight: '500'}}>
            Create account to access live market prices & tips
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister}>
          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', color: '#1b5e20', fontWeight: '700', marginBottom: '8px', fontSize: '14px'}}>
              Full Name
            </label>
            <input 
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: '2px solid #e8f5e9',
                fontSize: '15px',
                fontWeight: '500',
                background: '#f1f8e9',
                color: '#1b5e20',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4caf50'}
              onBlur={(e) => e.target.style.borderColor = '#e8f5e9'}
            />
          </div>

          <div style={{marginBottom: '30px'}}>
            <label style={{display: 'block', color: '#1b5e20', fontWeight: '700', marginBottom: '8px', fontSize: '14px'}}>
              Mobile Number
            </label>
            <input 
              type="tel"
              placeholder="10 digit mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              maxLength={10}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: '2px solid #e8f5e9',
                fontSize: '15px',
                fontWeight: '500',
                background: '#f1f8e9',
                color: '#1b5e20',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4caf50'}
              onBlur={(e) => e.target.style.borderColor = '#e8f5e9'}
            />
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '18px',
            background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '800',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div style={{textAlign: 'center', marginTop: '25px', fontSize: '14px', color: '#555'}}>
          Already have an account?{' '}
          <Link href="/login" style={{color: '#2e7d32', fontWeight: '700', textDecoration: 'none'}}>
            Login here
          </Link>
        </div>

        {/* Features */}
        <div style={{
          marginTop: '35px',
          padding: '20px',
          background: '#f1f8e9',
          borderRadius: '14px',
          borderLeft: '4px solid #4caf50'
        }}>
          <p style={{margin: '0', fontSize: '13px', color: '#2e7d32', lineHeight: '1.8', fontWeight: '500'}}>
            ✓ Live Market Prices<br/>
            ✓ Crop Advisory<br/>
            ✓ Government Schemes
          </p>
        </div>
      </div>
    </div>
  );
}