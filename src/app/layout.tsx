import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smart Farmer Portal',
  description: 'Smart Agriculture Intelligence',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Market', href: '/market' },
    { name: 'Login', href: '/login' },
    { name: 'Tips', href: '/tips' },
    { name: 'Schemes', href: '/schemes' },
    { name: 'Help', href: '/help' }
  ];

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        
        {/* UNIQUE GLASS NAVBAR - Compact */}
        <nav style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'rgba(27, 94, 32, 0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '2px solid rgba(76, 175, 80, 0.3)',
          boxShadow: '0 6px 25px rgba(0, 0, 0, 0.12)',
          padding: '8px 20px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px'
          }}>
            <div style={{
              color: 'white',
              fontSize: '19px',
              fontWeight: '800',
              letterSpacing: '0.5px'
            }}>
              🌾 Smart Farmer Portal
            </div>
            
            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.95)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT - No margin */}
        <main style={{ margin: 0, padding: 0 }}>
          {children}
        </main>
      </body>
    </html>
  );
}