'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>

        {/* ===== MOBILE TOP BAR WITH HAMBURGER ===== */}
        <div style={{
          display: 'none',
          '@media (maxWidth: 768px)': { display: 'flex' }
        }} className="mobile-topbar">
          <div style={{
            background: '#2e7d32',
            padding: '15px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            position: 'fixed',
            top: 0,
            zIndex: 1000
          }}>
            <h1 style={{fontSize: '18px', margin: 0, color: 'white'}}>Smart Farmer Portal</h1>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '28px',
                cursor: 'pointer'
              }}>
              ☰
            </button>
          </div>
        </div>

        {/* ===== SIDEBAR ===== */}
        <aside style={{
          width: '250px',
          background: '#2e7d32',
          minHeight: '100vh',
          padding: '30px 20px',
          position: 'fixed',
          left: 0,
          top: 0,
          transition: 'transform 0.3s ease',
          zIndex: 999
        }}
        className="sidebar">

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
            {['/', '/about', '/market-price', '/login', '/tips', '/schemes', '/help'].map((link, i) => {
              const names = ['Home', 'About', 'Market', 'Login', 'Agri Tips', 'Schemes', 'Help'];
              return (
                <Link key={link} href={link} onClick={() => setMenuOpen(false)} style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}>
                  {names[i]}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* ===== MOBILE MENU OVERLAY ===== */}
        {menuOpen && (
          <div style={{
            display: 'none'
          }} className="mobile-menu">
            <aside style={{
              width: '250px',
              background: '#2e7d32',
              minHeight: '100vh',
              padding: '30px 20px',
              position: 'fixed',
              left: 0,
              top: 0,
              zIndex: 1001,
              transform: menuOpen? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 0.3s ease'
            }}>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '28px',
                  cursor: 'pointer',
                  marginBottom: '20px'
                }}>
                ✕
              </button>
              <nav style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                {['/', '/about', '/market-price', '/login', '/tips', '/schemes', '/help'].map((link, i) => {
                  const names = ['Home', 'About', 'Market', 'Login', 'Agri Tips', 'Schemes', 'Help'];
                  return (
                    <Link key={link} href={link} onClick={() => setMenuOpen(false)} style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }}>
                      {names[i]}
                    </Link>
                  );
                })}
              </nav>
            </aside>
            <div
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 1000
              }}
            />
          </div>
        )}

        {/* ===== MAIN CONTENT ===== */}
        <main style={{
          marginLeft: '250px',
          minHeight: '100vh'
        }} className="main-content">
          <div style={{paddingTop: '0'}} className="mobile-padding">
            {children}
          </div>
        </main>

        <style jsx>{`
          @media (max-width: 768px) {
           .sidebar { transform: translateX(-100%); }
           .main-content { margin-left: 0!important; }
           .mobile-topbar { display: flex!important; }
           .mobile-menu { display: block!important; }
           .mobile-padding { padding-top: 60px!important; }
          }
        `}</style>

      </body>
    </html>
  );
}