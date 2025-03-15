import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation happens only once
    });
  }, []);

  return <>{children}</>;
}

export default App;
