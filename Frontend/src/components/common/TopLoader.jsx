import { useEffect } from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({
  showSpinner: false, 
  trickleSpeed: 200,    
  speed: 100            
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