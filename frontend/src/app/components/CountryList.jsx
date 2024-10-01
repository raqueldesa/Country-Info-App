"use client";
import styles from "./country.module.css";

import { useRouter } from "next/navigation";

export default function CountryList({ countries }) {
  const router = useRouter();

  return (
    <div className={styles.country_list}>
      {countries?.map((country, i) => (
        <div
          className={styles.btn}
          key={i}
          onClick={() =>
            router.push(
              `/infoCountry/${Object.entries(country)[1][1]}/${
                country.countryCode
              }`
            )
          }
        >
          <span>
            {Object.entries(country)[1][1]} ({country.countryCode})
          </span>
        </div>
      ))}
    </div>
  );
}
