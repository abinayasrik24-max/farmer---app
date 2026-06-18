import Link from "next/link";

export default function Home() {
  const bgStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  };

  return (
    <div style={bgStyle}>
      <div style={{backgroundColor: 'rgba(46, 125, 50, 0.9)', padding: '15px', display: 'flex', justifyContent: 'center', gap: '40px'}}>
        <Link href="/" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>
          <span>Home</span>
        </Link>
        <Link href="/about" style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>
          <span>About</span>
        </Link>
        <Link href="/dashboard" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px'}}>
          <span>Login</span>
        </Link>
      </div>
      
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh'}}>
        <div style={{backgroundColor: 'rgba(255,255,255,0.95)', padding: '50px', borderRadius: '20px', textAlign: 'center', maxWidth: '500px'}}>
          <h1 style={{color: '#2e7d32', fontSize: '36px', marginTop: 0}}>Smart Farmer App</h1>
          <p style={{fontSize: '18px', color: '#555'}}>Manage Your Crops, Market Prices, and Profits Smartly</p>
          <Link href="/dashboard" style={{textDecoration: 'none'}}>
            <button style={{padding: '12px 30px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px'}}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}