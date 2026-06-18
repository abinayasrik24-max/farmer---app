import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        
        <nav style={{background: '#2e7d32', padding: '15px 50px', display: 'flex', justifyContent: 'space-between', color: 'white'}}>
          <h1>Smart Farmer Portal</h1>
          <div style={{display: 'flex', gap: '30px'}}>
            <Link href="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
            <Link href="/about" style={{color: 'white', textDecoration: 'none'}}>About</Link>
            <Link href="/market-price" style={{color: 'white', textDecoration: 'none'}}>Market</Link>
            <Link href="/login" style={{color: 'white', textDecoration: 'none'}}>Login</Link>
            <Link href="/tips" style={{color: 'white', textDecoration: 'none'}}>Agri Tips</Link>
            <Link href="/schemes" style={{color: 'white', textDecoration: 'none'}}>Schemes</Link>
            <Link href="/help" style={{color: 'white', textDecoration: 'none'}}>Help</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}