"use client";
import Link from "next/link";

export default function Home() {
  const bgStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  };

  return (
    <div style={bgStyle}>
      <div style={{backgroundColor: 'rgba(46, 125, 50, 0.9)', padding: '15px', display: 'flex', justifyContent: 'center', gap: '40px'}}>
        <Link href="/" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px'}}>Home</Link>
        <Link href="/about" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>About</Link>
        <Link href="/dashboard" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>Login</Link>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh'}}>
        <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '50px', borderRadius: '20px', textAlign: 'center', maxWidth: '600px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
          <h1 style={{color: '#2e7d32', fontSize: '40px', margin: 0}}>🌾 Smart Farmer App</h1>
          <p style={{fontSize: '20px', marginTop: '20px', color: '#555'}}>
            Manage Your Crops, Market Prices, and Profits Smartly
          </p>
          <Link href="/dashboard" style={{
            display: 'inline-block',
            marginTop: '30px',
            padding: '15px 40px',
            backgroundColor: '#2e7d32',
            color: 'white',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Login →
          </Link>
        </div>
      </div>
    </div>
  )
}