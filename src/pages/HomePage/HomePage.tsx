import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

export default function HomePage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold text-center">Home Page</h1>
      <div className="mt-2">
        <p className="text-center">
          Thanks SynergyWay for the awesome opportunity to try my self with this
          test task!
        </p>

        <p className="text-center flex justify-center gap-2">
          Feel free to check it{' '}
          <Link className="text-blue-600 font-bold" to="/dashboard">
            here
          </Link>
        </p>
      </div>
    </Container>
  );
}
