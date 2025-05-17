import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';

const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
