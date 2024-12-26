import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function LoadingScreen() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Loading...", ":)"],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      animate={{ opacity: 0, scale: 1, filter: "blur(5px)" }}
      transition={{
        duration: 5, // Slightly increased duration for smoother ending
        delay: 4, // Delay before starting the fade-out
        ease: "backOut", // Easing function for smoothness
      }}
      className="fixed top-0 left-0 w-screen h-screen text-white text-7xl leading-snug text-shadow-white background flex items-end p-10 z-50 pointer-events-none"
    >
      <span ref={el} />
    </motion.div>
  );
}
