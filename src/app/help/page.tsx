'use client';
import { useState } from 'react';

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I register?',
      a: 'Click Login → Create Account → Enter mobile number → Complete OTP verification → Fill basic details → Submit. Registration is 100% free.'
    },
    {
      q: 'How to update crop details?',
      a: 'After login, go to Dashboard → Add Crop → Select crop name, season, area → Fill details → Save. You can update anytime from My Crops section.'
    },
    {
      q: 'Is the platform free?',
      a: 'Yes, Smart Farmer Portal is completely free for all registered farmers. No hidden charges or subscription fees.'
    },
    {
      q: 'How to check market prices?',
      a: 'Go to Market page → Select your district and crop → Get live Mandi prices updated daily. Compare prices across nearby markets.'
    },
    {
      q: 'How to apply for government schemes?',
      a: 'Go to Schemes page → Select scheme → Click Official link → Follow application process. Keep Aadhaar, bank passbook ready.'
    },
    {
      q: 'Whom to contact for support?',
      a: 'Email: support@smartfarmer.com | Phone: 1800-180-1551 Toll Free | Timing: 6 AM to 9 PM, Monday to Saturday'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #a5d6a7 100%)',
      padding: '60px 20px'
    }}>
      
      <div style={{maxWidth: '900px', margin: '0 auto'}}>
        
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
          <div style={{fontSize: '60px', marginBottom: '15px'}}>🆘</div>
          <h1 style={{
            color: '#1b5e20',
            fontSize: '42px',
            fontWeight: '900',
            marginBottom: '10px'
          }}>
            Help & Support
          </h1>
          <p style={{
            color: '#2e7d32',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            Need assistance? Find answers below or contact our team
          </p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(76, 175, 80, 0.15)',
              overflow: 'hidden',
              borderLeft: openIndex === index ? '5px solid #4caf50' : '5px solid #c8e6c9'
            }}>
              
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '20px 25px',
                  background: openIndex === index ? 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' : 'white',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{
                  color: '#1b5e20',
                  fontSize: '17px',
                  fontWeight: '700'
                }}>
                  {faq.q}
                </span>
                <span style={{
                  fontSize: '24px',
                  color: '#4caf50',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div style={{
                  padding: '0 25px 20px 25px',
                  background: 'white',
                  animation: 'slideDown 0.3s ease'
                }}>
                  <p style={{
                    color: '#555',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '50px',
          background: 'white',
          padding: '30px',
          borderRadius: '18px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(76, 175, 80, 0.2)',
          borderTop: '4px solid #4caf50'
        }}>
          <h3 style={{color: '#1b5e20', fontSize: '20px', fontWeight: '800', marginBottom: '10px'}}>
            Still Need Help?
          </h3>
          <p style={{color: '#555', fontSize: '14px', marginBottom: '20px'}}>
            Our support team is ready to assist you
          </p>
          <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <div style={{
              background: '#4caf50',
              color: 'white',
              padding: '12px 25px',
              borderRadius: '10px',
              fontWeight: '700',
              fontSize: '14px'
            }}>
              📞 1800-180-1551
            </div>
            <div style={{
              background: '#2e7d32',
              color: 'white',
              padding: '12px 25px',
              borderRadius: '10px',
              fontWeight: '700',
              fontSize: '14px'
            }}>
              ✉️ support@smartfarmer.com
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}