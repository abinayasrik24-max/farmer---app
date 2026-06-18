export default function AboutPage() {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 60px)',
        padding: '40px 20px'
      }}>
        
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          padding: '60px 50px',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '800px',
          boxShadow: '0 15px 50px rgba(0,0,0,0.4)'
        }}>
          
          <h1 style={{color: '#2e7d32', fontSize: '40px', marginBottom: '25px', textAlign: 'center'}}>
            About Smart Farmer Portal
          </h1>
          
          <p style={{fontSize: '17px', color: '#555', lineHeight: '1.8', marginBottom: '25px', textAlign: 'center'}}>
            Smart Farmer Portal is a digital platform designed to empower farmers with data-driven insights for modern agriculture.
          </p>

          <div style={{marginBottom: '35px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '22px', marginBottom: '15px'}}>Our Mission</h3>
            <p style={{fontSize: '16px', color: '#555', lineHeight: '1.7'}}>
              To provide accessible technology that helps farmers increase productivity, reduce costs, and make informed decisions through real-time market data, weather forecasts, and crop management tools.
            </p>
          </div>

          <div style={{marginBottom: '35px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '22px', marginBottom: '15px'}}>Key Features</h3>
            <ul style={{fontSize: '16px', color: '#555', lineHeight: '1.8', paddingLeft: '20px'}}>
              <li>Track crop details and growth stages</li>
              <li>Monitor live market prices across regions</li>
              <li>Access accurate weather forecasts</li>
              <li>Calculate income, expenses, and net profit</li>
              <li>Receive expert agricultural guidance</li>
            </ul>
          </div>

          <div>
            <h3 style={{color: '#2e7d32', fontSize: '22px', marginBottom: '15px'}}>Why Choose Us</h3>
            <p style={{fontSize: '16px', color: '#555', lineHeight: '1.7'}}>
              Built specifically for Indian farmers, our platform combines simplicity with powerful analytics. No technical knowledge required. Secure login, personalized dashboard, and mobile-friendly design ensure farmers can access information anytime, anywhere.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}