export default function AboutPage() {
  const features = [
    {icon: '📊', title: 'Real-time Market Prices', desc: 'Live Mandi prices updated daily. Compare rates across districts and sell at best price.'},
    {icon: '🌤️', title: 'Weather Forecast', desc: '7-day precision weather forecast for your location. Plan farming activities smartly.'},
    {icon: '🌱', title: 'Expert Farming Tips', desc: 'Science-backed tips from agricultural experts. Improve yield with proven techniques.'},
    {icon: '🏛️', title: 'Govt Schemes', desc: 'All central & state farmer schemes in one place. Direct links to apply and avail benefits.'}
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #a5d6a7 100%)',
      padding: '60px 20px'
    }}>
      
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>
        
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
          padding: '60px 40px',
          borderRadius: '24px',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 20px 50px rgba(46, 125, 50, 0.4)'
        }}>
          <div style={{fontSize: '70px', marginBottom: '20px'}}>🌾</div>
          <h1 style={{
            color: 'white',
            fontSize: '45px',
            fontWeight: '900',
            marginBottom: '15px'
          }}>
            About Smart Farmer Portal
          </h1>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#81c784',
            margin: '0 auto 20px auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            color: '#c8e6c9',
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto',
            fontWeight: '500'
          }}>
            Empowering Indian farmers with technology, real-time data, and expert guidance for profitable and sustainable agriculture
          </p>
        </div>

        {/* Mission Section */}
        <div style={{
          background: 'white',
          padding: '50px 40px',
          borderRadius: '20px',
          marginBottom: '40px',
          boxShadow: '0 12px 35px rgba(76, 175, 80, 0.15)',
          borderTop: '5px solid #4caf50'
        }}>
          <h2 style={{
            color: '#1b5e20',
            fontSize: '32px',
            fontWeight: '800',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Our Mission
          </h2>
          <p style={{
            color: '#424242',
            fontSize: '17px',
            lineHeight: '1.8',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 25px auto'
          }}>
            Smart Farmer Portal is a cutting-edge digital ecosystem designed to revolutionize Indian agriculture. 
            We bridge the gap between traditional farming wisdom and modern technology.
          </p>
          <p style={{
            color: '#424242',
            fontSize: '17px',
            lineHeight: '1.8',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            By delivering transparent market data, precision weather forecasts, and actionable insights, 
            we help farmers maximize yield, reduce risks, and secure better income.
          </p>
        </div>

        {/* Features Grid */}
        <h2 style={{
          color: '#1b5e20',
          fontSize: '32px',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '35px'
        }}>
          What We Offer
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px',
          marginBottom: '50px'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '35px 25px',
              borderRadius: '18px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              borderBottom: '4px solid #4caf50'
            }}>
              <div style={{fontSize: '50px', marginBottom: '15px'}}>{feature.icon}</div>
              <h3 style={{
                color: '#1b5e20',
                fontSize: '19px',
                fontWeight: '800',
                marginBottom: '12px'
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

        {/* Stats Section */}
        <div style={{
          background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
          padding: '40px',
          borderRadius: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '30px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{color: 'white', fontSize: '40px', fontWeight: '900'}}>10K+</div>
            <div style={{color: '#c8e6c9', fontSize: '15px', fontWeight: '600'}}>Farmers Registered</div>
          </div>
          <div>
            <div style={{color: 'white', fontSize: '40px', fontWeight: '900'}}>500+</div>
            <div style={{color: '#c8e6c9', fontSize: '15px', fontWeight: '600'}}>Mandis Covered</div>
          </div>
          <div>
            <div style={{color: 'white', fontSize: '40px', fontWeight: '900'}}>24/7</div>
            <div style={{color: '#c8e6c9', fontSize: '15px', fontWeight: '600'}}>Support Available</div>
          </div>
          <div>
            <div style={{color: 'white', fontSize: '40px', fontWeight: '900'}}>100%</div>
            <div style={{color: '#c8e6c9', fontSize: '15px', fontWeight: '600'}}>Free Platform</div>
          </div>
        </div>

      </div>
    </div>
  );
}