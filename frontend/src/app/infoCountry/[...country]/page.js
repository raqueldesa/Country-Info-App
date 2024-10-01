import CountryList from "@/app/components/CountryList";
import PopulationChart from "@/app/components/PopulationChart";
import Image from "next/image";
import styles from "../../page.module.css";

export default async function InfoCountry({ params }) {
  const { country } = params;

  const name = country[0];
  const countryCode = country[1];
  const body = {
    name,
    countryCode,
  };

  let data = await fetch("http://localhost:5000/countries/info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  let details = await data.json();

  return (
    <main className={styles.page}>
      <div className={styles.div}>
        <h1>{name}</h1>

        <Image
          src={details.flag}
          alt="Picture of the author"
          width={300}
          height={150}
        />
      </div>
      <h2>Border Countries</h2>
      <CountryList countries={details.borders} />
      <h2>Population over time</h2>

      <PopulationChart populationData={details.population} />
    </main>
  );
}
