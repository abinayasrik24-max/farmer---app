'use client';

export default function SchemesPage() {
  const schemes = [
    {
      icon: '💰',
      title: 'PM-KISAN Yojana',
      benefit: '₹6000/year',
      desc: 'Direct income support for farmers. ₹2000 in 3 installments directly to bank account every 4 months.',
      link: 'pmkisan.gov.in'
    },
    {
      icon: '🛡️',
      title: 'Pradhan Mantri Fasal Bima Yojana',
      benefit: 'Low Premium',
      desc: 'Crop insurance scheme. Only 2% for Kharif, 1.5% for Rabi crops. High coverage for natural calamities and crop loss.',
      link: 'pmfby.gov.in'
    },
    {
      icon: '🧪',
      title: 'Soil Health Card Scheme',
      benefit: 'Free Testing',
      desc: 'Free soil testing every 2 years. Get recommendations for fertilizers and crop selection based on soil quality.',
      link: 'soilhealth.dac.gov.in'
    },
    {
      icon: '💡',
      title: 'PM-KUSUM Scheme',
      benefit: 'Solar Subsidy',
      desc: 'Subsidy for solar pumps and grid-connected solar power plants. Reduce electricity cost for irrigation.',
      link: 'mnre.gov.in'
    },
    {
      icon: '💳',
      title: 'Kisan Credit Card',
      benefit: 'Low Interest',
      desc: 'Credit up to ₹3 lakh at 4% interest with subsidy. For crop production and farm expenses. Easy loan facility.',
      link: 'nabard.org'
    },
    {
      icon: '📱',
      title: 'e-NAM Scheme',
      benefit: 'Online Market',
      desc: 'Electronic National Agriculture Market. Sell crops online at better price. Transparent bidding system.',
      link: 'enam.gov.in'
    },
    {
      icon: '🚜',
      title: 'Sub-Mission on Agri Mechanization',
      benefit: '50% Subsidy',
      desc: 'Subsidy for buying tractors, harvesters, seeders. Reduce labor cost and increase efficiency.',
      link: 'agrimachinery.nic.in'
    },
    {
      icon: '🌱',
      title: 'Paramparagat Krishi Vikas Yojana',
      benefit: '₹50,000/hectare',
      desc: 'Support for organic farming. Cluster approach. Training and certification support for farmers.',
      link: 'pgsindia-ncof.gov.in'
    },
    {
      icon: '🌾',
      title: 'National Food Security Mission',
      benefit: 'High Yield',
      desc: 'Increase production of rice, wheat, pulses. Provide quality seeds, technology, and training to farmers.',
      link: 'nfsm.gov.in'
    },
    {
      icon: '💧',
      title: 'Pradhan Mantri Krishi Sinchayee Yojana',
      benefit: 'Drip Subsidy',
      desc: 'Subsidy for drip irrigation, sprinkler systems. "More crop per drop" - water use efficiency scheme.',
      link: 'pmksy.gov.in'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c5e1a5 100%)',
      padding: '60px 20px'
    }}>
      
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
          <h1 style={{
            color: '#1b5e20',
            fontSize: '42px',
            fontWeight: '900',
            marginBottom: '10px'
          }}>
            🏛️ Government Schemes
          </h1>
          <p style={{
            color: '#2e7d32',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            Farmers ku Central Govt benefits - Apply panni use panunga
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          {schemes.map((scheme, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '28px',
              borderRadius: '18px',
              boxShadow: '0 12px 35px rgba(76, 175, 80, 0.2)',
              borderTop: '4px solid #4caf50',
              position: 'relative',
              overflow: 'hidden'
            }}>
              
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                fontSize: '100px',
                opacity: '0.06'
              }}>
                {scheme.icon}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  fontSize: '45px',
                  background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                  width: '70px',
                  height: '70px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {scheme.icon}
                </div>
                <div style={{flex: 1}}>
                  <h3 style={{
                    color: '#1b5e20',
                    fontSize: '18px',
                    fontWeight: '800',
                    margin: '0 0 5px 0'
                  }}>
                    {scheme.title}
                  </h3>
                  <div style={{
                    background: '#4caf50',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    display: 'inline-block'
                  }}>
                    {scheme.benefit}
                  </div>
                </div>
              </div>
              
              <p style={{
                color: '#555',
                fontSize: '14px',
                lineHeight: '1.7',
                marginBottom: '15px'
              }}>
                {scheme.desc}
              </p>

              <div style={{
                color: '#2e7d32',
                fontSize: '12px',
                fontWeight: '600',
                borderTop: '1px solid #e0e0e0',
                paddingTop: '12px'
              }}>
                🔗 Official: {scheme.link}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}