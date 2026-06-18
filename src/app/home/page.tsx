export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url("https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Dark box for text - so it reads clearly on image */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.6)',
        padding: '60px 50px',
        borderRadius: '20px',
        textAlign: 'center',
        color: 'white',
        maxWidth: '600px',
        backdropFilter: 'blur(5px)'
      }}>
        
        <h1 style={{ 
          fontSize: '50px', 
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Welcome to Farmer App
        </h1>
        
        <p style={{ 
          fontSize: '22px',
          lineHeight: '1.6',
          marginBottom: '30px'
        }}>
          Your smart farming companion 🚜
        </p>
        
        <button style={{
          padding: '15px 40px',
          fontSize: '18px',
          background: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Get Started
        </button>
        
      </div>
      
    </div>
  );
}