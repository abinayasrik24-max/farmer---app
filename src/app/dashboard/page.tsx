'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const farmersData = {
  ramesh: { name: 'Ramesh Kumar', crop: 'Paddy', area: '2.5 Acres', marketRate: '₹2400 / Quintal', prev: 2200, current: 2400, income: 85000, expense: 17000, weather: '30°C, Partly Cloudy', tip: 'Maintain proper water level in paddy fields' },
  sita: { name: 'Sita Devi', crop: 'Turmeric', area: '1.8 Acres', marketRate: '₹8500 / Quintal', prev: 8200, current: 8500, income: 62000, expense: 12000, weather: '29°C, Sunny', tip: 'Harvest at proper maturity stage' },
  murugan: { name: 'Murugan P', crop: 'Coconut', area: '3.2 Acres', marketRate: '₹35 / Nut', prev: 32, current: 35, income: 95000, expense: 18000, weather: '31°C, Clear', tip: 'Regular de-husking improves yield' },
  lakshmi: { name: 'Lakshmi M', crop: 'Tomato', area: '1.5 Acres', marketRate: '₹2800 / Quintal', prev: 2500, current: 2800, income: 58000, expense: 15000, weather: '28°C, Humid', tip: 'Use staking for better fruit quality' },
  kumaravel: { name: 'Kumaravel', crop: 'Maize', area: '4.0 Acres', marketRate: '₹2100 / Quintal', prev: 2000, current: 2100, income: 72000, expense: 16000, weather: '30°C, Partly Cloudy', tip: 'Apply fertilizer at tasseling stage' },
  ponnusamy: { name: 'Ponnusamy', crop: 'Groundnut', area: '2.2 Acres', marketRate: '₹6200 / Quintal', prev: 6000, current: 6200, income: 68000, expense: 14000, weather: '29°C, Clear', tip: 'Timely irrigation during pod formation' },
  meena: { name: 'Meena R', crop: 'Vegetables', area: '1.0 Acres', marketRate: '₹3500 / Quintal', prev: 3200, current: 3500, income: 45000, expense: 10000, weather: '27°C, Cloudy', tip: 'Mulching reduces weed growth' },
  ganesan: { name: 'Ganesan S', crop: 'Sugarcane', area: '5.5 Acres', marketRate: '₹3100 / Ton', prev: 3000, current: 3100, income: 120000, expense: 25000, weather: '32°C, Sunny', tip: 'Detrashing improves cane weight' },
  revathi: { name: 'Revathi', crop: 'Banana', area: '2.8 Acres', marketRate: '₹1800 / Quintal', prev: 1700, current: 1800, income: 78000, expense: 17000, weather: '30°C, Humid', tip: 'Propping prevents plant lodging' },
  venkatesh: { name: 'Venkatesh', crop: 'Cotton', area: '3.5 Acres', marketRate: '₹6800 / Quintal', prev: 6500, current: 6800, income: 92000, expense: 20000, weather: '31°C, Clear', tip: 'Pink bollworm monitoring is crucial' },
};

export default function DashboardPage() {
  const [farmer, setFarmer] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedInFarmer');
    if(!loggedUser) {
      router.push('/login');
    } else {
      setFarmer(farmersData[loggedUser as keyof typeof farmersData]);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInFarmer');
    router.push('/login');
  };

  if(!farmer) return null;

  const profit = farmer.income - farmer.expense;
  const diff = farmer.current - farmer.prev;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      padding: '40px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <div style={{
        maxWidth: '600px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '25px',
        padding: '40px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
        border: '1px solid rgba(76, 175, 80, 0.3)'
      }}>

        <h2 style={{
          color: '#1b5e20',
          fontSize: '28px',
          fontWeight: '800',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          Vanakkam {farmer.name}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          marginBottom: '30px'
        }}>

          <div style={{background: '#f1f8e9', padding: '18px', borderRadius: '14px', border: '1px solid #c8e6c9'}}>
            <div style={{fontSize: '13px', color: '#666', marginBottom: '6px'}}>🌾 Crop</div>
            <div style={{fontWeight: '700', color: '#2e7d32', fontSize: '18px'}}>{farmer.crop}</div>
            <div style={{fontSize: '13px', color: '#666', marginTop: '4px'}}>Area {farmer.area}</div>
          </div>

          <div style={{background: '#f1f8e9', padding: '18px', borderRadius: '14px', border: '1px solid #c8e6c9'}}>
            <div style={{fontSize: '13px', color: '#666', marginBottom: '6px'}}>💰 Market Rate</div>
            <div style={{fontWeight: '700', color: '#2e7d32', fontSize: '18px'}}>{farmer.marketRate}</div>
          </div>

          <div style={{background: '#f1f8e9', padding: '18px', borderRadius: '14px', border: '1px solid #c8e6c9'}}>
            <div style={{fontSize: '13px', color: '#666', marginBottom: '6px'}}>📊 Comparison</div>
            <div style={{fontSize: '14px'}}>Prev ₹{farmer.prev}</div>
            <div style={{fontSize: '14px'}}>Current ₹{farmer.current}</div>
            <div style={{fontSize: '15px', color: diff > 0? '#4caf50' : '#f44336', fontWeight: '700', marginTop: '4px'}}>
              {diff > 0? `+₹${diff}` : `₹${diff}`}
            </div>
          </div>

          <div style={{background: '#f1f8e9', padding: '18px', borderRadius: '14px', border: '1px solid #c8e6c9'}}>
            <div style={{fontSize: '13px', color: '#666', marginBottom: '6px'}}>🌤️ Weather</div>
            <div style={{fontWeight: '600', color: '#2e7d32', fontSize: '15px'}}>{farmer.weather}</div>
          </div>

          <div style={{background: '#e8f5e9', padding: '18px', borderRadius: '14px', border: '1px solid #a5d6a7'}}>
            <div style={{fontSize: '13px', color: '#666', marginBottom: '6px'}}>🔥 Income</div>
            <div style={{fontWeight: '700', color: '#2e7d32', fontSize: '18px'}}>₹{farmer.income.toLocaleString()}</div>
          </div>

          <div style={{background: '#fff3e0', padding: '18px', borderRadius: '14px', border: '1px solid #ffcc80'}}>
            <div style={{fontSize: '13px', color: '#666', marginBottom: '6px'}}>💸 Expense</div>
            <div style={{fontWeight: '700', color: '#e65100', fontSize: '18px'}}>₹{farmer.expense.toLocaleString()}</div>
          </div>

          <div style={{background: '#e8f5e9', padding: '20px', borderRadius: '14px', border: '2px solid #4caf50', gridColumn: '1 / -1'}}>
            <div style={{fontSize: '14px', color: '#666', marginBottom: '8px', textAlign: 'center'}}>✅ Net Profit</div>
            <div style={{fontWeight: '800', color: '#1b5e20', fontSize: '28px', textAlign: 'center'}}>₹{profit.toLocaleString()}</div>
          </div>

          <div style={{background: '#f3e5f5', padding: '18px', borderRadius: '14px', border: '1px solid #ce93d8', gridColumn: '1 / -1'}}>
            <div style={{fontSize: '13px', color: '#666', marginBottom: '6px'}}>🌱 Crop Tip</div>
            <div style={{fontSize: '14px', color: '#4a148c', lineHeight: '1.5'}}>{farmer.tip}</div>
          </div>

        </div>

        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            padding: '15px',
            background: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>

      </div>
    </div>
  );
}