//import { translate } from "../../share/translate";
import styles from "./Header.module.css";

export default function Header({ lang, changeLang }) {
  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
        <button onClick={() => changeLang()}>Change Lang</button>
        <span>{lang}</span>
      </div>
    </header>
  );
}
