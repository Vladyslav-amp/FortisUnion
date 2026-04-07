
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import FightersPage from './pages/FightersPage';
import FighterDetailsPage from './pages/FighterDetailsPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="fighters" element={<FightersPage />} />
        <Route path="fighters/:slug" element={<FighterDetailsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
