export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      
      {/* Subtle dark overlay - white text clear ah theriya */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.45)',
        minHeight: '100vh',
        padding: '0'
      }}>

        {/* Hero Section - Full White Text */}
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
            maxWidth: '900px',
            width: '100%'
          }}>
            <h1 style={{
              fontSize: '72px',
              fontWeight: '800',
              color: 'white',
              marginBottom: '30px',
              letterSpacing: '-2px',
              lineHeight: '1.1',
              textShadow: '0 4px 20px rgba(0,0,0,0.7)'
            }}>
              Smart Agriculture Intelligence
            </h1>
            <p style={{
              fontSize: '24px',
              color: 'white',
              lineHeight: '1.8',
              fontWeight: '400',
              textShadow: '0 2px 15px rgba(0,0,0,0.6)',
              maxWidth: '750px',
              margin: '0 auto'
            }}>
              Real-time market data, weather insights, and farming intelligence 
              powered by technology for modern Indian farmers.
            </p>
          </div>
        </section>

        {/* Features Section - Dark transparent */}
        <section style={{
          padding: '100px 40px',
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{maxWidth: '1100px', margin: '0 auto'}}>
            <h2 style={{
              fontSize: '46px',
              fontWeight: '700',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              Built for Farmers
            </h2>
            <p style={{
              fontSize: '20px',
              color: 'white',
              textAlign: 'center',
              marginBottom: '70px',
              opacity: 0.9
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
                <h4 style={{fontSize: '21px', fontWeight: '600', color: 'white', marginBottom: '14px'}}>Market Data</h4>
                <p style={{color: 'white', lineHeight: '1.8', fontSize: '16px', opacity: 0.9}}>
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
                <h4 style={{fontSize: '21px', fontWeight: '600', color: 'white', marginBottom: '14px'}}>Weather Insights</h4>
                <p style={{color: 'white', lineHeight: '1.8', fontSize: '16px', opacity: 0.9}}>
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
                <h4 style={{fontSize: '21px', fontWeight: '600', color: 'white', marginBottom: '14px'}}>Government Schemes</h4>
                <p style={{color: 'white', lineHeight: '1.8', fontSize: '16px', opacity: 0.9}}>
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
                <h4 style={{fontSize: '21px', fontWeight: '600', color: 'white', marginBottom: '14px'}}>Expert Guidance</h4>
                <p style={{color: 'white', lineHeight: '1.8', fontSize: '16px', opacity: 0.9}}>
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
          color: 'white',
          fontSize: '15px',
          background: 'rgba(0, 0, 0, 0.85)',
          opacity: 0.9
        }}>
          © 2026 Smart Farmer Portal. Empowering agriculture through technology.
        </footer>

      </div>
    </div>
  );
}