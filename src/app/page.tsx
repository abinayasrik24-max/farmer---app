import Link from 'next/link';

export default function HomePage() {
  const features = [
    {icon: '📊', title: 'Market Data', desc: 'Daily APMC mandi prices from 500+ Tamil Nadu markets. Compare rates and sell at best price.'},
    {icon: '🌤️', title: 'Weather Insights', desc: '7-day precision forecast for your exact location. Plan sowing, irrigation, harvesting.'},
    {icon: '🏛️', title: 'Govt Schemes', desc: 'PM-Kisan, PMFBY, Soil Health Card, KCC - all schemes with direct application links.'},
    {icon: '💡', title: 'Expert Guidance', desc: 'Science-backed tips from agricultural experts. Improve yield with proven techniques.'}
  ];

  return (
    <div style={{background: '#f8fff9'}}>
      
      {/* SECTION 1: HERO - Tight Top Spacing */}
<section style={{
  textAlign: 'center', 
  padding: '20px 20px',
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)'
}}>
        <div style={{maxWidth: '850px', textAlign: 'center', zIndex: 2}}>
          <div style={{fontSize: '70px', marginBottom: '15px'}}>🌾</div>
          <h1 style={{
            color: '#1b5e20',
            fontSize: '48px',
            fontWeight: '900',
            marginBottom: '15px',
            lineHeight: '1.25'
          }}>
            Smart Agriculture Intelligence
          </h1>
          <p style={{
            color: '#2e7d32',
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '30px',
            fontWeight: '500'
          }}>
            Real-time market data, weather insights, and farming intelligence for modern Indian farmers
          </p>
          <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/market" style={{
              background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
              color: 'white',
              padding: '15px 35px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(76,175,80,0.4)'
            }}>
              📊 Check Market Price
            </Link>
            <Link href="/login" style={{
              background: 'white',
              color: '#2e7d32',
              padding: '15px 35px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              border: '3px solid #4caf50'
            }}>
              🚀 Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section style={{
        padding: '60px 20px',
        background: 'white'
      }}>
        <div style={{maxWidth: '1150px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h2 style={{color: '#1b5e20', fontSize: '36px', fontWeight: '900', marginBottom: '10px'}}>
              Built for Farmers
            </h2>
            <p style={{color: '#2e7d32', fontSize: '16px', fontWeight: '500'}}>
              Technology-driven solutions for modern agriculture
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '25px'
          }}>
            {features.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #f1f8e9 0%, #e8f5e9 100%)',
                padding: '30px 25px',
                borderRadius: '18px',
                textAlign: 'center',
                borderTop: '4px solid #4caf50',
                boxShadow: '0 10px 30px rgba(76, 175, 80, 0.12)'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px auto',
                  fontSize: '35px',
                  boxShadow: '0 8px 20px rgba(76, 175, 80, 0.2)'
                }}>
                  {item.icon}
                </div>
                <h3 style={{color: '#1b5e20', fontSize: '20px', fontWeight: '800', marginBottom: '10px'}}>
                  {item.title}
                </h3>
                <p style={{color: '#555', fontSize: '14px', lineHeight: '1.6'}}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: STATS */}
      <section style={{
        padding: '50px 20px',
        background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)'
      }}>
        <div style={{
          maxWidth: '950px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '30px',
          textAlign: 'center'
        }}>
          <div><div style={{color: 'white', fontSize: '40px', fontWeight: '900'}}>10K+</div><div style={{color: '#c8e6c9', fontSize: '14px', fontWeight: '600'}}>Farmers</div></div>
          <div><div style={{color: 'white', fontSize: '40px', fontWeight: '900'}}>500+</div><div style={{color: '#c8e6c9', fontSize: '14px', fontWeight: '600'}}>Mandis</div></div>
          <div><div style={{color: 'white', fontSize: '40px', fontWeight: '900'}}>24/7</div><div style={{color: '#c8e6c9', fontSize: '14px', fontWeight: '600'}}>Support</div></div>
          <div><div style={{color: 'white', fontSize: '40px', fontWeight: '900'}}>100%</div><div style={{color: '#c8e6c9', fontSize: '14px', fontWeight: '600'}}>Free</div></div>
        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)'
      }}>
        <h2 style={{color: '#1b5e20', fontSize: '34px', fontWeight: '900', marginBottom: '12px'}}>
          Ready to Grow Smarter?
        </h2>
        <p style={{color: '#2e7d32', fontSize: '16px', marginBottom: '25px', fontWeight: '500'}}>
          Join thousands of farmers using Smart Farmer Portal today
        </p>
        <Link href="/login" style={{
          background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
          color: 'white',
          padding: '16px 40px',
          borderRadius: '14px',
          fontSize: '17px',
          fontWeight: '800',
          textDecoration: 'none',
          boxShadow: '0 12px 30px rgba(76,175,80,0.4)'
        }}>
          Start Free Today →
        </Link>
      </section>

    </div>
  );
}