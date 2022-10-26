import TripButton from './TripButton';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-center mt-5">Packd</h1>
      {/* <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem"}} /> */}
      <TripButton></TripButton>      
    </div>
  );
}