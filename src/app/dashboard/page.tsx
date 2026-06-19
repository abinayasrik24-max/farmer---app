'use client';

const farmers = [
  { id: 1, name: 'Ramesh Kumar', crop: 'Paddy', area: '2.5 Acres', marketRate: '₹2400 / Quintal', prev: 2200, current: 2400, income: 85000, expense: 17000, weather: '30°C, Partly Cloudy', tip: 'Maintain proper water level in paddy fields' },
  { id: 2, name: 'Sita Devi', crop: 'Turmeric', area: '1.8 Acres', marketRate: '₹8500 / Quintal', prev: 8200, current: 8500, income: 62000, expense: 12000, weather: '29°C, Sunny', tip: 'Harvest at proper maturity stage' },
  { id: 3, name: 'Murugan P', crop: 'Coconut', area: '3.2 Acres', marketRate: '₹35 / Nut', prev: 32, current: 35, income: 95000, expense: 18000, weather: '31°C, Clear', tip: 'Regular de-husking improves yield' },
  { id: 4, name: 'Lakshmi M', crop: 'Tomato', area: '1.5 Acres', marketRate: '₹2800 / Quintal', prev: 2500, current: 2800, income: 58000, expense: 15000, weather: '28°C, Humid', tip: 'Use staking for better fruit quality' },
  { id: 5, name: 'Kumaravel', crop: 'Maize', area: '4.0 Acres', marketRate: '₹2100 / Quintal', prev: 2000, current: 2100, income: 72000, expense: 16000, weather: '30°C, Partly Cloudy', tip: 'Apply fertilizer at tasseling stage' },
  { id: 6, name: 'Ponnusamy', crop: 'Groundnut', area: '2.2 Acres', marketRate: '₹6200 / Quintal', prev: 6000, current: 6200, income: 68000, expense: 14000, weather: '29°C, Clear', tip: 'Timely irrigation during pod formation' },
  { id: 7, name: 'Meena R', crop: 'Vegetables', area: '1.0 Acres', marketRate: '₹3500 / Quintal', prev: 3200, current: 3500, income: 45000, expense: 10000, weather: '27°C, Cloudy', tip: 'Mulching reduces weed growth' },
  { id: 8, name: 'Ganesan S', crop: 'Sugarcane', area: '5.5 Acres', marketRate: '₹3100 / Ton', prev: 3000, current: 3100, income: 120000, expense: 25000, weather: '32°C, Sunny', tip: 'Detrashing improves cane weight' },
  { id: 9, name: 'Revathi', crop: 'Banana', area: '2.8 Acres', marketRate: '₹1800 / Quintal', prev: 1700, current: 1800, income: 78000, expense: 17000, weather: '30°C, Humid', tip: 'Propping prevents plant lodging' },
  { id: 10, name: 'Venkatesh', crop: 'Cotton', area: '3.5 Acres', marketRate: '₹6800 / Quintal', prev: 6500, current: 6800, income: 92000, expense: 20000, weather: '31°C, Clear', tip: 'Pink bollworm monitoring is crucial' },
];

export default function DashboardPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      padding: '30px 20px'
    }}>
      
      <div style={{maxWidth: '1300px', margin: '0 auto'}}>
        
        <h1 style={{
          color: '#1b5e20',
          fontSize: '36px',
          fontWeight: '800',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          👨‍🌾 Farmer Dashboard
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#2e7d32',
          fontSize: '16px',
          marginBottom: '40px'
        }}>
          Total 10 Registered Farmers
        </p>

        {/* 10 Farmers Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          
          {farmers.map((farmer) => {
            const profit = farmer.income - farmer.expense;
            const diff = farmer.current - farmer.prev;
            
            return (
              <div key={farmer.id} style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px',
                padding: '25px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                border: '1px solid rgba(76, 175, 80, 0.2)'
              }}>
                
                <h2 style={{
                  color: '#1b5e20',
                  fontSize: '22px',
                  fontWeight: '700',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Vanakkam {farmer.name}
                </h2>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px'
                }}>
                  
                  {/* Crop Card */}
                  <div style={{
                    background: '#f1f8e9',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid #c8e6c9'
                  }}>
                    <div style={{fontSize: '12px', color: '#666', marginBottom: '5px'}}>🌾 Crop</div>
                    <div style={{fontWeight: '700', color: '#2e7d32'}}>{farmer.crop}</div>
                    <div style={{fontSize: '12px', color: '#666', marginTop: '3px'}}>Area {farmer.area}</div>
                  </div>

                  {/* Market Rate */}
                  <div style={{
                    background: '#f1f8e9',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid #c8e6c9'
                  }}>
                    <div style={{fontSize: '12px', color: '#666', marginBottom: '5px'}}>💰 Market Rate</div>
                    <div style={{fontWeight: '700', color: '#2e7d32'}}>{farmer.marketRate}</div>
                  </div>

                  {/* Comparison */}
                  <div style={{
                    background: '#f1f8e9',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid #c8e6c9'
                  }}>
                    <div style={{fontSize: '12px', color: '#666', marginBottom: '5px'}}>📊 Comparison</div>
                    <div style={{fontSize: '13px'}}>Prev ₹{farmer.prev}</div>
                    <div style={{fontSize: '13px'}}>Current ₹{farmer.current}</div>
                    <div style={{fontSize: '13px', color: diff > 0 ? '#4caf50' : '#f44336', fontWeight: '600'}}>
                      {diff > 0 ? `+₹${diff}` : `₹${diff}`}
                    </div>
                  </div>

                  {/* Weather */}
                  <div style={{
                    background: '#f1f8e9',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid #c8e6c9'
                  }}>
                    <div style={{fontSize: '12px', color: '#666', marginBottom: '5px'}}>🌤️ Weather</div>
                    <div style={{fontWeight: '600', color: '#2e7d32', fontSize: '14px'}}>{farmer.weather}</div>
                  </div>

                  {/* Income */}
                  <div style={{
                    background: '#e8f5e9',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid #a5d6a7'
                  }}>
                    <div style={{fontSize: '12px', color: '#666', marginBottom: '5px'}}>🔥 Income</div>
                    <div style={{fontWeight: '700', color: '#2e7d32'}}>₹{farmer.income.toLocaleString()}</div>
                  </div>

                  {/* Expense */}
                  <div style={{
                    background: '#fff3e0',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid #ffcc80'
                  }}>
                    <div style={{fontSize: '12px', color: '#666', marginBottom: '5px'}}>💸 Expense</div>
                    <div style={{fontWeight: '700', color: '#e65100'}}>₹{farmer.expense.toLocaleString()}</div>
                  </div>

                  {/* Net Profit */}
                  <div style={{
                    background: '#e8f5e9',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '2px solid #4caf50'
                  }}>
                    <div style={{fontSize: '12px', color: '#666', marginBottom: '5px'}}>✅ Net Profit</div>
                    <div style={{fontWeight: '800', color: '#1b5e20', fontSize: '18px'}}>₹{profit.toLocaleString()}</div>
                  </div>

                  {/* Crop Tip */}
                  <div style={{
                    background: '#f3e5f5',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid #ce93d8'
                  }}>
                    <div style={{fontSize: '12px', color: '#666', marginBottom: '5px'}}>🌱 Crop Tip</div>
                    <div style={{fontSize: '12px', color: '#4a148c', lineHeight: '1.4'}}>{farmer.tip}</div>
                  </div>

                </div>
              </div>
            );
          })}
          
        </div>

        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <button 
            onClick={() => window.location.href = '/login'}
            style={{
              padding: '14px 35px',
              background: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(244, 67, 54, 0.3)'
            }}
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}