import { useEffect, useState } from "react";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import Header from "../header/Header";

// import styles from './App.module.css';

function App() {
  const data = {
    uk: ["Яблуко", "Банан", "Апельсин"],
    en: ["Apple", "Banana", "Orange"],
  };

  const [lang, setLang] = useState(
    localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : document.documentElement.lang
  );

  const changeLang = () => {
    const newLang = lang === "uk" ? "en" : "uk";
    setLang(() => newLang);
  };
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

   return (
    <>
      <Header lang={lang} changeLang={changeLang} />
      <Main lang={lang}  data={data} />

      <Footer />
    </>
  );
}

export default App;
