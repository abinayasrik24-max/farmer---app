export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <nav style={{ padding: '20px', background: '#16a34a', color: 'white', display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
          <a href="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</a>
          <a href="/market" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Market Price</a>
          <a href="/login" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Login</a>
        </nav>
        {children}
      </body>
    </html>
  )
}