export default function HomePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: 'green', fontSize: '40px', marginBottom: '10px' }}>
        Welcome to Farmer App
      </h1>
      <p style={{ fontSize: '18px', color: '#333', textAlign: 'center' }}>
        Your smart farming companion
      </p>
    </div>
  );
}