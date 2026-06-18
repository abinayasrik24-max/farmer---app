export default function HomePage() {
  return (
    <div style={{padding: '40px 20px'}}>
      
      {/* Hero Section - Farming Banner */}
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        padding: '60px 30px',
        borderRadius: '25px',
        textAlign: 'center',
        marginBottom: '50px',
        border: '2px solid rgba(255,255,255,0.2)',
        boxShadow: '0 15px 50px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{fontSize: '48px', marginBottom: '15px', textShadow: '2px 2px 10px rgba(0,0,0,0.5)'}}>
          🌱 Smart Farmer Portal
        </h1>
        <p style={{fontSize: '20px', opacity: 0.9, marginBottom: '30px'}}>
          Ulliyil Vivasayam - Tech Ulagil Valarchi
        </p>
        <a href="/market-price" style={{
          display: 'inline-block',
          background: '#4caf50',
          color: 'white',
          padding: '15px 35px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0 5px 20px rgba(76,175,80,0.4)',
          transition: 'transform 0.2s'
        }}>
          Live Market Prices →
        </a>
      </div>

      {/* Crop Cards Section */}
      <h2 style={{textAlign: 'center', fontSize: '32px', marginBottom: '30px', textShadow: '1px 1px 5px rgba(0,0,0,0.3)'}}>
        Today's Crop Insights
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '25px',
        maxWidth: '1100px',
        margin: '0 auto 50px'
      }}>
        
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          padding: '30px 20px',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.3)',
          transition: 'transform 0.3s'
        }}>
          <div style={{fontSize: '50px', marginBottom: '10px'}}>🌾</div>
          <h3 style={{fontSize: '22px', marginBottom: '10px'}}>Paddy/Nel</h3>
          <p style={{fontSize: '28px', fontWeight: 'bold', color: '#a5d6a7'}}>₹2200</p>
          <p style={{fontSize: '14px', opacity: 0.8}}>↑ ₹50 vs Yesterday</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          padding: '30px 20px',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <div style={{fontSize: '50px', marginBottom: '10px'}}>🍅</div>
          <h3 style={{fontSize: '22px', marginBottom: '10px'}}>Tomato</h3>
          <p style={{fontSize: '28px', fontWeight: 'bold', color: '#a5d6a7'}}>₹35/kg</p>
          <p style={{fontSize: '14px', opacity: 0.8'}}>↑ ₹3 vs Yesterday</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          padding: '30px 20px',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <div style={{fontSize: '50px', marginBottom: '10px'}}>🥥</div>
          <h3 style={{fontSize: '22px', marginBottom: '10px'}}>Coconut</h3>
          <p style={{fontSize: '28px', fontWeight: 'bold', color: '#a5d6a7'}}>₹35</p>
          <p style={{fontSize: '14px', opacity: 0.8'}}>↑ ₹2 vs Yesterday</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          padding: '30px 20px',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <div style={{fontSize: '50px', marginBottom: '10px'}}>🌶️</div>
          <h3 style={{fontSize: '22px', marginBottom: '10px'}}>Chilli</h3>
          <p style={{fontSize: '28px', fontWeight: 'bold', color: '#a5d6a7'}}>₹120/kg</p>
          <p style={{fontSize: '14px', opacity: 0.8'}}>Stable</p>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        background: 'rgba(0,0,0,0.2)',
        padding: '40px 30px',
        borderRadius: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{fontSize: '28px', marginBottom: '25px'}}>Why Farmers Choose Us?</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px'}}>
          <div>
            <div style={{fontSize: '35px', marginBottom: '8px'}}>📊</div>
            <p style={{fontWeight: 'bold'}}>Live Prices</p>
          </div>
          <div>
            <div style={{fontSize: '35px', marginBottom: '8px'}}>🌦️</div>
            <p style={{fontWeight: 'bold'}}>Weather Alert</p>
          </div>
          <div>
            <div style={{fontSize: '35px', marginBottom: '8px'}}>💡</div>
            <p style={{fontWeight: 'bold'}}>Farming Tips</p>
          </div>
          <div>
            <div style={{fontSize: '35px', marginBottom: '8px'}}>🏛️</div>
            <p style={{fontWeight: 'bold'}}>Govt Schemes</p>
          </div>
        </div>
      </div>

    </div>
  );
}