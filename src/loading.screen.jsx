import { AnimatePresence, motion } from "framer-motion";
import Logo from "./components/logo";
import { useEffect, useState } from "react";

export default function LoadingScreen({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2001);
  }, []);

  if (!isLoading) {
    return (
      <motion.div className="loadingScreen">
        <div className="Content">
          <Logo />
          <motion.p layoutId="TitleAnimated">Loading</motion.p>
        </div>
      </motion.div>
    );
  }

  return <AnimatePresence>{children}</AnimatePresence>;
}
