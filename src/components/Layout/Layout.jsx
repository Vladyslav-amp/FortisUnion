import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToHash from './ScrollToHash/ScrollToHash';

function Layout() {
  return (
    <div className="site-shell">
      <ScrollToHash />
      <Header />
      <main className="site-shell__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
