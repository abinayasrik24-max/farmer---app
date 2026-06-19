'use client';
import { useState } from 'react';

const priceData = [
  // Cereals - Paddy
  { crop: 'Paddy', market: 'Thanjavur', today: 2200, yesterday: 2150, weekAvg: 2100, type: 'Cereal' },
  { crop: 'Rice Ponni', market: 'Thanjavur', today: 48, yesterday: 46, weekAvg: 45, type: 'Cereal' },
  { crop: 'Rice BPT', market: 'Coimbatore', today: 42, yesterday: 40, weekAvg: 41, type: 'Cereal' },
  
  // Vegetables - English Only
  { crop: 'Tomato', market: 'Coimbatore', today: 35, yesterday: 32, weekAvg: 31, type: 'Vegetable' },
  { crop: 'Onion', market: 'Madurai', today: 28, yesterday: 30, weekAvg: 29, type: 'Vegetable' },
  { crop: 'Brinjal', market: 'Tirupur', today: 22, yesterday: 22, weekAvg: 21, type: 'Vegetable' },
  { crop: 'Potato', market: 'Ooty', today: 25, yesterday: 24, weekAvg: 23, type: 'Vegetable' },
  { crop: 'Carrot', market: 'Ooty', today: 40, yesterday: 38, weekAvg: 37, type: 'Vegetable' },
  { crop: 'Cabbage', market: 'Coimbatore', today: 18, yesterday: 20, weekAvg: 22, type: 'Vegetable' },
  { crop: 'Cauliflower', market: 'Coimbatore', today: 30, yesterday: 28, weekAvg: 27, type: 'Vegetable' },
  { crop: 'Okra', market: 'Tirupur', today: 32, yesterday: 30, weekAvg: 29, type: 'Vegetable' },
  { crop: 'Drumstick', market: 'Madurai', today: 80, yesterday: 75, weekAvg: 70, type: 'Vegetable' },
  { crop: 'Beans', market: 'Ooty', today: 45, yesterday: 42, weekAvg: 40, type: 'Vegetable' },
  
  // Fruits - English Only
  { crop: 'Banana', market: 'Theni', today: 45, yesterday: 48, weekAvg: 47, type: 'Fruit' },
  { crop: 'Coconut', market: 'Pollachi', today: 35, yesterday: 33, weekAvg: 32, type: 'Fruit' },
];

