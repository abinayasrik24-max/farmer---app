export default function TipsPage() {
  const tips = [
    {
      title: '1. Soil Testing',
      desc: 'Test soil every 6 months. Use Soil Health Card recommendations for fertilizer application. Right nutrients = better yield.'
    },
    {
      title: '2. Water Management',
      desc: 'Use drip irrigation for water efficiency. Water crops early morning 6-9 AM or evening 4-6 PM to reduce evaporation loss.'
    },
    {
      title: '3. Seed Selection',
      desc: 'Use certified seeds only. Treat seeds with Trichoderma before sowing to prevent disease and improve germination rate.'
    },
    {
      title: '4. Integrated Pest Management',
      desc: 'Use neem oil, pheromone traps, yellow sticky traps. Avoid excess pesticide. Protect beneficial insects like ladybirds and spiders.'
    },
    {
      title: '5. Crop Rotation',
      desc: 'Change crops each season. Paddy → Pulses → Vegetables rotation keeps soil healthy, fertile and reduces pest attack.'
    },
    {
      title: '6. Weather Monitoring',
      desc: 'Check IMD weather forecast daily. Prepare for rain and ensure proper drainage to avoid waterlogging and crop damage.'
    },
    {
      title: '7. Organic Manure',
      desc: 'Use compost, vermicompost, cow dung. Mix organic + chemical fertilizer. Improves soil structure and water holding capacity.'
    },
    {
      title: '8. Proper Spacing',
      desc: 'Maintain recommended plant spacing. Overcrowding reduces yield. Good air circulation prevents fungal disease.'
    },
    {
      title: '9. Weed Management',
      desc: 'Remove weeds in early stage. Use mulching to suppress weeds. Weeds compete for nutrients, water and sunlight.'
    },
    {
      title: '10. Harvest Timing',
      desc: 'Harvest at proper maturity stage. Early or late harvest reduces quality and market price. Check crop calendar.'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      padding: '50px 20px'
    }}>
      
      <div style={{maxWidth: '900px', margin: '0 auto'}}>
        
        <h1 style={{
          textAlign: 'center',
          color: '#1b5e20',
          fontSize: '36px',
          fontWeight: '800',
          marginBottom: '40px'
        }}>
          Agricultural Tips
        </h1>

        <div style={{display: 'flex', flexDirection: 'column', gap: '18px'}}>
          {tips.map((tip, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #e8f5e9 0%, #dcedc1 100%)',
              padding: '24px 28px',
              borderRadius: '16px',
              border: '2px solid #4caf50',
              boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{
                color: '#2e7d32',
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '8px',
                margin: '0 0 8px 0'
              }}>
                {tip.title}
              </h3>
              <p style={{
                color: '#1b5e20',
                fontSize: '15px',
                lineHeight: '1.6',
                margin: 0,
                fontWeight: '500'
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