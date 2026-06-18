"use client"; 
import { useState } from "react"; 
import { useRouter } from "next/navigation"; 
import Link from "next/link"; 

const farmers = { 
  ravi: { password: "1111", name: "Ravi Kumar", crop: "Paddy", area: "2.5 Acres", income: 85000, expense: 17000, marketRate: 2400, prevRate: 2200, weather: "30°C, Partly Cloudy", tip: "Maintain proper water level in paddy fields" }, 
  lakshmi: { password: "2222", name: "Lakshmi Devi", crop: "Sugarcane", area: "5 Acres", income: 220000, expense: 25000, marketRate: 3200, prevRate: 3000, weather: "32°C, Sunny", tip: "Check for red rot disease regularly" }, 
  murugan: { password: "3333", name: "Murugan", crop: "Cotton", area: "3 Acres", income: 120000, expense: 20000, marketRate: 7000, prevRate: 6500, weather: "31°C, Dry", tip: "Use organic pesticide for better yield" }, 
  meena: { password: "4444", name: "Meena", crop: "Tomato", area: "1.5 Acres", income: 60000, expense: 12000, marketRate: 40, prevRate: 35, weather: "29°C, Humid", tip: "Stake plants early to avoid fruit rot" }, 
  selva: { password: "5555", name: "Selvakumar", crop: "Maize", area: "4 Acres", income: 95000, expense: 18000, marketRate: 2100, prevRate: 1950, weather: "33°C, Sunny", tip: "Apply nitrogen fertilizer at knee-high stage" }, 
  priya: { password: "6666", name: "Priya", crop: "Banana", area: "2 Acres", income: 150000, expense: 30000, marketRate: 25, prevRate: 22, weather: "30°C, Humid", tip: "Remove suckers regularly for better bunch size" }, 
  kumar: { password: "7777", name: "Kumar", crop: "Groundnut", area: "3.5 Acres", income: 110000, expense: 22000, marketRate: 5800, prevRate: 5400, weather: "32°C, Dry", tip: "Harvest when 75% pods mature" }, 
  devi: { password: "8888", name: "Devi", crop: "Chilli", area: "1 Acre", income: 90000, expense: 15000, marketRate: 120, prevRate: 100, weather: "31°C, Hot", tip: "Spray neem oil to control thrips" }, 
  arjun: { password: "9999", name: "Arjun", crop: "Coconut", area: "6 Acres", income: 180000, expense: 25000, marketRate: 35, prevRate: 32, weather: "30°C, Coastal", tip: "Apply organic manure twice a year" }, 
  gayathri: { password: "1010", name: "Gayathri", crop: "Onion", area: "2 Acres", income: 140000, expense: 28000, marketRate: 45, prevRate: 38, weather: "29°C, Dry", tip: "Cure bulbs properly before storage" } 
}; 

export default function Dashboard() { 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [loggedIn, setLoggedIn] = useState(false); 
  const [farmer, setFarmer] = useState<any>(null); 
  const router = useRouter(); 
  
  const bgStyle = { 
    backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80')", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    minHeight: "100vh" 
  }; 
  
  const handleLogin = () => { 
    if (farmers[username as keyof typeof farmers] && farmers[username as keyof typeof farmers].password === password) { 
      setFarmer(farmers[username as keyof typeof farmers]); 
      setLoggedIn(true); 
    } else { 
      alert("Username or Password incorrect!"); 
    } 
  }; 
  
  const handleLogout = () => { 
    setLoggedIn(false); 
    setUsername(""); 
    setPassword(""); 
    router.push("/"); 
  }; 
  
  if (!loggedIn) { 
    return ( 
      <div style={bgStyle}> 
        <div style={{backgroundColor: 'rgba(46, 125, 50, 0.9)', padding: '15px', display: 'flex', justifyContent: 'center', gap: '40px'}}> 
          <Link href="/" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>Home</Link> 
          <Link href="/about" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>About</Link> 
          <Link href="/dashboard" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px'}}>Login</Link> 
        </div> 
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh'}}> 
          <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '40px', borderRadius: '20px', width: '350px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}> 
            <h2 style={{textAlign: 'center', color: '#2e7d32', marginTop: 0}}>🌾 Farmer Login</h2> 
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{width: '100%', padding: '12px', marginTop: '20px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box'}} /> 
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width: '100%', padding: '12px', marginTop: '15px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box'}} /> 
            <button onClick={handleLogin} style={{width: '100%', padding: '12px', marginTop: '20px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold'}}>Login</button> 
            <p style={{textAlign: 'center', marginTop: '15px', fontSize: '14px', color: '#666'}}>Demo: ravi / 1111</p> 
          </div> 
        </div> 
      </div> 
    ); 
  } 
  
  const profit = farmer.income - farmer.expense; 
  
  return ( 
    <div style={bgStyle}> 
      <div style={{backgroundColor: 'rgba(46, 125, 50, 0.9)', padding: '15px', display: 'flex', justifyContent: 'center', gap: '40px'}}> 
        <Link href="/" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>Home</Link> 
        <Link href="/about" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>About</Link> 
        <button onClick={handleLogout} style={{backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold'}}>Logout</button> 
      </div> 
      <div style={{padding: '40px 20px'}}> 
        <h1 style={{color: 'white', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '10px'}}>Vanakkam {farmer.name}</h1> 
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px', maxWidth: '1200px', margin: '30px auto'}}> 
          
          <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '15px'}}>
            <h3 style={{marginTop: 0, color: '#2e7d32'}}>🌾 Crop</h3>
            <p style={{fontSize: '18px'}}>{farmer.crop}</p>
            <p>📏 Area: {farmer.area}</p>
            <button 
              onClick={() => alert(`Selling ${farmer.crop} at ₹${farmer.marketRate}/Quintal`)}
              style={{
                marginTop: '10px', 
                padding: '8px 16px', 
                background: '#2e7d32', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Sell Crop
            </button>
          </div>
          
          <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '15px'}}><h3 style={{marginTop: 0, color: '#2e7d32'}}>📈 Market Rate</h3><p style={{fontSize: '18px'}}>₹{farmer.marketRate} / Quintal</p></div> 
          <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '15px'}}><h3 style={{marginTop: 0, color: '#2e7d32'}}>📊 Comparison</h3><p>Prev: ₹{farmer.prevRate}<br/>Current: ₹{farmer.marketRate}<br/>↑ ₹{farmer.marketRate - farmer.prevRate}</p></div> 
          <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '15px'}}><h3 style={{marginTop: 0, color: '#2e7d32'}}>🌤 Weather</h3><p style={{fontSize: '18px'}}>{farmer.weather}</p></div> 
          <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '15px'}}><h3 style={{marginTop: 0, color: '#2e7d32'}}>💰 Income</h3><p style={{fontSize: '18px'}}>₹{farmer.income.toLocaleString()}</p></div> 
          <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '15px'}}><h3 style={{marginTop: 0, color: '#2e7d32'}}>💸 Expense</h3><p style={{fontSize: '18px'}}>₹{farmer.expense.toLocaleString()}</p></div> 
          <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '15px', border: '3px solid #2e7d32'}}><h3 style={{marginTop: 0, color: '#2e7d32'}}>✅ Net Profit</h3><p style={{fontSize: '24px', color: '#2e7d32', fontWeight: 'bold', margin: 0}}>₹{profit.toLocaleString()}</p></div> 
          <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '15px'}}><h3 style={{marginTop: 0, color: '#2e7d32'}}>🌱 Crop Tip</h3><p>{farmer.tip}</p></div> 
        </div> 
      </div> 
    </div> 
  ); 
}