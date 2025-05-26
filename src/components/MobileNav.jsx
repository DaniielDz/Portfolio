import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

function MobileNav({ styles, links }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} color="#FF0000" />
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.mobileNav}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {links.map((link, index) => (
              <li key={index}>
                <a onClick={() => setOpen(false)} href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
