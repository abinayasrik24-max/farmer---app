export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-1444858291049-58f756a3bdd6?q=80&w=2000&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      
      {/* Light green overlay - field nalla theriyum */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(20,83,45,0.75) 0%, rgba(34,139,34,0.65) 100%)',
        minHeight: '100vh',
        padding: '0'
      }}>

        {/* Hero Section */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '85vh',
          padding: '80px 40px'
        }}>
          <div style={{
            maxWidth: '850px',
            width: '100%'
          }}>
            <h1 style={{
              fontSize: '68px',
              fontWeight: '800',
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-2px',
              lineHeight: '1.1',
              textShadow: '0 4px 25px rgba(0,0,0,0.6)'
            }}>
              Smart Agriculture Intelligence
            </h1>
            <p style={{
              fontSize: '22px',
              color: '#f0fdf4',
              marginBottom: '55px',
              lineHeight: '1.7',
              fontWeight: '400',
              textShadow: '0 2px 12px rgba(0,0,0,0.5)'
            }}>
              Real-time market data, weather insights, and farming intelligence 
              powered by technology for modern Indian farmers.
            </p>
            <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="/market-price" style={{
                background: 'white',
                color: '#15803d',
                padding: '18px 42px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '17px',
                fontWeight: '700',
                display: 'inline-block',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
              }}>
                View Market Data
              </a>
              <a href="/tips" style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                padding: '18px 42px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '17px',
                fontWeight: '600',
                border: '2px solid white',
                backdropFilter: 'blur(10px)'
              }}>
                Farming Tips
              </a>
            </div>
          </div>
        </section>

        {/* Features Section - Transparent */}
        <section style={{
          padding: '100px 40px',
          background: 'rgba(20, 83, 45, 0.85)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{maxWidth: '1100px', margin: '0 auto'}}>
            <h2 style={{
              fontSize: '44px',
              fontWeight: '700',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              Built for Farmers
            </h2>
            <p style={{
              fontSize: '19px',
              color: '#dcfce7',
              textAlign: 'center',
              marginBottom: '70px'
            }}>
              Technology-driven solutions for modern agriculture
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '50px'
            }}>
              <div>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'white',
                  borderRadius: '16px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}>📊</div>
                <h4 style={{fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Market Data</h4>
                <p style={{color: '#dcfce7', lineHeight: '1.7', fontSize: '15px'}}>
                  Access daily APMC mandi prices and historical trends across Tamil Nadu markets.
                </p>
              </div>
              
              <div>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'white',
                  borderRadius: '16px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}>🌦️</div>
                <h4 style={{fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Weather Insights</h4>
                <p style={{color: '#dcfce7', lineHeight: '1.7', fontSize: '15px'}}>
                  Accurate forecasts and alerts to plan sowing, irrigation, and harvesting schedules.
                </p>
              </div>
              
              <div>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'white',
                  borderRadius: '16px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}>🏛️</div>
                <h4 style={{fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Government Schemes</h4>
                <p style={{color: '#dcfce7', lineHeight: '1.7', fontSize: '15px'}}>
                  Complete information on PM-Kisan, PMFBY, and state subsidy programs.
                </p>
              </div>
              
              <div>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'white',
                  borderRadius: '16px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}>💡</div>
                <h4 style={{fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px'}}>Expert Guidance</h4>
                <p style={{color: '#dcfce7', lineHeight: '1.7', fontSize: '15px'}}>
                  Scientific farming practices and crop management tips from agricultural experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '50px 40px',
          textAlign: 'center',
          color: '#bbf7d0',
          fontSize: '15px',
          background: 'rgba(20, 83, 45, 0.95)'
        }}>
          © 2026 Smart Farmer Portal. Empowering agriculture through technology.
        </footer>

      </div>
    </div>
  );
}