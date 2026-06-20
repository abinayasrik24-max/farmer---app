export default function TipsPage() {
  const tips = [
    {title: '1. Soil Testing', desc: 'Test soil every 6 months. Use Soil Health Card recommendations for fertilizer application. Right nutrients = better yield.'},
    {title: '2. Water Management', desc: 'Use drip irrigation for water efficiency. Water crops early morning or evening to reduce evaporation loss.'},
    {title: '3. Seed Selection', desc: 'Use certified seeds only. Treat seeds before sowing to prevent disease and improve germination rate.'},
    {title: '4. Pest Control', desc: 'Use neem oil and pheromone traps. Avoid excess pesticide. Protect beneficial insects.'},
    {title: '5. Crop Rotation', desc: 'Change crops each season. Paddy → Pulses → Vegetables rotation keeps soil healthy.'},
    {title: '6. Weather Check', desc: 'Check IMD weather forecast daily. Prepare for rain and ensure proper drainage.'}
  ];

  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)', padding: '50px 20px'}}>
      <div style={{maxWidth: '900px', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center', color: '#1b5e20', fontSize: '36px', fontWeight: '800', marginBottom: '40px'}}>
          Agricultural Tips
        </h1>
        <div style={{display: 'flex', flexDirection: 'column', gap: '18px'}}>
          {tips.map((tip, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #e8f5e9 0%, #dcedc1 100%)',
              padding: '24px 28px',
              borderRadius: '16px',
              border: '2px solid #4caf50',
              boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3)'
            }}>
              <h3 style={{color: '#2e7d32', fontSize: '18px', fontWeight: '700', marginBottom: '8px'}}>{tip.title}</h3>
              <p style={{color: '#1b5e20', fontSize: '15px', lineHeight: '1.6', fontWeight: '500'}}>{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}