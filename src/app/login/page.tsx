'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if(name && password) {
      localStorage.setItem('farmer', JSON.stringify({name: name}))
      window.location.href = '/dashboard'
    } else {
      alert('Name & Password podu da')
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh'}}>
      <form onSubmit={handleLogin} style={{background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.2)'}}>
        <h2 style={{color: '#2e7d32', textAlign: 'center'}}>Login</h2>
        
        <input 
          type="text" 
          placeholder="Farmer Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{width: '100%', padding: '12px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '5px'}} 
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{width: '100%', padding: '12px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '5px'}} 
        />
        
        <button 
          type="submit" 
          style={{width: '100%', padding: '12px', background: '#2e7d32', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold'}}>
          Login
        </button>
      </form>
    </div>
  )
}