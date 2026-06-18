import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        
        {/* ===== TOP NAVBAR - MOBILE + DESKTOP ===== */}
        <nav style={{
          background: '#2e7d32',
          padding: '15px 20px',
          color: 'white',
          fontWeight: 'bold'
        }}>
          <h1 style={{
            fontSize: '20px', 
            margin: '0 0 12px 0',
            textAlign: 'center'
          }}>
            Smart Farmer Portal
          </h1>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px 20px'
          }}>
            <Link href="/" style={{color: 'white', textDecoration: 'none', fontSize: '15px'}}>Home</Link>
            <Link href="/about" style={{color: 'white', textDecoration: 'none', fontSize: '15px'}}>About</Link>
            <Link href="/market-price" style={{color: 'white', textDecoration: 'none', fontSize: '15px'}}>Market</Link>
            <Link href="/login" style={{color: 'white', textDecoration: 'none', fontSize: '15px'}}>Login</Link>
            <Link href="/tips" style={{color: 'white', textDecoration: 'none', fontSize: '15px'}}>Tips</Link>
            <Link href="/schemes" style={{color: 'white', textDecoration: 'none', fontSize: '15px'}}>Schemes</Link>
            <Link href="/help" style={{color: 'white', textDecoration: 'none', fontSize: '15px'}}>Help</Link>
          </div>
        </nav>

        {/* ===== MAIN CONTENT - FULL WIDTH ===== */}
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}