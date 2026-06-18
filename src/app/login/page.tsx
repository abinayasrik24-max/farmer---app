'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(name.trim() && password.trim()) {
      localStorage.setItem('farmer', JSON.stringify({name: name}));
      alert('Welcome ' + name + '! Login Success 🚜');
      window.location.href = '/dashboard';
    } else {
      alert('Name & Password podu da');
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      
      <form onSubmit={handleLogin} style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '50px 40px',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 15px 50px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)'
      }}>
        
        <h2 style={{
          color: '#2e7d32', 
          textAlign: 'center', 
          marginBottom: '30px',
          fontSize: '32px',
          fontWeight: 'bold'
        }}>
          Farmer Login
        </h2>
        
        <input 
          type="text" 
          placeholder="Farmer Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{
            width: '100%', 
            padding: '15px', 
            margin: '12px 0', 
            border: '2px solid #ddd', 
            borderRadius: '10px',
            fontSize: '16px',
            boxSizing: 'border-box',
            outline: 'none'
          }}
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{
            width: '100%', 
            padding: '15px', 
            margin: '12px 0', 
            border: '2px solid #ddd', 
            borderRadius: '10px',
            fontSize: '16px',
            boxSizing: 'border-box',
            outline: 'none'
          }}
        />
        
        <button 
          type="submit" 
          style={{
            width: '100%', 
            padding: '15px', 
            background: '#2e7d32', 
            color: 'white', 
            border: 'none', 
            borderRadius: '10px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            marginTop: '15px'
          }}
        >
          Login
        </button>
        
        <p style={{textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666'}}>
          Any name + password podu da 🚜
        </p>
      </form>
    </div>
  );
}