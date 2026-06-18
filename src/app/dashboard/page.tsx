'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [farmer, setFarmer] = useState<any>(null);

  useEffect(() => {
    // Rendu key um check panrom - safety ku
    const data = localStorage.getItem('farmerData') || localStorage.getItem('farmer');
    
    if(data) {
      const farmerData = JSON.parse(data);
      setFarmer(farmerData);
      console.log('Farmer data loaded:', farmerData); // Debug ku
    } else {
      alert('Login pannala da! Login page ku poga');
      window.location.href = '/login';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('farmerData');
    localStorage.removeItem('farmer');
    window.location.href = '/login';
  };

  if(!farmer) return <div style={{textAlign: 'center', padding: '100px', fontSize: '20px'}}>Loading farmer details...</div>;

  return (
    <div>
      {/* Green Header */}
      <div style={{background: '#2e7d32', padding: '15px 30px', display: 'flex', gap: '30px', color: 'white', fontWeight: 'bold'}}>
        <a href="/" style={{color: 'white', textDecoration: 'none'}}>Home</a>
        <a href="/about" style={{color: 'white', textDecoration: 'none'}}>About</a>
        <a href="/market-price" style={{color: 'white', textDecoration: 'none'}}>Market Price</a>
        <button onClick={handleLogout} style={{marginLeft: 'auto', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 'bold'}}>Logout</button>
      </div>

      {/* Background */}
      <div style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 60px)',
        padding: '40px 20px'
      }}>
        
        <h2 style={{textAlign: 'center', color: 'white', fontSize: '28px', marginBottom: '30px', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
          Vanakkam {farmer.name}
        </h2>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto'}}>
          
          <div style={{background: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '12px'}}>
            <div style={{color: '#2e7d32', fontWeight: 'bold', marginBottom: '8px'}}>🌾 Crop</div>
            <div style={{fontSize: '18px', fontWeight: 'bold'}}>{farmer.crop}</div>
            <div style={{fontSize: '14px', color: '#666', marginTop: '5px'}}>📍 Area {farmer.area}</div>
          </div>

          <div style={{background: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '12px'}}>
            <div style={{color: '#2e7d32', fontWeight: 'bold', marginBottom: '8px'}}>💰 Market Rate</div>
            <div style={{fontSize: '18px', fontWeight: 'bold'}}>{farmer.marketRate}</div>
          </div>

          <div style={{background: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '12px'}}>
            <div style={{color: '#2e7d32', fontWeight: 'bold', marginBottom: '8px'}}>📊 Comparison</div>
            <div style={{fontSize: '14px'}}>Prev {farmer.prevRate}</div>
            <div style={{fontSize: '14px'}}>Current {farmer.currentRate}</div>
            <div style={{fontSize: '14px', color: 'green', fontWeight: 'bold'}}>↑ {farmer.profit}</div>
          </div>

          <div style={{background: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '12px'}}>
            <div style={{color: '#2e7d32', fontWeight: 'bold', marginBottom: '8px'}}>☀️ Weather</div>
            <div style={{fontSize: '18px', fontWeight: 'bold'}}>{farmer.weather}</div>
          </div>

          <div style={{background: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '12px'}}>
            <div style={{color: '#2e7d32', fontWeight: 'bold', marginBottom: '8px'}}>🔥 Income</div>
            <div style={{fontSize: '20px', fontWeight: 'bold'}}>{farmer.income}</div>
          </div>

          <div style={{background: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '12px'}}>
            <div style={{color: '#2e7d32', fontWeight: 'bold', marginBottom: '8px'}}>💸 Expense</div>
            <div style={{fontSize: '20px', fontWeight: 'bold'}}>{farmer.expense}</div>
          </div>

          <div style={{background: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '12px', border: '2px solid #4caf50'}}>
            <div style={{color: '#2e7d32', fontWeight: 'bold', marginBottom: '8px'}}>✅ Net Profit</div>
            <div style={{fontSize: '22px', fontWeight: 'bold', color: '#2e7d32'}}>{farmer.netProfit}</div>
          </div>

          <div style={{background: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '12px'}}>
            <div style={{color: '#2e7d32', fontWeight: 'bold', marginBottom: '8px'}}>🌱 Crop Tip</div>
            <div style={{fontSize: '14px'}}>{farmer.cropTip}</div>
          </div>

        </div>
      </div>
    </div>
  );
}