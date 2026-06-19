export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '0',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      
      {/* Hero Section - Minimal Professional */}
      <section style={{
        padding: '120px 40px 80px',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '64px',
          fontWeight: '800',
          color: 'white',
          marginBottom: '20px',
          letterSpacing: '-2px',
          lineHeight: '1.1'
        }}>
          Smart Agriculture Intelligence
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#cbd5e1',
          marginBottom: '50px',
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          Real-time market prices, weather insights, and farming intelligence 
          powered by technology for modern Indian farmers.
        </p>
        <a href="/market-price" style={{
          background: '#3b82f6',
          color: 'white',
          padding: '16px 40px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontSize: '17px',
          fontWeight: '600',
          display: 'inline-block',
          transition: 'all 0.2s',
          boxShadow: '0 4px 14px rgba(59,130,246,0.4)'
        }}>
          View Market Data
        </a>
      </section>

      {/* Live Prices Section - Screenshot style but professional */}
      <section style={{
        padding: '60px 40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: 'white',
          textAlign: 'center',
          marginBottom: '50px',
          letterSpacing: '-1px'
        }}>
          Live Mandi Prices
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          
          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '16px',
            padding: '40px 30px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              borderRadius: '12px',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 'bold',
              color: 'white'
            }}>FF</div>
            <h3 style={{fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Paddy</h3>
            <p style={{fontSize: '32px', fontWeight: '700', color: 'white', marginBottom: '8px'}}>₹2,200</p>
            <p style={{fontSize: '14px', color: '#4ade80', fontWeight: '500'}}>↑ ₹50 from yesterday</p>
          </div>

          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '16px',
            padding: '40px 30px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              borderRadius: '12px',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px'
            }}>🍅</div>
            <h3 style={{fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Tomato</h3>
            <p style={{fontSize: '32px', fontWeight: '700', color: 'white', marginBottom: '8px'}}>₹35/kg</p>
            <p style={{fontSize: '14px', color: '#4ade80', fontWeight: '500'}}>↑ ₹3 from yesterday</p>
          </div>

          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '16px',
            padding: '40px 30px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
              borderRadius: '12px',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px'
            }}>🧅</div>
            <h3 style={{fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Onion</h3>
            <p style={{fontSize: '32px', fontWeight: '700', color: 'white', marginBottom: '8px'}}>₹28/kg</p>
            <p style={{fontSize: '14px', color: '#f87171', fontWeight: '500'}}>↓ ₹2 from yesterday</p>
          </div>

          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '16px',
            padding: '40px 30px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
              borderRadius: '12px',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px'
            }}>🥥</div>
            <h3 style={{fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Coconut</h3>
            <p style={{fontSize: '32px', fontWeight: '700', color: 'white', marginBottom: '8px'}}>₹35</p>
            <p style={{fontSize: '14px', color: '#4ade80', fontWeight: '500'}}>↑ ₹2 from yesterday</p>
          </div>
        </div>
      </section>

      {/* Features - Clean Grid */}
      <section style={{
        padding: '100px 40px',
        background: 'rgba(15, 23, 42, 0.5)',
        borderTop: '1px solid rgba(148, 163, 184, 0.1)'
      }}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            Built for Farmers
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Everything you need to make informed farming decisions
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            <div>
              <h4 style={{fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Live Market Data</h4>
              <p style={{color: '#94a3b8', lineHeight: '1.6', fontSize: '15px'}}>
                Daily APMC mandi prices across Tamil Nadu with historical trends
              </p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Weather Intelligence</h4>
              <p style={{color: '#94a3b8', lineHeight: '1.6', fontSize: '15px'}}>
                Accurate forecasts and alerts for sowing, irrigation, and harvesting
              </p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Government Schemes</h4>
              <p style={{color: '#94a3b8', lineHeight: '1.6', fontSize: '15px'}}>
                PM-Kisan, PMFBY, and state subsidy information in one place
              </p>
            </div>
            <div>
              <h4 style={{fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Expert Insights</h4>
              <p style={{color: '#94a3b8', lineHeight: '1.6', fontSize: '15px'}}>
                Scientific farming practices from agricultural research institutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        textAlign: 'center',
        borderTop: '1px solid rgba(148, 163, 184, 0.1)',
        color: '#64748b',
        fontSize: '14px'
      }}>
        © 2026 Smart Farmer Portal. Empowering agriculture through technology.
      </footer>

    </div>
  );
}