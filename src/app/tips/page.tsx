'use client';
import Link from 'next/link';

export default function TipsPage() {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      <nav style={{
        background: '#2e7d32',
        padding: '15px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold'
      }}>
        <h1 style={{fontSize: '24px', margin: 0}}>Smart Farmer Portal</h1>
        <div style={{display: 'flex', gap: '30px'}}>
          <Link href="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
          <Link href="/about" style={{color: 'white', textDecoration: 'none'}}>About</Link>
          <Link href="/market-price" style={{color: 'white', textDecoration: 'none'}}>Market</Link>
          <Link href="/login" style={{color: 'white', textDecoration: 'none'}}>Login</Link>
          <Link href="/tips" style={{color: 'white', textDecoration: 'none'}}>Agri Tips</Link>
          <Link href="/schemes" style={{color: 'white', textDecoration: 'none'}}>Schemes</Link>
          <Link href="/help" style={{color: 'white', textDecoration: 'none'}}>Help</Link>
        </div>
      </nav>

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
          
          <h1 style={{color: '#2e7d32', fontSize: '36px', marginBottom: '30px', textAlign: 'center'}}>
            Agricultural Tips
          </h1>
          
          <p style={{fontSize: '16px', color: '#555', marginBottom: '30px', textAlign: 'center'}}>
            Expert guidance for better crop yield and sustainable farming.
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px'}}>
            
            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '10px', fontSize: '18px'}}>Soil Health Management</h3>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Test soil pH and nutrients before planting. Use organic compost to improve fertility.</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '10px', fontSize: '18px'}}>Water Conservation</h3>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Use drip irrigation. Schedule watering during early morning to reduce evaporation.</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '10px', fontSize: '18px'}}>Pest Control</h3>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Apply integrated pest management. Use natural predators instead of chemicals.</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '10px', fontSize: '18px'}}>Crop Rotation</h3>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Rotate crops seasonally to maintain soil nutrients and prevent disease buildup.</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '10px', fontSize: '18px'}}>Seed Selection</h3>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Choose certified seeds suitable for local climate. Check germination rate before sowing.</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '10px', fontSize: '18px'}}>Fertilizer Management</h3>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Apply fertilizers based on soil test results. Avoid overuse to prevent soil damage.</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '10px', fontSize: '18px'}}>Weather Monitoring</h3>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Track weather forecasts. Protect crops from unexpected rain or heat waves.</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '10px', fontSize: '18px'}}>Post-Harvest Storage</h3>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Store grains in dry, ventilated spaces. Use airtight containers to prevent moisture.</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}