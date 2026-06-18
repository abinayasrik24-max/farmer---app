'use client';
import Link from 'next/link';

export default function SchemesPage() {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1550989460-0cb38ab3d8e3?w=1600")',
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
          maxWidth: '950px',
          boxShadow: '0 15px 50px rgba(0,0,0,0.4)'
        }}>
          
          <h1 style={{color: '#2e7d32', fontSize: '36px', marginBottom: '30px', textAlign: 'center'}}>
            Government Schemes
          </h1>
          
          <p style={{fontSize: '16px', color: '#555', marginBottom: '30px', textAlign: 'center'}}>
            Financial support and subsidy programs for Indian farmers.
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px'}}>
            
            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '8px', fontSize: '18px'}}>PM-KISAN Scheme</h3>
              <p style={{color: '#555', margin: '0 0 8px 0', fontSize: '15px'}}>Direct income support of ₹6,000 per year in 3 installments.</p>
              <p style={{color: '#777', fontSize: '13px', margin: 0}}>Eligibility: Landholding farmer families</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '8px', fontSize: '18px'}}>PM Fasal Bima Yojana</h3>
              <p style={{color: '#555', margin: '0 0 8px 0', fontSize: '15px'}}>Crop insurance against natural calamities and pests.</p>
              <p style={{color: '#777', fontSize: '13px', margin: 0}}>Coverage: All food and oilseed crops</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '8px', fontSize: '18px'}}>Kisan Credit Card</h3>
              <p style={{color: '#555', margin: '0 0 8px 0', fontSize: '15px'}}>Low interest loans up to ₹3 lakh for agricultural needs.</p>
              <p style={{color: '#777', fontSize: '13px', margin: 0}}>Interest: 4% with timely repayment</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '8px', fontSize: '18px'}}>Soil Health Card</h3>
              <p style={{color: '#555', margin: '0 0 8px 0', fontSize: '15px'}}>Free soil testing and nutrient recommendations every 2 years.</p>
              <p style={{color: '#777', fontSize: '13px', margin: 0}}>Benefit: Optimize fertilizer usage</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '8px', fontSize: '18px'}}>PM-KUSUM Scheme</h3>
              <p style={{color: '#555', margin: '0 0 8px 0', fontSize: '15px'}}>Solar pumps and grid-connected solar power plants for farmers.</p>
              <p style={{color: '#777', fontSize: '13px', margin: 0}}>Subsidy: Up to 60% of project cost</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '8px', fontSize: '18px'}}>Rashtriya Krishi Vikas Yojana</h3>
              <p style={{color: '#555', margin: '0 0 8px 0', fontSize: '15px'}}>Funding for agriculture infrastructure and technology adoption.</p>
              <p style={{color: '#777', fontSize: '13px', margin: 0}}>Support: State-specific projects</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '8px', fontSize: '18px'}}>Paramparagat Krishi Vikas Yojana</h3>
              <p style={{color: '#555', margin: '0 0 8px 0', fontSize: '15px'}}>Promotion of organic farming and chemical-free agriculture.</p>
              <p style={{color: '#777', fontSize: '13px', margin: 0}}>Assistance: ₹50,000 per hectare</p>
            </div>

            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', borderLeft: '4px solid #2e7d32'}}>
              <h3 style={{color: '#2e7d32', marginBottom: '8px', fontSize: '18px'}}>Pradhan Mantri Krishi Sinchai Yojana</h3>
              <p style={{color: '#555', margin: '0 0 8px 0', fontSize: '15px'}}>Improve water use efficiency through micro-irrigation systems.</p>
              <p style={{color: '#777', fontSize: '13px', margin: 0}}>Coverage: Drip and sprinkler systems</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}