export default function MarketPage() {
  const crops = [
    { name: 'Paddy', rate: '₹2400', change: '+2.5%', color: 'green' },
    { name: 'Tomato', rate: '₹45', change: '-5%', color: 'red' },
    { name: 'Onion', rate: '₹60', change: '+8%', color: 'green' },
    { name: 'Brinjal', rate: '₹35', change: '+1%', color: 'green' },
    { name: 'Cotton', rate: '₹7200', change: '+3%', color: 'green' },
    { name: 'Sugarcane', rate: '₹3400', change: '0%', color: 'gray' },
    { name: 'Maize', rate: '₹2100', change: '+4%', color: 'green' },
    { name: 'Groundnut', rate: '₹5800', change: '-2%', color: 'red' },
    { name: 'Banana', rate: '₹28', change: '+6%', color: 'green' },
    { name: 'Coconut', rate: '₹35', change: '+1.5%', color: 'green' },
  ]

  return (
    <div style={{padding: '40px', maxWidth: '800px', margin: '0 auto'}}>
      <h1 style={{color: '#2e7d32'}}>Market Price - Coimbatore Mandi</h1>
      <p style={{color: '#666'}}>Last updated: {new Date().toLocaleString('en-IN')}</p>
      
      <div style={{marginTop: '30px'}}>
        {crops.map(crop => (
          <div key={crop.name} style={{
            background: 'white', 
            padding: '20px', 
            margin: '15px 0', 
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{margin: 0}}>{crop.name}</h3>
            <div style={{textAlign: 'right'}}>
              <h2 style={{margin: 0}}>{crop.rate}/Quintal</h2>
              <span style={{color: crop.color, fontWeight: 'bold'}}>{crop.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}