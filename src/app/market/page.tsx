export default function MarketPricePage() {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1600")',
      backgroundSize: 'cover',
      minHeight: '100vh'
    }}>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 100px)',
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
            Live Market Prices
          </h1>
          
          <p style={{fontSize: '16px', color: '#555', marginBottom: '35px', textAlign: 'center'}}>
            Daily crop prices from major markets across Tamil Nadu
          </p>

          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '16px'}}>
            <thead>
              <tr style={{background: '#2e7d32', color: 'white'}}>
                <th style={{padding: '15px', textAlign: 'left'}}>Crop</th>
                <th style={{padding: '15px', textAlign: 'left'}}>Market</th>
                <th style={{padding: '15px', textAlign: 'right'}}>Price/Kg</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '15px'}}>Rice</td>
                <td style={{padding: '15px'}}>Coimbatore</td>
                <td style={{padding: '15px', textAlign: 'right'}}>₹42</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd', background: '#f9f9f9'}}>
                <td style={{padding: '15px'}}>Onion</td>
                <td style={{padding: '15px'}}>Madurai</td>
                <td style={{padding: '15px', textAlign: 'right'}}>₹28</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '15px'}}>Tomato</td>
                <td style={{padding: '15px'}}>Chennai</td>
                <td style={{padding: '15px', textAlign: 'right'}}>₹35</td>
              </tr>
              <tr>
                <td style={{padding: '15px'}}>Cotton</td>
                <td style={{padding: '15px'}}>Tiruppur</td>
                <td style={{padding: '15px', textAlign: 'right'}}>₹72</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}