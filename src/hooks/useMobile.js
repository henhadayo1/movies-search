import { useEffect, useState } from "react";

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function resizeEventHandler() {
      if (window.innerWidth <= 480) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", resizeEventHandler);

    return () => {
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);

  return isMobile;
};

export default useMobile;
