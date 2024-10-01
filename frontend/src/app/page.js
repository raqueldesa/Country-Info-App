import styles from "./page.module.css";
import CountryList from "./components/CountryList";

export default async function Home() {
  let data = await fetch("http://localhost:5000/countries");
  let countries = await data.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CountryList countries={countries} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
