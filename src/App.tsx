import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<p>Loading ...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
