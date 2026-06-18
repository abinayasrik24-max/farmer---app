export default function Home() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'lightgreen'}}>
      <div style={{background: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center'}}>
        <h1>Smart Farmer App</h1>
        <a href="/dashboard" style={{padding: '12px 30px', background: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '20px'}}>Login</a>
      </div>
    </div>
  );
}