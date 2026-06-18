import navbar from './components/navbar'
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <navbar />
        {children}
      </body>
    </html>
  )
}