'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Navbar - Green theme */}
      <nav style={{
        background: '#2e7d32',
        padding: '15px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold'
      }}>
        <h1 style={{fontSize: '24px', margin: 0}}>🌾 Smart Farmer</h1>
        <div style={{display: 'flex', gap: '30px'}}>
          <Link href="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
          <Link href="/about" style={{color: 'white', textDecoration: 'none'}}>About</Link>
          <Link href="/market-price" style={{color: 'white', textDecoration: 'none'}}>Market Price</Link>
          <Link href="/login" style={{color: 'white', textDecoration: 'none'}}>Login</Link>
        </div>
      </nav>

      {/* Main content - White card center la */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 60px)',
        padding: '40px 20px'
      }}>
        
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          padding: '60px 50px',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '700px',
          boxShadow: '0 15px 50px rgba(0,0,0,0.4)',
          textAlign: 'center'
        }}>
          
          <h1 style={{color: '#2e7d32', fontSize: '42px', marginBottom: '20px'}}>
            Welcome to Smart Farmer 🌾
          </h1>
          
          <p style={{fontSize: '18px', color: '#555', marginBottom: '40px', lineHeight: '1.6'}}>
            Unoda crop details, market price, weather, income, expense ellam orae idathula paaru. 
            10 farmers ku personal dashboard ready ah iruku.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            <div style={{padding: '20px', background: '#e8f5e9', borderRadius: '12px'}}>
              <div style={{fontSize: '30px', marginBottom: '5px'}}>🌾</div>
              <div style={{fontWeight: 'bold', color: '#2e7d32'}}>Crop Details</div>
            </div>
            <div style={{padding: '20px', background: '#e8f5e9', borderRadius: '12px'}}>
              <div style={{fontSize: '30px', marginBottom: '5px'}}>💰</div>
              <div style={{fontWeight: 'bold', color: '#2e7d32'}}>Market Rate</div>
            </div>
            <div style={{padding: '20px', background: '#e8f5e9', borderRadius: '12px'}}>
              <div style={{fontSize: '30px', marginBottom: '5px'}}>🌤️</div>
              <div style={{fontWeight: 'bold', color: '#2e7d32'}}>Weather</div>
            </div>
            <div style={{padding: '20px', background: '#e8f5e9', borderRadius: '12px'}}>
              <div style={{fontSize: '30px', marginBottom: '5px'}}>📊</div>
              <div style={{fontWeight: 'bold', color: '#2e7d32'}}>Profit</div>
            </div>
          </div>

          <Link href="/login" style={{
            background: '#2e7d32',
            color: 'white',
            padding: '18px 50px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            display: 'inline-block',
            cursor: 'pointer'
          }}>
            Farmer Login →
          </Link>

        </div>
      </div>
    </div>
  );
}