export default function MarketPricePage() {
  const [cropType, setCropType] = useState('All');
  const [market, setMarket] = useState('All');

  const filtered = priceData.filter(item => {
    if (cropType !== 'All' && item.type !== cropType) return false;
    if (market !== 'All' && item.market !== market) return false;
    return true;
  });

  return (
    <div style={{
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '40px 30px',
        borderRadius: '20px',
        maxWidth: '1100px',
        margin: '0 auto',
        boxShadow: '0 15px 50px rgba(0,0,0,0.2)'
      }}>
        
        <h1 style={{color: '#2e7d32', fontSize: '32px', marginBottom: '10px', textAlign: 'center'}}>
          Live Market Prices with Comparison
        </h1>
        <p style={{color: '#666', textAlign: 'center', marginBottom: '30px', fontSize: '14px'}}>
          Last updated: Today 8:00 AM | Source: AGMARKNET + Local Mandi
        </p>

        <div style={{display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap'}}>
          <select value={cropType} onChange={(e) => setCropType(e.target.value)} 
            style={{padding: '12px', borderRadius: '8px', border: '2px solid #2e7d32', flex: 1, minWidth: '150px', fontSize: '16px'}}>
            <option value="All">All Crops</option>
            <option value="Vegetable">Vegetables</option>
            <option value="Cereal">Cereals/Paddy</option>
            <option value="Fruit">Fruits</option>
          </select>

          <select value={market} onChange={(e) => setMarket(e.target.value)}
            style={{padding: '12px', borderRadius: '8px', border: '2px solid #2e7d32', flex: 1, minWidth: '150px', fontSize: '16px'}}>
            <option value="All">All Markets</option>
            <option value="Tirupur">Tirupur</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Madurai">Madurai</option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Ooty">Ooty</option>
            <option value="Pollachi">Pollachi</option>
          </select>
        </div>

        <div style={{overflowX: 'auto', marginBottom: '40px'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '15px'}}>
            <thead>
              <tr style={{background: '#2e7d32', color: 'white'}}>
                <th style={{padding: '15px', textAlign: 'left'}}>Crop</th>
                <th style={{padding: '15px', textAlign: 'left'}}>Market</th>
                <th style={{padding: '15px', textAlign: 'right'}}>Today</th>
                <th style={{padding: '15px', textAlign: 'right'}}>Yesterday</th>
                <th style={{padding: '15px', textAlign: 'right'}}>7 Day Avg</th>
                <th style={{padding: '15px', textAlign: 'right'}}>vs Yesterday</th>
                <th style={{padding: '15px', textAlign: 'right'}}>vs 7 Day Avg</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, i) => {
                const vsYesterday = item.today - item.yesterday;
                const vsWeekAvg = item.today - item.weekAvg;
                
                const yText = vsYesterday > 0 ? `↑ ₹${vsYesterday}` : vsYesterday < 0 ? `↓ ₹${Math.abs(vsYesterday)}` : '-';
                const wText = vsWeekAvg > 0 ? `↑ ₹${vsWeekAvg}` : vsWeekAvg < 0 ? `↓ ₹${Math.abs(vsWeekAvg)}` : '-';
                
                const yColor = vsYesterday > 0 ? 'green' : vsYesterday < 0 ? 'red' : '#666';
                const wColor = vsWeekAvg > 0 ? 'green' : vsWeekAvg < 0 ? 'red' : '#666';
                
                return (
                  <tr key={i} style={{borderBottom: '1px solid #ddd', background: i%2 ? '#f1f8e9' : 'white'}}>
                    <td style={{padding: '15px', fontWeight: '500'}}>{item.crop}</td>
                    <td style={{padding: '15px'}}>{item.market}</td>
                    <td style={{padding: '15px', textAlign: 'right', fontWeight: 'bold', fontSize: '16px'}}>₹{item.today}</td>
                    <td style={{padding: '15px', textAlign: 'right'}}>₹{item.yesterday}</td>
                    <td style={{padding: '15px', textAlign: 'right'}}>₹{item.weekAvg}</td>
                    <td style={{padding: '15px', textAlign: 'right', color: yColor, fontWeight: 'bold'}}>{yText}</td>
                    <td style={{padding: '15px', textAlign: 'right', color: wColor, fontWeight: 'bold'}}>{wText}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{marginBottom: '40px'}}>
          <h3 style={{color: '#2e7d32', marginBottom: '15px'}}>7 Day Trend - Tomato Coimbatore</h3>
          <div style={{display: 'flex', gap: '8px', alignItems: 'flex-end', height: '120px', paddingBottom: '20px'}}>
            {[32, 30, 33, 31, 34, 32, 35].map((price, i) => (
              <div key={i} style={{flex: 1, textAlign: 'center'}}>
                <div style={{
                  background: 'linear-gradient(to top, #4caf50, #2e7d32)',
                  height: `${price * 3}px`,
                  borderRadius: '4px 4px 0 0',
                  position: 'relative'
                }}>
                  <span style={{position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', fontWeight: 'bold'}}>₹{price}</span>
                </div>
                <span style={{fontSize: '10px', color: '#666'}}>Day {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          padding: '20px',
          background: '#e8f5e9',
          borderLeft: '5px solid #2e7d32',
          borderRadius: '8px'
        }}>
          <h3 style={{color: '#2e7d32', marginBottom: '10px'}}>Farmer Tip Today 🌱</h3>
          <p style={{color: '#333', lineHeight: '1.8', fontSize: '16px'}}>
            Paddy price 7 day avg ₹2100 kulla irundhu ippo ₹2200 ku pogudhu. Sell panna nalla time. 
            Drumstick 7 day avg vida ₹10 high - Tirupur demand strong. 
            Cabbage week avg vida ₹4 low, wait panalam.
          </p>
        </div>

      </div>
    </div>
  );
}