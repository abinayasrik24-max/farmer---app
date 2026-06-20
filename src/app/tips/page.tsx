'use client';

export default function TipsPage() {
  const tips = [
    {icon: '🌱', title: 'Soil Testing', desc: 'Test soil every 6 months. Use Soil Health Card recommendations for fertilizer application. Right nutrients = better yield.'},
    {icon: '💧', title: 'Water Management', desc: 'Use drip irrigation for water efficiency. Water crops early morning 6-9 AM or evening 4-6 PM to reduce evaporation loss.'},
    {icon: '🌾', title: 'Seed Selection', desc: 'Use certified seeds only. Treat seeds with Trichoderma before sowing to prevent disease and improve germination rate.'},
    {icon: '🐞', title: 'Pest Management', desc: 'Use neem oil, pheromone traps, yellow sticky traps. Avoid excess pesticide. Protect beneficial insects like ladybirds.'},
    {icon: '🔄', title: 'Crop Rotation', desc: 'Change crops each season. Paddy → Pulses → Vegetables rotation keeps soil healthy and reduces pest attack.'},
    {icon: '🌤️', title: 'Weather Monitoring', desc: 'Check IMD weather forecast daily. Prepare for rain and ensure proper drainage to avoid waterlogging.'},
    {icon: '♻️', title: 'Organic Manure', desc: 'Use compost, vermicompost, cow dung. Mix organic + chemical fertilizer. Improves soil structure.'},
    {icon: '📏', title: 'Proper Spacing', desc: 'Maintain recommended plant spacing. Overcrowding reduces yield. Good air circulation prevents fungal disease.'},
    {icon: '🌿', title: 'Weed Management', desc: 'Remove weeds early. Use mulching to suppress weeds. Weeds compete for nutrients and sunlight.'},
    {icon: '✂️', title: 'Harvest Timing', desc: 'Harvest at proper maturity stage. Early or late harvest reduces quality and market price.'}
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)',
      padding: '60px 20px'
    }}>
      
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>
        
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
          <h1 style={{
            color: '#1b5e20',
            fontSize: '42px',
            fontWeight: '900',
            marginBottom: '10px'
          }}>
            🌾 Farming Tips
          </h1>
          <p style={{
            color: '#2e7d32',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            Smart farming for better yield & profit
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '25px'
        }}>
          {tips.map((tip, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '30px 25px',
              borderRadius: '20px',
              borderLeft: '6px solid #4caf50',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                fontSize: '80px',
                opacity: '0.08'
              }}>
                {tip.icon}
              </div>
              
              <div style={{
                fontSize: '40px',
                marginBottom: '15px'
              }}>
                {tip.icon}
              </div>
              
              <h3 style={{
                color: '#1b5e20',
                fontSize: '20px',
                fontWeight: '800',
                marginBottom: '12px'
              }}>
                {tip.title}
              </h3>
              
              <p style={{
                color: '#424242',
                fontSize: '14px',
                lineHeight: '1.7',
                margin: 0
              }}>
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}