"use client";
import { useState } from "react";

const farmer = { name: "Ravi Kumar", crop: "Paddy", area: "2.5 Acres", income: 85000, expense: 17000 };

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  if (!loggedIn) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'lightblue'}}>
        <div style={{background: 'white', padding: '40px', borderRadius: '10px'}}>
          <h2>Login</h2>
          <input placeholder="Username" value={user} onChange={e => setUser(e.target.value)} style={{display: 'block', margin: '10px 0', padding: '8px'}} />
          <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} style={{display: 'block', margin: '10px 0', padding: '8px'}} />
          <button onClick={() => setLoggedIn(true)} style={{padding: '10px 20px', background: 'green', color: 'white', border: 'none', borderRadius: '5px'}}>Login</button>
          <p style={{fontSize: '12px'}}>Any user, any pass work aagum</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight: '100vh', padding: '20px', background: 'lightgreen'}}>
      <h1>Vanakkam {farmer.name}</h1>
      <div style={{background: 'white', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>🌾 Crop: {farmer.crop}</h3>
        <p>📏 Area: {farmer.area}</p>
        <button onClick={() => alert('Sold!')} style={{padding: '10px 20px', background: 'orange', color: 'white', border: 'none', borderRadius: '5px'}}>Sell Crop</button>
      </div>
      <div style={{background: 'white', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>✅ Net Profit: ₹{farmer.income - farmer.expense}</h3>
      </div>
    </div>
  );
}