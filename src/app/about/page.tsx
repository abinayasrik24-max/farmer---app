"use client";
import Link from "next/link";

export default function About() {
  const bgStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  };

  return (
    <div style={bgStyle}>
      {/* Navigation Menu */}
      <div style={{backgroundColor: 'rgba(46, 125, 50, 0.9)', padding: '15px', display: 'flex', justifyContent: 'center', gap: '40px'}}>
        <Link href="/" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>Home</Link>
        <Link href="/about" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px'}}>About</Link>
        <Link href="/dashboard" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>Login</Link>
      </div>

      {/* Main Content */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '40px'}}>
        <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '50px', borderRadius: '20px', maxWidth: '700px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
          <h1 style={{color: '#2e7d32', fontSize: '36px', textAlign: 'center', marginTop: 0}}>About Smart Farmer App</h1>
          
          <p style={{fontSize: '18px', lineHeight: '1.8', color: '#444', marginTop: '25px'}}>
            Smart Farmer App is a comprehensive digital platform designed to help farmers make informed, data-driven decisions for optimal crop management and increased profitability.
          </p>
          
          <h3 style={{color: '#2e7d32', fontSize: '22px', marginTop: '35px', marginBottom: '15px'}}>Key Features:</h3>
          <ul style={{fontSize: '17px', lineHeight: '2', color: '#555', paddingLeft: '20px', marginTop: 0}}>
            <li>Monitor crop growth, track expenses, and record yields in real-time</li>
            <li>Access live market prices to maximize selling opportunities</li>
            <li>Calculate detailed profit and loss for each harvest cycle</li>
            <li>Receive timely weather alerts and proven farming best practices</li>
            <li>Secure dashboard to manage all farm data in one place</li>
          </ul>
          
          <p style={{fontSize: '18px', lineHeight: '1.8', color: '#444', marginTop: '30px'}}>
            Our mission is to empower farmers with modern technology, reduce dependency on intermediaries, and increase agricultural income through smart insights and analytics.
          </p>
        </div>
      </div>
    </div>
  )
}