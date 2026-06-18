import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          display: "flex", 
          gap: "20px", 
          padding: "15px", 
          backgroundColor: "#2e7d32", 
          color: "white",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          {/* Un old 4 button - touch panla */}
          <Link href="/home" style={{color: "white", textDecoration: "none", fontSize: "16px"}}>Home</Link>
          <Link href="/about" style={{color: "white", textDecoration: "none", fontSize: "16px"}}>About</Link>
          <Link href="/market" style={{color: "white", textDecoration: "none", fontSize: "16px"}}>Market Price</Link>
          <Link href="/login" style={{color: "white", textDecoration: "none", fontSize: "16px"}}>Login</Link>
          <Link href="/tips" style={{color: "yellow", textDecoration: "none", fontWeight: "bold"}}>Agri Tips</Link>
          <Link href="/schemes" style={{color: "yellow", textDecoration: "none", fontWeight: "bold"}}>Schemes</Link>
<Link href="/help" style={{color: "yellow", textDecoration: "none", fontWeight: "bold"}}>Help</Link>
          
          
        </nav>
        
        <div style={{padding: "20px"}}>
          {children}
        </div>
      </body>
    </html>
  );
}