import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import FightersPage from './pages/FightersPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import FighterDetailsPage from './pages/FighterDetailsPage/FighterDetailsPage';
import ScrollToTop from './components/Helper/ScrollToTop';
import BlogDetailsPage from './pages/BlogDetailsPage';
import EventDetailsPage from './pages/EventDetailsPage/EventDetailsPage';

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="fighters" element={<FightersPage />} />
          <Route path="fighters/:id" element={<FighterDetailsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;