import clsx from 'clsx';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const createNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx('px-4 py-2', {
    'underline font-bold text-blue-600': isActive,
    'text-gray-600': !isActive,
  });

const Navigation: React.FC = () => {
  return (
    <header>
      <Container>
        <nav className="flex justify-center gap-2">
          <NavLink to="/" className={createNavLinkClass}>
            Home
          </NavLink>

          <NavLink to="/dashboard" className={createNavLinkClass}>
            Dashboard
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
