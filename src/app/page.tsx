'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Navbar - Different color */}
      <nav style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        padding: '20px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.2)'
      }}>
        <h1 style={{color: 'white', fontSize: '28px', fontWeight: 'bold', margin: 0}}>
          🌾 Smart Farmer
        </h1>
        <div style={{display: 'flex', gap: '30px'}}>
          <Link href="/" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>Home</Link>
          <Link href="/about" style={{color: 'white', textDecoration: 'none'}}>About</Link>
          <Link href="/market-price" style={{color: 'white', textDecoration: 'none'}}>Market</Link>
          <Link href="/login" style={{
            background: 'white',
            color: '#667eea',
            padding: '10px 25px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section - Gradient bg, no drone image */}
      <div style={{
        textAlign: 'center',
        padding: '100px 20px 80px',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '60px',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
        }}>
          Smart Farming for Smart Farmers
        </h1>
        <p style={{
          fontSize: '20px',
          marginBottom: '40px',
          opacity: '0.9',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          Crop details, Market prices, Weather updates, Profit calculation - ellam orae idathula 🚜
        </p>
        <Link href="/login" style={{
          background: 'white',
          color: '#667eea',
          padding: '18px 45px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          display: 'inline-block',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s'
        }}>
          Get Started Free →
        </Link>
      </div>

      {/* Feature Cards - Glass effect, no white box */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        padding: '0 50px 100px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          padding: '40px 30px',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.3)',
          textAlign: 'center',
          color: 'white'
        }}>
          <div style={{fontSize: '50px', marginBottom: '15px'}}>📊</div>
          <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Market Prices</h3>
          <p style={{opacity: '0.9'}}>Live mandi rates, Comparison, Profit calculation</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          padding: '40px 30px',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.3)',
          textAlign: 'center',
          color: 'white'
        }}>
          <div style={{fontSize: '50px', marginBottom: '15px'}}>🌤️</div>
          <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Weather Forecast</h3>
          <p style={{opacity: '0.9'}}>Daily weather, Rain alerts, Farming tips</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          padding: '40px 30px',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.3)',
          textAlign: 'center',
          color: 'white'
        }}>
          <div style={{fontSize: '50px', marginBottom: '15px'}}>💰</div>
          <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Income Tracker</h3>
          <p style={{opacity: '0.9'}}>Expense, Income, Net Profit auto calculate</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          padding: '40px 30px',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.3)',
          textAlign: 'center',
          color: 'white'
        }}>
          <div style={{fontSize: '50px', marginBottom: '15px'}}>🌱</div>
          <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Crop Tips</h3>
          <p style={{opacity: '0.9'}}>Expert advice for better yield</p>
        </div>

      </div>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0,0,0,0.3)',
        color: 'white',
        textAlign: 'center',
        padding: '30px',
        borderTop: '1px solid rgba(255,255,255,0.2)'
      }}>
        <p style={{margin: 0}}>© 2026 Smart Farmer App | Made for Tamil Nadu Farmers 💚</p>
      </footer>
    </div>
  );
}