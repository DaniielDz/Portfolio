function DesktopNav({ styles, links }) {
  return (
    <nav>
      <ul className={styles.navList}>
        {
          links.map((link, index) => (
            <li key={index}>
              <a
                className={styles.navLink}
                href={link.href}
                aria-label={link.name}
              >
                {link.name}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default DesktopNav;
