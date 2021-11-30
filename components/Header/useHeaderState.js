import { useState, useEffect } from "react";

function useHeaderState() {
  const [isViewportScrolled, setViewportScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const updateOnResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      // document.body.style.overflow = "visible";
    } else {
      setIsMobile(false);
    }
  };

  const detectScroll = () => {
    if (window.scrollY > 120) setViewportScrolled(true);
    else setViewportScrolled(false);
  };

  useEffect(() => {
    updateOnResize();
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateOnResize);
    return () => {
      window.removeEventListener("resize", updateOnResize);
    };
  }, []);

  return { isViewportScrolled, isMobile };
}

export default useHeaderState;
