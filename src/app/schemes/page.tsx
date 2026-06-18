export default function SchemesPage() {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1600")',
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
            Government Schemes
          </h1>
          
          <div style={{marginBottom: '30px', padding: '25px', background: '#e8f5e9', borderRadius: '12px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '22px', marginBottom: '10px'}}>PM-KISAN Yojana</h3>
            <p style={{color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0}}>
              ₹6000 per year direct income support for farmers. ₹2000 in 3 installments directly to bank account.
            </p>
          </div>

          <div style={{marginBottom: '30px', padding: '25px', background: '#e8f5e9', borderRadius: '12px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '22px', marginBottom: '10px'}}>Pradhan Mantri Fasal Bima Yojana</h3>
            <p style={{color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0}}>
              Crop insurance scheme for farmers. Low premium, high coverage for natural calamities and crop loss.
            </p>
          </div>

          <div style={{marginBottom: '30px', padding: '25px', background: '#e8f5e9', borderRadius: '12px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '22px', marginBottom: '10px'}}>Soil Health Card Scheme</h3>
            <p style={{color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0}}>
              Free soil testing every 2 years. Get recommendations for fertilizers and crop selection based on soil quality.
            </p>
          </div>

          <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '22px', marginBottom: '10px'}}>Kisan Credit Card</h3>
            <p style={{color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0}}>
              Low interest loans up to ₹3 lakh for farmers. Easy repayment and interest subsidy available.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}