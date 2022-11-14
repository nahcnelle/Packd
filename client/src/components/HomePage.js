import TripButton from './TripButton';
import SignupForm from './SignupForm';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-center mt-5">Packd</h1>
      <SignupForm></SignupForm>
      <TripButton></TripButton>      
    </div>
  );
}