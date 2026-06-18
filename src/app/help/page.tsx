
export default function HelpPage() {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600")',
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
          maxWidth: '800px',
          boxShadow: '0 15px 50px rgba(0,0,0,0.4)'
        }}>
          
          <h1 style={{color: '#2e7d32', fontSize: '36px', marginBottom: '30px', textAlign: 'center'}}>
            Help & Support
          </h1>
          
          <p style={{fontSize: '16px', color: '#555', marginBottom: '35px', textAlign: 'center'}}>
            Need assistance? Find answers and contact our support team.
          </p>

          <div style={{marginBottom: '35px'}}>
            <h3 style={{color: '#2e7d32', fontSize: '20px', marginBottom: '15px'}}>Frequently Asked Questions</h3>
            
            <div style={{marginBottom: '20px', padding: '20px', background: '#e8f5e9', borderRadius: '10px'}}>
              <p style={{fontWeight: 'bold', color: '#2e7d32', margin: '0 0 8px 0'}}>How do I register?</p>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Click Login → Create Account. Enter mobile number and complete OTP verification.</p>
            </div>

            <div style={{marginBottom: '20px', padding: '20px', background: '#e8f5e9', borderRadius: '10px'}}>
              <p style={{fontWeight: 'bold', color: '#2e7d32', margin: '0 0 8px 0'}}>How to update crop details?</p>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>After login, go to Dashboard → Add Crop → Fill details and save.</p>
            </div>

            <div style={{marginBottom: '20px', padding: '20px', background: '#e8f5e9', borderRadius: '10px'}}>
              <p style={{fontWeight: 'bold', color: '#2e7d32', margin: '0 0 8px 0'}}>Is the platform free?</p>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Yes, Smart Farmer Portal is completely free for all registered farmers.</p>
            </div>

            <div style={{marginBottom: '20px', padding: '20px', background: '#e8f5e9', borderRadius: '10px'}}>
              <p style={{fontWeight: 'bold', color: '#2e7d32', margin: '0 0 8px 0'}}>How to check market prices?</p>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Click Market Price in navbar. Select crop and location for live prices.</p>
            </div>

            <div style={{marginBottom: '20px', padding: '20px', background: '#e8f5e9', borderRadius: '10px'}}>
              <p style={{fontWeight: 'bold', color: '#2e7d32', margin: '0 0 8px 0'}}>Forgot password?</p>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Click Login → Forgot Password → Enter mobile number → Reset via OTP.</p>
            </div>

            <div style={{marginBottom: '20px', padding: '20px', background: '#e8f5e9', borderRadius: '10px'}}>
              <p style={{fontWeight: 'bold', color: '#2e7d32', margin: '0 0 8px 0'}}>Can I access on mobile?</p>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Yes, the portal is mobile-friendly. Works on all smartphones and browsers.</p>
            </div>

            <div style={{marginBottom: '20px', padding: '20px', background: '#e8f5e9', borderRadius: '10px'}}>
              <p style={{fontWeight: 'bold', color: '#2e7d32', margin: '0 0 8px 0'}}>How often is data updated?</p>
              <p style={{color: '#555', margin: 0, fontSize: '15px'}}>Market prices update daily. Weather data updates every 3 hours.</p>
            </div>
          </div>

          <div>
            <h3 style={{color: '#2e7d32', fontSize: '20px', marginBottom: '15px'}}>Contact Support</h3>
            <div style={{padding: '25px', background: '#e8f5e9', borderRadius: '12px', textAlign: 'center'}}>
              <p style={{color: '#555', margin: '0 0 10px 0', fontSize: '16px'}}>Email: support@smartfarmer.com</p>
              <p style={{color: '#555', margin: '0 0 10px 0', fontSize: '16px'}}>Phone: 1800-XXX-XXXX</p>
              <p style={{color: '#777', fontSize: '14px', margin: 0}}>Timings: Mon-Sat, 9 AM to 6 PM</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}