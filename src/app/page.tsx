export default function HomePage() {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=1600")',
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
          background: 'rgba(255,255,255,0.97)',
          padding: '60px 50px',
          borderRadius: '25px',
          width: '100%',
          maxWidth: '1000px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
        }}>
          
          <h1 style={{color: '#2e7d32', fontSize: '48px', marginBottom: '15px', textAlign: 'center'}}>
            Empower Your Farming
          </h1>
          
          <p style={{fontSize: '18px', color: '#666', lineHeight: '1.8', marginBottom: '40px', textAlign: 'center'}}>
            Data-driven tools for modern farmers. Track crops, monitor markets, and maximize your yield.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '50px'
          }}>
            <div style={{textAlign: 'center', padding: '25px', background: '#e8f5e9', borderRadius: '15px'}}>
              <h2 style={{color: '#2e7d32', fontSize: '36px', margin: '0 0 8px 0'}}>10K+</h2>
              <p style={{color: '#555', margin: 0}}>Active Farmers</p>
            </div>
            <div style={{textAlign: 'center', padding: '25px', background: '#e8f5e9', borderRadius: '15px'}}>
              <h2 style={{color: '#2e7d32', fontSize: '36px', margin: '0 0 8px 0'}}>500+</h2>
              <p style={{color: '#555', margin: 0}}>Crop Varieties</p>
            </div>
            <div style={{textAlign: 'center', padding: '25px', background: '#e8f5e9', borderRadius: '15px'}}>
              <h2 style={{color: '#2e7d32', fontSize: '36px', margin: '0 0 8px 0'}}>24/7</h2>
              <p style={{color: '#555', margin: 0}}>Weather Updates</p>
            </div>
            <div style={{textAlign: 'center', padding: '25px', background: '#e8f5e9', borderRadius: '15px'}}>
              <h2 style={{color: '#2e7d32', fontSize: '36px', margin: '0 0 8px 0'}}>100%</h2>
              <p style={{color: '#555', margin: 0}}>Free Access</p>
            </div>
          </div>

          <div style={{textAlign: 'center'}}>
            <a href="/login" style={{
              display: 'inline-block',
              padding: '16px 45px',
              background: '#2e7d32',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Get Started Now
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}