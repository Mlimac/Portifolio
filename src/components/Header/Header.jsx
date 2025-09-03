// Header.jsx
import styles from '../Header/styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Mlimacw</h1>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
