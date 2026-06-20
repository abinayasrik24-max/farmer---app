import Link from 'next/link';

export default function HomePage() {
  const features = [
    {icon: '📈', title: 'Live Market Prices', desc: 'Daily Mandi rates from 500+ markets'},
    {icon: '🌤️', title: 'Weather Forecast', desc: '7-day precision forecast for your farm'},
    {icon: '🌱', title: 'Expert Tips', desc: 'Science-backed farming guidance'},
    {icon: '🏛️', title: 'Govt Schemes', desc: 'All farmer schemes in one place'}
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)'
    }}>
      
      {/* Hero Section */}
      <div style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(76,175,80,0.3) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{
          maxWidth: '900px',
          textAlign: 'center',
          zIndex: 1
        }}>
          
          <div style={{fontSize: '80px', marginBottom: '20px'}}>🌾</div>
          
          <h1 style={{
            color: '#1b5e20',
            fontSize: '52px',
            fontWeight: '900',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Smart Agriculture<br/>Intelligence
          </h1>
          
          <p style={{
            color: '#2e7d32',
            fontSize: '19px',
            lineHeight: '1.7',
            marginBottom: '40px',
            fontWeight: '500',
            maxWidth: '650px',
            margin: '0 auto 40px auto'
          }}>
            Real-time market data, weather insights, and farming intelligence powered by technology for modern Indian farmers
          </p>

          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/market" style={{
              background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
              color: 'white',
              padding: '16px 35px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(76,175,80,0.4)',
              display: 'inline-block'
            }}>
              📊 Check Market Price
            </Link>
            
            <Link href="/login" style={{
              background: 'white',
              color: '#2e7d32',
              padding: '16px 35px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              border: '3px solid #4caf50',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              display: 'inline-block'
            }}>
              🚀 Get Started Free
            </Link>
          </div>

        </div>
      </div>

      {/* Features Section */}
      <div style={{
        padding: '80px 20px',
        background: 'white'
      }}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          
          <h2 style={{
            textAlign: 'center',
            color: '#1b5e20',
            fontSize: '36px',
            fontWeight: '900',
            marginBottom: '15px'
          }}>
            Everything You Need
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#555',
            fontSize: '16px',
            marginBottom: '50px'
          }}>
            One platform for all your farming needs
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
                padding: '35px 25px',
                borderRadius: '18px',
                textAlign: 'center',
                borderTop: '4px solid #4caf50',
                boxShadow: '0 8px 25px rgba(76,175,80,0.15)'
              }}>
                <div style={{fontSize: '50px', marginBottom: '15px'}}>{feature.icon}</div>
                <h3 style={{
                  color: '#1b5e20',
                  fontSize: '20px',
                  fontWeight: '800',
                  marginBottom: '10px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#555',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{
        background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
        padding: '60px 20px'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{color: 'white', fontSize: '45px', fontWeight: '900'}}>10K+</div>
            <div style={{color: '#c8e6c9', fontSize: '15px', fontWeight: '600'}}>Active Farmers</div>
          </div>
          <div>
            <div style={{color: 'white', fontSize: '45px', fontWeight: '900'}}>500+</div>
            <div style={{color: '#c8e6c9', fontSize: '15px', fontWeight: '600'}}>Mandis Covered</div>
          </div>
          <div>
            <div style={{color: 'white', fontSize: '45px', fontWeight: '900'}}>24/7</div>
            <div style={{color: '#c8e6c9', fontSize: '15px', fontWeight: '600'}}>Support</div>
          </div>
          <div>
            <div style={{color: 'white', fontSize: '45px', fontWeight: '900'}}>100%</div>
            <div style={{color: '#c8e6c9', fontSize: '15px', fontWeight: '600'}}>Free Forever</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#1b5e20',
          fontSize: '38px',
          fontWeight: '900',
          marginBottom: '15px'
        }}>
          Ready to Grow Smarter?
        </h2>
        <p style={{
          color: '#2e7d32',
          fontSize: '17px',
          marginBottom: '30px'
        }}>
          Join thousands of farmers already using Smart Farmer Portal
        </p>
        <Link href="/login" style={{
          background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
          color: 'white',
          padding: '18px 45px',
          borderRadius: '14px',
          fontSize: '18px',
          fontWeight: '800',
          textDecoration: 'none',
          boxShadow: '0 12px 30px rgba(76,175,80,0.4)',
          display: 'inline-block'
        }}>
          Start Free Today →
        </Link>
      </div>

    </div>
  );
}