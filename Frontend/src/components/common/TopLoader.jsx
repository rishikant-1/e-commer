import { useEffect } from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

nprogress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  speed: 400,
  minimum: 0.15,
});

function TopLoader({ isLoading }) {
  useEffect(() => {
    if (isLoading) {
      nprogress.start();
    } else {
      // delay kar ke stop karo taaki animation smooth lage
      const timer = setTimeout(() => {
        nprogress.done();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return null;
}

export default TopLoader;
