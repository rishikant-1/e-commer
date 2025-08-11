import { useEffect } from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({
  showSpinner: false,   // Bottom spinner hatane ke liye
  trickleSpeed: 100,    // Progress bar speed (default 200ms)
  speed: 100            // Animation speed (default 400ms)
});

function TopLoader({isLoading}) {
  useEffect(() => {
    if(isLoading){
      nprogress.start();
    }else{
      nprogress.done(true);
      nprogress.remove();
    }
  },[isLoading])
  return null;
}

export default TopLoader;