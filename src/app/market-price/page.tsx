export default function AboutPage() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '100px 40px',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '950px',
        margin: '0 auto',
        background: 'rgba(0, 0, 0, 0.5)',  // Only dark transparent, no blue/gray
        backdropFilter: 'blur(15px)',
        padding: '70px 60px',
        borderRadius: '28px',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 25px 70px rgba(0,0,0,0.4)'
      }}>
        
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
          <h1 style={{
            fontSize: '52px',
            fontWeight: '800',
            color: 'white',
            marginBottom: '18px',
            letterSpacing: '-1.5px',
            textShadow: '0 4px 25px rgba(0,0,0,0.8)'
          }}>
            About Smart Farmer Portal
          </h1>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #22c55e, #16a34a)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <p style={{
          fontSize: '19px',
          color: 'white',
          lineHeight: '1.9',
          marginBottom: '28px',
          opacity: 0.96,
          textShadow: '0 2px 12px rgba(0,0,0,0.6)'
        }}>
          Smart Farmer Portal is a cutting-edge digital ecosystem designed to revolutionize 
          Indian agriculture. We empower farmers with real-time market intelligence, precision 
          weather forecasts, and science-backed farming guidance - all at their fingertips.
        </p>

        <p style={{
          fontSize: '19px',
          color: 'white',
          lineHeight: '1.9',
          marginBottom: '28px',
          opacity: 0.96,
          textShadow: '0 2px 12px rgba(0,0,0,0.6)'
        }}>
          Our platform bridges the gap between traditional farming wisdom and modern technology. 
          By delivering transparent market data and actionable insights, we help farmers maximize 
          yield, reduce risks, and secure better income for their hard work.
        </p>

        <p style={{
          fontSize: '19px',
          color: 'white',
          lineHeight: '1.9',
          marginBottom: '55px',
          opacity: 0.96,
          textShadow: '0 2px 12px rgba(0,0,0,0.6)'
        }}>
          Built by farmers, for farmers. We believe every farmer deserves access to the same 
          tools and information that drive success in modern agriculture.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '35px',
          marginTop: '40px'
        }}>
          <div style={{
            background: 'rgba(34, 197, 94, 0.12)',
            padding: '40px 35px',
            borderRadius: '20px',
            border: '1px solid rgba(34, 197, 94, 0.3)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              marginBottom: '20px'
            }}>🎯</div>
            <h3 style={{fontSize: '24px', color: 'white', marginBottom: '15px', fontWeight: '700'}}>Our Vision</h3>
            <p style={{color: 'white', opacity: 0.92, lineHeight: '1.8', fontSize: '16px'}}>
              To create a digitally empowered farming community where every farmer has instant 
              access to data, insights, and opportunities for sustainable growth.
            </p>
          </div>

          <div style={{
            background: 'rgba(34, 197, 94, 0.12)',
            padding: '40px 35px',
            borderRadius: '20px',
            border: '1px solid rgba(34, 197, 94, 0.3)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              marginBottom: '20px'
            }}>🚀</div>
            <h3 style={{fontSize: '24px', color: 'white', marginBottom: '15px', fontWeight: '700'}}>Our Mission</h3>
            <p style={{color: 'white', opacity: 0.92, lineHeight: '1.8', fontSize: '16px'}}>
              Deliver accurate, real-time agricultural intelligence that helps farmers make 
              smarter decisions, improve productivity, and build a profitable future.
            </p>
          </div>
        </div>

        <div style={{
          marginTop: '70px',
          paddingTop: '50px',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{fontSize: '42px', fontWeight: '800', color: '#4ade80'}}>1000+</div>
            <div style={{fontSize: '15px', color: 'white', opacity: 0.85, marginTop: '8px'}}>Farmers Served</div>
          </div>
          <div>
            <div style={{fontSize: '42px', fontWeight: '800', color: '#4ade80'}}>50+</div>
            <div style={{fontSize: '15px', color: 'white', opacity: 0.85, marginTop: '8px'}}>Mandi Markets</div>
          </div>
          <div>
            <div style={{fontSize: '42px', fontWeight: '800', color: '#4ade80'}}>24/7</div>
            <div style={{fontSize: '15px', color: 'white', opacity: 0.85, marginTop: '8px'}}>Data Access</div>
          </div>
          <div>
            <div style={{fontSize: '42px', fontWeight: '800', color: '#4ade80'}}>100%</div>
            <div style={{fontSize: '15px', color: 'white', opacity: 0.85, marginTop: '8px'}}>Free Platform</div>
          </div>
        </div>

      </div>
    </div>
  );
}