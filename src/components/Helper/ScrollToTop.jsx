import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          const offset = 120;

          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

          window.scrollTo({
            top: y,
            behavior: 'smooth',
          });

          window.history.replaceState(
            null,
            '',
            window.location.pathname
          );
        }, 100);

        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return null;
}

export default ScrollToTop;