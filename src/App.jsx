import Logo from "./components/logo";
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <header className="SiteHeader">
        <div className="Content">
          <Logo />
          <motion.h1 layoutId="TitleAnimated">The Zone</motion.h1>
        </div>
      </header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="SiteMain"
      >
        <div className="ContainerLinks">
          <a
            href="https://open.spotify.com/playlist/5tauXLNKYqGlLZvB6FJ50x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.scdn.co/image/ab67706c0000da8406b1c509f01bf718d2e39041"
              alt=""
            />
            <h2>The Zone</h2>
          </a>
          <a
            href="https://open.spotify.com/playlist/1QWvKGVoRtewnfumjAGyeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.scdn.co/image/ab67706c0000da8483965f76d3663f6f8f97e73d"
              alt=""
            />
            <h2>The Gym Zone</h2>
          </a>
        </div>
      </motion.main>
    </>
  );
}
