export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const API_KEY = '579b2655e8559dd0f8d8e6f5a5c5e5e'; // Free demo key

  try {
    const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a136c06d4fef?api-key=${API_KEY}&format=json&limit=50&filters[state]=Tamil Nadu&filters[district]=Coimbatore`;
    const res = await fetch(url);
    const data = await res.json();

    if(data.records && data.records.length > 0) {
      return Response.json(data.records);
    }
  } catch(e) {}

  // API fail aana dummy data - Option 1
  const dummyData = [
    { commodity: "Tomato", variety: "Local", modal_price: "4500", arrival_date: today },
    { commodity: "Onion", variety: "Big", modal_price: "3200", arrival_date: today },
    { commodity: "Paddy", variety: "Sona Masuri", modal_price: "2800", arrival_date: today },
    { commodity: "Coconut", variety: "Copra", modal_price: "9800", arrival_date: today },
    { commodity: "Banana", variety: "Nendram", modal_price: "3500", arrival_date: today },
    { commodity: "Brinjal", variety: "Long", modal_price: "2200", arrival_date: today },
    { commodity: "Bhendi", variety: "Local", modal_price: "3800", arrival_date: today },
    { commodity: "Carrot", variety: "Local", modal_price: "4200", arrival_date: today },
    { commodity: "Cabbage", variety: "Local", modal_price: "1800", arrival_date: today },
    { commodity: "Potato", variety: "Jyothi", modal_price: "3000", arrival_date: today },
    { commodity: "Maize", variety: "Local", modal_price: "2400", arrival_date: today },
    { commodity: "Groundnut", variety: "Bold", modal_price: "6500", arrival_date: today }
  ];
  return Response.json(dummyData);
}