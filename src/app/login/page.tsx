'use client';
import { useState } from 'react';

// 10 Farmers data
const farmers = [
  {id: 1, name: 'Ravi Kumar', password: '1234', crop: 'Paddy', area: '2.5 Acres', marketRate: '₹2400/Quintal', prevRate: '₹2200', currentRate: '₹2400', profit: '₹200', weather: '30°C, Partly Cloudy', income: '₹85,000', expense: '₹17,000', netProfit: '₹68,000', cropTip: 'Maintain proper water level in paddy fields'},
  {id: 2, name: 'Suresh', password: '1234', crop: 'Wheat', area: '3 Acres', marketRate: '₹2100/Quintal', prevRate: '₹2000', currentRate: '₹2100', profit: '₹100', weather: '28°C, Sunny', income: '₹72,000', expense: '₹15,000', netProfit: '₹57,000', cropTip: 'Use organic fertilizer for better yield'},
  {id: 3, name: 'Murugan', password: '1234', crop: 'Sugarcane', area: '4 Acres', marketRate: '₹3200/Ton', prevRate: '₹3000', currentRate: '₹3200', profit: '₹200', weather: '32°C, Humid', income: '₹1,20,000', expense: '₹25,000', netProfit: '₹95,000', cropTip: 'Irrigate every 15 days for sugarcane'},
  {id: 4, name: 'Karthik', password: '1234', crop: 'Cotton', area: '2 Acres', marketRate: '₹6500/Quintal', prevRate: '₹6300', currentRate: '₹6500', profit: '₹200', weather: '29°C, Clear', income: '₹95,000', expense: '₹20,000', netProfit: '₹75,000', cropTip: 'Pest control is important for cotton'},
  {id: 5, name: 'Vijay', password: '1234', crop: 'Maize', area: '3.5 Acres', marketRate: '₹1800/Quintal', prevRate: '₹1700', currentRate: '₹1800', profit: '₹100', weather: '31°C, Cloudy', income: '₹68,000', expense: '₹14,000', netProfit: '₹54,000', cropTip: 'Harvest at proper moisture level'},
  {id: 6, name: 'Babu', password: '1234', crop: 'Turmeric', area: '1.5 Acres', marketRate: '₹8500/Quintal', prevRate: '₹8200', currentRate: '₹8500', profit: '₹300', weather: '27°C, Rainy', income: '₹1,10,000', expense: '₹22,000', netProfit: '₹88,000', cropTip: 'Shade management improves quality'},
  {id: 7, name: 'Selvam', password: '1234', crop: 'Groundnut', area: '2 Acres', marketRate: '₹5200/Quintal', prevRate: '₹5000', currentRate: '₹5200', profit: '₹200', weather: '30°C, Windy', income: '₹78,000', expense: '₹16,000', netProfit: '₹62,000', cropTip: 'Soil testing before sowing groundnut'},
  {id: 8, name: 'Arun', password: '1234', crop: 'Tomato', area: '1 Acre', marketRate: '₹3000/Quintal', prevRate: '₹2800', currentRate: '₹3000', profit: '₹200', weather: '29°C, Partly Cloudy', income: '₹65,000', expense: '₹13,000', netProfit: '₹52,000', cropTip: 'Regular watering prevents blossom end rot'},
  {id: 9, name: 'Dinesh', password: '1234', crop: 'Onion', area: '2.5 Acres', marketRate: '₹2800/Quintal', prevRate: '₹2600', currentRate: '₹2800', profit: '₹200', weather: '28°C, Sunny', income: '₹82,000', expense: '₹17,000', netProfit: '₹65,000', cropTip: 'Proper spacing improves bulb size'},
  {id: 10, name: 'Manikandan', password: '1234', crop: 'Banana', area: '3 Acres', marketRate: '₹1500/Quintal', prevRate: '₹1400', currentRate: '₹1500', profit: '₹100', weather: '31°C, Humid', income: '₹1,05,000', expense: '₹21,000', netProfit: '₹84,000', cropTip: 'Remove suckers for better bunch size'}
];

export default function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const farmer = farmers.find(f => 
      f.name.toLowerCase() === name.toLowerCase() && f.password === password
    );

    if(farmer) {
      localStorage.setItem('farmerData', JSON.stringify(farmer));
      window.location.href = '/dashboard';
    } else {
      alert('Wrong Name or Password da! 10 farmers list: Ravi Kumar, Suresh, Murugan, Karthik, Vijay, Babu, Selvam, Arun, Dinesh, Manikandan. Password: 1234');
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      
      <form onSubmit={handleLogin} style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '50px 40px',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 15px 50px rgba(0,0,0,0.4)'
      }}>
        <h2 style={{color: '#2e7d32', textAlign: 'center', marginBottom: '30px', fontSize: '32px'}}>Farmer Login</h2>
        
        <input 
          type="text" 
          placeholder="Farmer Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{width: '100%', padding: '15px', margin: '12px 0', border: '2px solid #ddd', borderRadius: '10px', fontSize: '16px', boxSizing: 'border-box'}}
        />
        
        <input 
          type="password" 
          placeholder="Password: 1234" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{width: '100%', padding: '15px', margin: '12px 0', border: '2px solid #ddd', borderRadius: '10px', fontSize: '16px', boxSizing: 'border-box'}}
        />
        
        <button type="submit" style={{width: '100%', padding: '15px', background: '#2e7d32', color: 'white', border: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '15px'}}>
          Login
        </button>
        
        <p style={{textAlign: 'center', marginTop: '20px', fontSize: '13px', color: '#666'}}>
          Test: Ravi Kumar / 1234
        </p>
      </form>
    </div>
  );
}