export default function TipsPage() {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1600")',
      backgroundSize: 'cover',
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
          maxWidth: '900px',
          boxShadow: '0 15px 50px rgba(0,0,0,0.4)'
        }}>
          
          <h1 style={{color: '#2e7d32', fontSize: '40px', marginBottom: '30px', textAlign: 'center'}}>
            Agricultural Tips
          </h1>
          
          <div style={{marginBottom: '25px', padding: '25px', background: '#e8f5e9', borderRadius: '12px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '20px', marginBottom: '10px'}}>1. Soil Testing</h3>
            <p style={{color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0}}>
              Test soil every 6 months. Use Soil Health Card recommendations for fertilizer application. Right nutrients = better yield.
            </p>
          </div>

          <div style={{marginBottom: '25px', padding: '25px', background: '#e8f5e9', borderRadius: '12px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '20px', marginBottom: '10px'}}>2. Water Management</h3>
            <p style={{color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0}}>
              Use drip irrigation for water efficiency. Water crops early morning or evening to reduce evaporation loss.
            </p>
          </div>

          <div style={{marginBottom: '25px', padding: '25px', background: '#e8f5e9', borderRadius: '12px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '20px', marginBottom: '10px'}}>3. Crop Rotation</h3>
            <p style={{color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0}}>
              Rotate crops seasonally. Legumes after cereals improve soil nitrogen and reduce pest problems naturally.
            </p>
          </div>

          <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '20px', marginBottom: '10px'}}>4. Market Timing</h3>
            <p style={{color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0}}>
              Check market prices before harvest. Sell when demand is high. Use our Market Price page for daily updates.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}