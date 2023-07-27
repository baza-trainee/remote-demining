import Card from "../Card/Card";
import NavLink from "../NavLink/NavLink";

import { teamData } from "./teamData";

import styles from "./cardsData.module.css";

export const cardsData = teamData.map(
  ({ id, img, projectPosition, phone, email, name }) => {
    return (
      <div key={id} className={styles.card_body}>
        <Card img={img}>
          {
            <div className={styles.card_text}>
              <div className={styles.card_head}>
                <h2>{name}</h2>
                <p>{projectPosition}</p>
              </div>
              <div className={styles.card_contacts}>
                <NavLink href={`tel: ${phone}`}>{`Телефон: ${phone}`}</NavLink>
                <NavLink href={`mailto: ${email}`}>{`Пошта: ${email}`}</NavLink>
              </div>
            </div>
          }
        </Card>
      </div>
    );
  }
);
