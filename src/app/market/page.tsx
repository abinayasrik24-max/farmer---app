'use client';
import { useEffect, useState } from 'react';

export default function MarketPage() {
  const [rates, setRates] = useState<any[]>([]);
  const [filteredRates, setFilteredRates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/market')
   .then(res => res.json())
   .then(data => {
        setRates(Array.isArray(data)? data : []);
        setFilteredRates(Array.isArray(data)? data : []);
        setLoading(false);
      })
   .catch(() => {
        setRates([]);
        setFilteredRates([]);
        setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filtered = rates.filter(item =>
      item.commodity?.toLowerCase().includes(search.toLowerCase()) ||
      item.variety?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRates(filtered);
  }, [search, rates]);

  if (loading) return <div className="text-center p-20 text-xl">Loading live rates... 🌾</div>;

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">🌾 Live Market Rates - Coimbatore Mandi</h1>

      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="🔍 Search crop... Tomato, Onion, Paddy..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border-2 border-green-300 focus:border-green-600 outline-none text-lg shadow-md"
        />
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-4 text-left">Crop</th>
              <th className="p-4 text-left">Variety</th>
              <th className="p-4 text-left">Rate /Quintal</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredRates.length === 0? (
              <tr><td colSpan={4} className="p-6 text-center text-gray-500">No crops found 🔍</td></tr>
            ) : filteredRates.map((item, i) => (
              <tr key={i} className="border-b hover:bg-green-50">
                <td className="p-4 font-semibold">{item.commodity}</td>
                <td className="p-4">{item.variety}</td>
                <td className="p-4 text-green-700 font-bold">₹{item.modal_price}</td>
                <td className="p-4 text-gray-600">{item.arrival_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-gray-500 mt-4 text-sm">
        Showing {filteredRates.length} crops | Last updated: {new Date().toLocaleString('en-IN')}
      </p>
    </div>
  );
}