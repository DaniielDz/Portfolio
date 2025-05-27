import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import styles from "../styles/Header.module.css";
import useResponsive from "../hooks/useResponsive";

function Header() {
  const isMobile = useResponsive();
  const links = [
    { name: "Portafolios", href: "#projects" },
    { name: "Sobre Mí", href: "#aboutMe" },
    { name: "Habilidades", href: "#skills" },
    { name: "Educación", href: "#education" },
    { name: "Contacto", href: "#contact" },
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
