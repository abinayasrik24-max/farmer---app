export default function MarketPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a1f0a 0%, #143d14 100%)', // Dark green solid
      padding: '90px 40px',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        
        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '70px'}}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '800',
            color: 'white',
            marginBottom: '15px',
            letterSpacing: '-2px',
            textShadow: '0 6px 25px rgba(0,0,0,0.6)'
          }}>
            Market Price
          </h1>
          <div style={{
            width: '90px',
            height: '4px',
            background: '#22c55e',
            margin: '0 auto 25px',
            borderRadius: '2px'
          }}></div>
          <p style={{
            fontSize: '19px',
            color: 'rgba(255, 255, 255, 0.85)',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)'
          }}>
            Daily APMC Mandi Rates - Updated Today
          </p>
        </div>

        {/* Price Table/Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          
          {[
            {crop: 'Tomato', price: '₹4,200', mandi: 'Dindigul', change: '+₹180', up: true},
            {crop: 'Onion', price: '₹3,850', mandi: 'Madurai', change: '-₹95', up: false},
            {crop: 'Paddy', price: '₹2,980', mandi: 'Thanjavur', change: '+₹65', up: true},
            {crop: 'Brinjal', price: '₹3,150', mandi: 'Coimbatore', change: '+₹120', up: true},
            {crop: 'Potato', price: '₹2,650', mandi: 'Ooty', change: '-₹40', up: false},
            {crop: 'Chilli', price: '₹15,500', mandi: 'Virudhunagar', change: '+₹450', up: true}
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(0, 0, 0, 0.45)',
              backdropFilter: 'blur(12px)',
              padding: '32px',
              borderRadius: '18px',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              boxShadow: '0 12px 35px rgba(0,0,0,0.35)',
              transition: 'transform 0.2s'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '18px'
              }}>
                <h3 style={{fontSize: '26px', fontWeight: '700', color: 'white'}}>{item.crop}</h3>
                <span style={{
                  fontSize: '12px',
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#4ade80',
                  padding: '5px 12px',
                  borderRadius: '15px',
                  fontWeight: '600'
                }}>LIVE</span>
              </div>
              
              <div style={{fontSize: '40px', fontWeight: '800', color: '#4ade80', marginBottom: '6px'}}>
                {item.price}
              </div>
              
              <div style={{fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '12px'}}>
                per quintal - {item.mandi} Mandi
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: item.up ? '#4ade80' : '#f87171',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                {item.up ? '↑' : '↓'} {item.change} from yesterday
              </div>
            </div>
          ))}
          
        </div>

        {/* Footer Note */}
        <div style={{
          marginTop: '70px',
          textAlign: 'center',
          padding: '25px',
          background: 'rgba(0, 0, 0, 0.35)',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          <p style={{fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)'}}>
            * Data sourced from Tamil Nadu Agricultural Marketing Department | Last updated: Today 6:00 PM
          </p>
        </div>

      </div>
    </div>
  );
}