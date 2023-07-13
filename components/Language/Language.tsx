import React from "react";
import styles from "./Language.module.css";

const languageItems = [
  {
    id: 0,
    title: "UA",
    value: "ua",
  },
  {
    id: 1,
    title: "EN",
    value: "en",
  },
  {
    id: 2,
    title: "FR",
    value: "fr",
  },
  {
    id: 3,
    title: "DE",
    value: "de",
  },
];

const Language = () => {
  return (
    <div>
      <select className={styles.lang_select}>
        {languageItems.map(({ id, title, value }) => {
          return (
            <option className={styles.lang_option} key={id} value={value}>
              {title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Language;