export default function AboutPage() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '80px 40px',
      color: 'white'  // White text for green grass background
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(0, 0, 0, 0.6)',  // Semi-transparent dark box
        backdropFilter: 'blur(10px)',
        padding: '60px 50px',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '800',
          color: 'white',
          marginBottom: '30px',
          textAlign: 'center',
          textShadow: '0 4px 20px rgba(0,0,0,0.7)'
        }}>
          About Smart Farmer Portal
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: 'white',
          lineHeight: '1.8',
          marginBottom: '25px',
          opacity: 0.95
        }}>
          Smart Farmer Portal is a technology-driven platform built to empower Indian farmers 
          with real-time market data, weather insights, and agricultural intelligence.
        </p>

        <p style={{
          fontSize: '18px',
          color: 'white',
          lineHeight: '1.8',
          marginBottom: '25px',
          opacity: 0.95
        }}>
          Our mission is to bridge the gap between traditional farming and modern technology, 
          helping farmers make informed decisions for better yield and income.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginTop: '50px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{fontSize: '22px', color: 'white', marginBottom: '12px'}}>Our Vision</h3>
            <p style={{color: 'white', opacity: 0.9, lineHeight: '1.7'}}>
              To digitize agriculture and make farming data accessible to every farmer in India.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{fontSize: '22px', color: 'white', marginBottom: '12px'}}>Our Mission</h3>
            <p style={{color: 'white', opacity: 0.9, lineHeight: '1.7'}}>
              Provide accurate market prices, weather alerts, and expert guidance at farmers' fingertips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}