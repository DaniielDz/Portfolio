import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import styles from "../styles/Header.module.css";
import useResponsive from "../hooks/useResponsive";

function Header() {
  const isMobile = useResponsive();
  const links = [
    { name: "Sobre Mí", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Portafolios", href: "#" },
    { name: "Contacto", href: "#" },
  ];

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/" aria-label="Homepage">
        Daniiel<span className={styles.logoSpan}>Dz</span>
      </a>
      {isMobile ? (
        <MobileNav styles={styles} links={links} />
      ) : (
        <DesktopNav styles={styles} links={links} />
      )}
    </header>
  );
}

export default Header;
