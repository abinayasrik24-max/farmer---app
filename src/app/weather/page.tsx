export default function WeatherPage() {
  return (
    <div style={{padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
      <h1 style={{color: '#2e7d32'}}>Weather - Coimbatore</h1>
      
      <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                   color: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center'}}>
        <h2 style={{fontSize: '48px', margin: 0}}>30°C</h2>
        <p style={{fontSize: '20px'}}>Partly Cloudy</p>
        <p>Humidity: 65% | Wind: 12 km/h</p>
      </div>

      <div style={{background: '#fff3cd', padding: '20px', borderRadius: '10px', marginTop: '20px', borderLeft: '4px solid #ffc107'}}>
        <h3>🌾 Crop Tip:</h3>
        <p>Mazhai chance iruku. Paddy crop ku drainage check panunga. Fungus varama paathukonga.</p>
      </div>

      <h3 style={{marginTop: '30px'}}>5 Day Forecast</h3>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px'}}>
        {['Mon 32°C', 'Tue 31°C', 'Wed 29°C', 'Thu 30°C', 'Fri 33°C'].map(day => (
          <div key={day} style={{background: 'white', padding: '15px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
            <b>{day}</b>
          </div>
        ))}
      </div>
    </div>
  )
}