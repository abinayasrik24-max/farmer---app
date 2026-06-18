import Link from 'next/link';

export default function Home() {
  return (
    <div style={{padding: "30px", fontFamily: "Arial", textAlign: "center", backgroundColor: "#fff8e1"}}>
      <h1>🌾 அறிவு விவசாயி App</h1>
      <p>Vivasayigalukana thozhi</p>
      
      <div style={{marginTop: "40px"}}>
        <Link href="/crops"><button style={{margin: "10px", padding: "15px"}}>1. En Thottam</button></Link>
        <Link href="/price"><button style={{margin: "10px", padding: "15px"}}>2. Vilaimurai</button></Link>
        <Link href="/profit"><button style={{margin: "10px", padding: "15px"}}>3. Labam Kanipu</button></Link>
        <Link href="/help"><button style={{margin: "10px", padding: "15px"}}>4. Udhavi</button></Link>
      </div>
    </div>
  );
}