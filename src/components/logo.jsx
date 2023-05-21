import { motion } from "framer-motion";

export default function Logo() {
  return <motion.img src={"/logo.gif"} layoutId="LogoAnimado" />;
}
