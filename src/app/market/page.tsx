'use client';
import { useState } from 'react';

const priceData = [
  // Cereals - Paddy
  { crop: 'Paddy/Nel', market: 'Thanjavur', today: 2200, yesterday: 2150, weekAvg: 2100, type: 'Cereal' },
  { crop: 'Rice Ponni', market: 'Thanjavur', today: 48, yesterday: 46, weekAvg: 45, type: 'Cereal' },
  { crop: 'Rice BPT', market: 'Coimbatore', today: 42, yesterday: 40, weekAvg: 41, type: 'Cereal' },
  
  // Vegetables - More
  { crop: 'Tomato', market: 'Coimbatore', today: 35, yesterday: 32, weekAvg: 31, type: 'Vegetable' },
  { crop: 'Onion/Vengayam', market: 'Madurai', today: 28, yesterday: 30, weekAvg: 29, type: 'Vegetable' },
  { crop: 'Brinjal/Kathirikai', market: 'Tirupur', today: 22, yesterday: 22, weekAvg: 21, type: 'Vegetable' },
  { crop: 'Potato/Uruulai', market: 'Ooty', today: 25, yesterday: 24, weekAvg: 23, type: 'Vegetable' },
  { crop: 'Carrot/Kaarai', market: 'Ooty', today: 40, yesterday: 38, weekAvg: 37, type: 'Vegetable' },
  { crop: 'Cabbage/Mutai', market: 'Coimbatore', today: 18, yesterday: 20, weekAvg: 22, type: 'Vegetable' },
  { crop: 'Cauliflower', market: 'Coimbatore', today: 30, yesterday: 28, weekAvg: 27, type: 'Vegetable' },
  { crop: 'Bhindi/Vendakai', market: 'Tirupur', today: 32, yesterday: 30, weekAvg: 29, type: 'Vegetable' },
  { crop: 'Drumstick/Murungai', market: 'Madurai', today: 80, yesterday: 75, weekAvg: 70, type: 'Vegetable' },
  { crop: 'Beans', market: 'Ooty', today: 45, yesterday: 42, weekAvg: 40, type: 'Vegetable' },
  
  // Fruits
  { crop: 'Banana/Vazhai', market: 'Theni', today: 45, yesterday: 48, weekAvg: 47, type: 'Fruit' },
  { crop: 'Coconut/Thengai', market: 'Pollachi', today: 35, yesterday: 33, weekAvg: 32, type: 'Fruit' },
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
      padding: '30px 20px'
    }}>
      
      <div style={{
        background: 'white',
        padding: '40px 30px',
        borderRadius: '22px',
        maxWidth: '1150px',
        margin: '0 auto',
        boxShadow: '0 20px 60px rgba(46, 125, 50, 0.25)',
        borderTop: '6px solid #4caf50'
      }}>
        
        <div style={{textAlign: 'center', marginBottom: '35px'}}>
          <div style={{fontSize: '50px', marginBottom: '10px'}}>📊</div>
          <h1 style={{color: '#1b5e20', fontSize: '34px', marginBottom: '8px', fontWeight: '900'}}>
            Live Market Prices
          </h1>
          <p style={{color: '#2e7d32', fontSize: '15px', fontWeight: '500'}}>
            Last updated: Today 8:00 AM | Source: AGMARKNET + Local Mandi
          </p>
        </div>

        {/* Filter - Green Theme */}
        <div style={{display: 'flex', gap: '15px', marginBottom: '35px', flexWrap: 'wrap'}}>
          <select value={cropType} onChange={(e) => setCropType(e.target.value)} 
            style={{
              padding: '14px', 
              borderRadius: '12px', 
              border: '2px solid #4caf50', 
              flex: 1, 
              minWidth: '160px', 
              fontSize: '15px',
              fontWeight: '600',
              background: '#f1f8e9',
              color: '#1b5e20'
            }}>
            <option value="All">All Crops</option>
            <option value="Vegetable">Vegetables</option>
            <option value="Cereal">Cereals/Paddy</option>
            <option value="Fruit">Fruits</option>
          </select>

          <select value={market} onChange={(e) => setMarket(e.target.value)}
            style={{
              padding: '14px', 
              borderRadius: '12px', 
              border: '2px solid #4caf50', 
              flex: 1, 
              minWidth: '160px', 
              fontSize: '15px',
              fontWeight: '600',
              background: '#f1f8e9',
              color: '#1b5e20'
            }}>
            <option value="All">All Markets</option>
            <option value="Tirupur">Tirupur</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Madurai">Madurai</option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Ooty">Ooty</option>
            <option value="Pollachi">Pollachi</option>
          </select>
        </div>

        {/* Price Comparison Table */}
        <div style={{overflowX: 'auto', marginBottom: '40px', borderRadius: '12px', border: '2px solid #e8f5e9'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '15px'}}>
            <thead>
              <tr style={{background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)', color: 'white'}}>
                <th style={{padding: '16px', textAlign: 'left', fontWeight: '700'}}>Crop</th>
                <th style={{padding: '16px', textAlign: 'left', fontWeight: '700'}}>Market</th>
                <th style={{padding: '16px', textAlign: 'right', fontWeight: '700'}}>Today</th>
                <th style={{padding: '16px', textAlign: 'right', fontWeight: '700'}}>Yesterday</th>
                <th style={{padding: '16px', textAlign: 'right', fontWeight: '700'}}>7 Day Avg</th>
                <th style={{padding: '16px', textAlign: 'right', fontWeight: '700'}}>vs Yesterday</th>
                <th style={{padding: '16px', textAlign: 'right', fontWeight: '700'}}>vs 7 Day Avg</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, i) => {
                const vsYesterday = item.today - item.yesterday;
                const vsWeekAvg = item.today - item.weekAvg;
                
                const yText = vsYesterday > 0 ? `↑ ₹${vsYesterday}` : vsYesterday < 0 ? `↓ ₹${Math.abs(vsYesterday)}` : '-';
                const wText = vsWeekAvg > 0 ? `↑ ₹${vsWeekAvg}` : vsWeekAvg < 0 ? `↓ ₹${Math.abs(vsWeekAvg)}` : '-';
                
                const yColor = vsYesterday > 0 ? '#2e7d32' : vsYesterday < 0 ? '#d32f2f' : '#666';
                const wColor = vsWeekAvg > 0 ? '#2e7d32' : vsWeekAvg < 0 ? '#d32f2f' : '#666';
                
                return (
                  <tr key={i} style={{borderBottom: '1px solid #e8f5e9', background: i%2 ? '#f8fff9' : 'white'}}>
                    <td style={{padding: '16px', fontWeight: '600', color: '#1b5e20'}}>{item.crop}</td>
                    <td style={{padding: '16px', color: '#555'}}>{item.market}</td>
                    <td style={{padding: '16px', textAlign: 'right', fontWeight: 'bold', fontSize: '16px', color: '#1b5e20'}}>₹{item.today}</td>
                    <td style={{padding: '16px', textAlign: 'right', color: '#555'}}>₹{item.yesterday}</td>
                    <td style={{padding: '16px', textAlign: 'right', color: '#555'}}>₹{item.weekAvg}</td>
                    <td style={{padding: '16px', textAlign: 'right', color: yColor, fontWeight: 'bold'}}>{yText}</td>
                    <td style={{padding: '16px', textAlign: 'right', color: wColor, fontWeight: 'bold'}}>{wText}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 7 Day Trend Chart */}
        <div style={{marginBottom: '40px'}}>
          <h3 style={{color: '#1b5e20', marginBottom: '20px', fontSize: '20px', fontWeight: '800'}}>📈 7 Day Trend - Tomato Coimbatore</h3>
          <div style={{
            display: 'flex', 
            gap: '10px', 
            alignItems: 'flex-end', 
            height: '140px', 
            paddingBottom: '25px',
            background: '#f1f8e9',
            padding: '25px 15px',
            borderRadius: '14px'
          }}>
            {[32, 30, 33, 31, 34, 32, 35].map((price, i) => (
              <div key={i} style={{flex: 1, textAlign: 'center'}}>
                <div style={{
                  background: 'linear-gradient(to top, #4caf50, #2e7d32)',
                  height: `${price * 3.5}px`,
                  borderRadius: '6px 6px 0 0',
                  position: 'relative',
                  boxShadow: '0 4px 12px rgba(76,175,80,0.3)'
                }}>
                  <span style={{
                    position: 'absolute', 
                    top: '-28px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    fontSize: '12px', 
                    fontWeight: 'bold',
                    color: '#1b5e20'
                  }}>₹{price}</span>
                </div>
                <span style={{fontSize: '11px', color: '#2e7d32', fontWeight: '600'}}>Day {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Farmer Tip - Green Card */}
        <div style={{
          padding: '25px',
          background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
          borderLeft: '6px solid #2e7d32',
          borderRadius: '14px',
          boxShadow: '0 8px 25px rgba(76,175,80,0.15)'
        }}>
          <h3 style={{color: '#1b5e20', marginBottom: '12px', fontSize: '18px', fontWeight: '800'}}>🌱 Farmer Tip Today</h3>
          <p style={{color: '#2e7d32', lineHeight: '1.8', fontSize: '15px', fontWeight: '500'}}>
            Paddy price 7 day avg ₹2100 kulla irundhu ippo ₹2200 ku pogudhu. Sell panna nalla time. 
            Drumstick 7 day avg vida ₹10 high - Tirupur demand strong. 
            Cabbage week avg vida ₹4 low, wait panalam.
          </p>
        </div>

      </div>
    </div>
  );
}