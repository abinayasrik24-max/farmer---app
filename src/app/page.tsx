import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      icon: '📊',
      title: 'Market Data',
      desc: 'Access daily APMC mandi prices and historical trends across Tamil Nadu markets. Compare and sell at best price.'
    },
    {
      icon: '🌤️',
      title: 'Weather Insights',
      desc: 'Accurate 7-day forecasts and alerts to plan sowing, irrigation, and harvesting schedules perfectly.'
    },
    {
      icon: '🏛️',
      title: 'Government Schemes',
      desc: 'Complete information on PM-Kisan, PMFBY, Soil Health Card, and all state subsidy programs with direct links.'
    },
    {
      icon: '💡',
      title: 'Expert Guidance',
      desc: 'Scientific farming practices and crop management tips from agricultural experts and agronomists.'
    }
  ];

  const stats = [
    {number: '10K+', label: 'Active Farmers'},
    {number: '500+', label: 'Mandis Covered'},
    {number: '24/7', label: 'Support'},
    {number: '100%', label: 'Free Platform'}
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)'
    }}>
      
      {/* 1. HERO SECTION - Image 1 ku replacement */}
      <div style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Background Circles */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(76,175,80,0.25) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(46,125,50,0.2) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{
          maxWidth: '900px',
          textAlign: 'center',
          zIndex: 1
        }}>
          
          <div style={{fontSize: '85px', marginBottom: '25px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'}}>🌾</div>
          
          <h1 style={{
            color: '#1b5e20',
            fontSize: '56px',
            fontWeight: '900',
            marginBottom: '22px',
            lineHeight: '1.2',
            textShadow: '0 4px 15px rgba(46,125,50,0.15)'
          }}>
            Smart Agriculture<br/>Intelligence
          </h1>
          
          <p style={{
            color: '#2e7d32',
            fontSize: '20px',
            lineHeight: '1.7',
            marginBottom: '45px',
            fontWeight: '500',
            maxWidth: '700px',
            margin: '0 auto 45px auto'
          }}>
            Real-time market data, weather insights, and farming intelligence powered by technology for modern Indian farmers
          </p>

          <div style={{
            display: 'flex',
            gap: '18px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/market" style={{
              background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
              color: 'white',
              padding: '18px 40px',
              borderRadius: '14px',
              fontSize: '17px',
              fontWeight: '800',
              textDecoration: 'none',
              boxShadow: '0 12px 30px rgba(76,175,80,0.4)',
              transition: 'all 0.3s ease'
            }}>
              📊 Check Market Price
            </Link>
            
            <Link href="/login" style={{
              background: 'white',
              color: '#2e7d32',
              padding: '18px 40px',
              borderRadius: '14px',
              fontSize: '17px',
              fontWeight: '800',
              textDecoration: 'none',
              border: '3px solid #4caf50',
              boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}>
              🚀 Get Started Free
            </Link>
          </div>

        </div>
      </div>

      {/* 2. BUILT FOR FARMERS SECTION - Image 2 ku replacement */}
      <div style={{
        padding: '90px 20px',
        background: 'white'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          
          <div style={{textAlign: 'center', marginBottom: '55px'}}>
            <h2 style={{
              color: '#1b5e20',
              fontSize: '42px',
              fontWeight: '900',
              marginBottom: '15px'
            }}>
              Built for Farmers
            </h2>
            <p style={{
              color: '#2e7d32',
              fontSize: '18px',
              fontWeight: '500'
            }}>
              Technology-driven solutions for modern agriculture
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '30px'
          }}>
            {features.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #f1f8e9 0%, #e8f5e9 100%)',
                padding: '38px 30px',
                borderRadius: '22px',
                textAlign: 'center',
                boxShadow: '0 15px 40px rgba(76, 175, 80, 0.12)',
                borderTop: '5px solid #4caf50',
                transition: 'all 0.3s ease'
              }}>
                
                <div style={{
                  width: '85px',
                  height: '85px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 22px auto',
                  fontSize: '42px',
                  boxShadow: '0 10px 25px rgba(76, 175, 80, 0.25)',
                  border: '3px solid #e8f5e9'
                }}>
                  {item.icon}
                </div>
                
                <h3 style={{
                  color: '#1b5e20',
                  fontSize: '23px',
                  fontWeight: '800',
                  marginBottom: '14px'
                }}>
                  {item.title}
                </h3>
                
                <p style={{
                  color: '#555',
                  fontSize: '15px',
                  lineHeight: '1.7'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. STATS SECTION - Attraction ku */}
      <div style={{
        background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
        padding: '70px 20px'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div style={{
                color: 'white',
                fontSize: '48px',
                fontWeight: '900',
                marginBottom: '8px'
              }}>
                {stat.number}
              </div>
              <div style={{
                color: '#c8e6c9',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FINAL CTA SECTION */}
      <div style={{
        padding: '90px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)'
      }}>
        <h2 style={{
          color: '#1b5e20',
          fontSize: '40px',
          fontWeight: '900',
          marginBottom: '18px'
        }}>
          Ready to Grow Smarter?
        </h2>
        <p style={{
          color: '#2e7d32',
          fontSize: '18px',
          marginBottom: '35px',
          fontWeight: '500'
        }}>
          Join thousands of farmers already using Smart Farmer Portal
        </p>
        <Link href="/login" style={{
          background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
          color: 'white',
          padding: '20px 50px',
          borderRadius: '16px',
          fontSize: '19px',
          fontWeight: '800',
          textDecoration: 'none',
          boxShadow: '0 15px 35px rgba(76,175,80,0.4)',
          display: 'inline-block'
        }}>
          Start Free Today →
        </Link>
      </div>

    </div>
  );
}