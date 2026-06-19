export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      
      {/* Black overlay - text padika easy */}
      <div style={{
        background: 'rgba(0,0,0,0.55)',
        minHeight: '100vh',
        padding: '40px 20px'
      }}>

        {/* Top Banner */}
        <div style={{
          background: 'rgba(46,125,50,0.92)',
          padding: '80px 30px',
          borderRadius: '30px',
          textAlign: 'center',
          marginBottom: '60px',
          maxWidth: '900px',
          margin: '0 auto 60px',
          border: '4px solid white',
          boxShadow: '0 25px 70px rgba(0,0,0,0.7)'
        }}>
          <div style={{fontSize: '90px', marginBottom: '25px'}}>🚜🌾</div>
          <h1 style={{
            fontSize: '55px', 
            marginBottom: '20px', 
            color: 'white',
            textShadow: '4px 4px 20px rgba(0,0,0,0.9)'
          }}>
            Smart Farmer Portal
          </h1>
          <p style={{fontSize: '26px', marginBottom: '40px', color: 'white', fontWeight: '500'}}>
            Uzhavarin Kanavu - Digital Ulagil Nizhavu
          </p>
          <a href="/market-price" style={{
            background: 'white',
            color: '#1b5e20',
            padding: '22px 50px',
            borderRadius: '60px',
            textDecoration: 'none',
            fontSize: '22px',
            fontWeight: 'bold',
            display: 'inline-block',
            boxShadow: '0 12px 35px rgba(0,0,0,0.5)'
          }}>
            📊 Indha Nimisham Vilakal
          </a>
        </div>

        {/* Price Cards */}
        <h2 style={{textAlign: 'center', fontSize: '38px', marginBottom: '45px', color: 'white', textShadow: '3px 3px 15px black'}}>
          Live Mandi Prices
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '30px',
          maxWidth: '1100px',
          margin: '0 auto 70px'
        }}>
          
          {[
            {emoji: '🌾', name: 'Nel/Paddy', price: '₹2200', change: '↑ ₹50', color: '#a5d6a7'},
            {emoji: '🍅', name: 'Thakkali', price: '₹35/kg', change: '↑ ₹3', color: '#a5d6a7'},
            {emoji: '🧅', name: 'Vengayam', price: '₹28/kg', change: '↓ ₹2', color: '#ef9a9a'},
            {emoji: '🥥', name: 'Thengai', price: '₹35', change: '↑ ₹2', color: '#a5d6a7'}
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.28)',
              backdropFilter: 'blur(18px)',
              padding: '40px 25px',
              borderRadius: '30px',
              textAlign: 'center',
              border: '3px solid rgba(255,255,255,0.6)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
              <div style={{fontSize: '70px', marginBottom: '15px'}}>{item.emoji}</div>
              <h3 style={{fontSize: '28px', marginBottom: '12px', color: 'white'}}>{item.name}</h3>
              <p style={{fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '8px'}}>{item.price}</p>
              <p style={{fontSize: '18px', color: item.color, fontWeight: 'bold'}}>{item.change} Yesterday</p>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div style={{
          background: 'rgba(0,0,0,0.5)',
          padding: '60px 30px',
          borderRadius: '30px',
          maxWidth: '1000px',
          margin: '0 auto',
          border: '3px solid rgba(255,255,255,0.4)'
        }}>
          <h2 style={{fontSize: '36px', marginBottom: '45px', textAlign: 'center', color: 'white'}}>Enga Special?</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '35px'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '55px', marginBottom: '15px'}}>📈</div>
              <h4 style={{fontSize: '22px', marginBottom: '10px', color: 'white'}}>Live Rate</h4>
              <p style={{color: 'white', opacity: 0.9}}>Daily mandi update</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '55px', marginBottom: '15px'}}>🌦️</div>
              <h4 style={{fontSize: '22px', marginBottom: '10px', color: 'white'}}>Weather</h4>
              <p style={{color: 'white', opacity: 0.9}}>Mazhai alert</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '55px', marginBottom: '15px'}}>💡</div>
              <h4 style={{fontSize: '22px', marginBottom: '10px', color: 'white'}}>Tips</h4>
              <p style={{color: 'white', opacity: 0.9}}>Valimurai</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '55px', marginBottom: '15px'}}>🏛️</div>
              <h4 style={{fontSize: '22px', marginBottom: '10px', color: 'white'}}>Schemes</h4>
              <p style={{color: 'white', opacity: 0.9}}>Subsidy details</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}