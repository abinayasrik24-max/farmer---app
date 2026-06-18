import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', display: 'flex' }}>
        
        {/* ===== LEFT SIDEBAR MENU ===== */}
        <aside style={{
          width: '250px',
          background: '#2e7d32',
          minHeight: '100vh',
          padding: '30px 20px',
          position: 'fixed',
          left: 0,
          top: 0,
          boxShadow: '2px 0 10px rgba(0,0,0,0.2)'
        }}>
          <h1 style={{
            fontSize: '22px', 
            margin: '0 0 40px 0', 
            color: 'white',
            textAlign: 'center',
            borderBottom: '2px solid rgba(255,255,255,0.3)',
            paddingBottom: '15px'
          }}>
            Smart Farmer Portal
          </h1>
          
          <nav style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
            <Link href="/" style={{
              color: 'white', 
              textDecoration: 'none',
              padding: '12px 15px',
              borderRadius: '8px',
              fontSize: '16px',
              transition: '0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
              Home
            </Link>
            
            <Link href="/about" style={{
              color: 'white', 
              textDecoration: 'none',
              padding: '12px 15px',
              borderRadius: '8px',
              fontSize: '16px'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
              About
            </Link>
            
            <Link href="/market-price" style={{
              color: 'white', 
              textDecoration: 'none',
              padding: '12px 15px',
              borderRadius: '8px',
              fontSize: '16px'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
              Market
            </Link>
            
            <Link href="/login" style={{
              color: 'white', 
              textDecoration: 'none',
              padding: '12px 15px',
              borderRadius: '8px',
              fontSize: '16px'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
              Login
            </Link>
            
            <Link href="/tips" style={{
              color: 'white', 
              textDecoration: 'none',
              padding: '12px 15px',
              borderRadius: '8px',
              fontSize: '16px'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
              Agri Tips
            </Link>
            
            <Link href="/schemes" style={{
              color: 'white', 
              textDecoration: 'none',
              padding: '12px 15px',
              borderRadius: '8px',
              fontSize: '16px'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
              Schemes
            </Link>
            
            <Link href="/help" style={{
              color: 'white', 
              textDecoration: 'none',
              padding: '12px 15px',
              borderRadius: '8px',
              fontSize: '16px'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
              Help
            </Link>
          </nav>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main style={{
          marginLeft: '250px',
          width: 'calc(100% - 250px)',
          minHeight: '100vh'
        }}>
          {children}
        </main>
        
      </body>
    </html>
  );
}
