import { styles } from '../styles/main.js';

export default function Menu({ children }) {
  return (
    <nav style={styles.menu}>
      {children}
    </nav>
  );
}