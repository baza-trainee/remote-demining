"use client";
import Card from "../Card/Card";
import NavLink from "../NavLink/NavLink";
import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";
import { teamData } from "./teamData";
import styles from "./Team.module.css";
import { useEffect, useState } from "react";
import { ResponsiveObject } from "react-slick";
import teamBg from "@/public/images/team/teamBackground.png";

const cardsList = teamData.map(
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

const Team: React.FC = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("reset", handleResize);
    };
  }, [windowWidth]);

  
  const responsive: ResponsiveObject[] = [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: windowWidth / 328,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: windowWidth / 290,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: windowWidth / 268,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: windowWidth / 268,
        variableWidth: true
      }
    },
  ]


  return (
    <SectionContainer
      title="Наукова рада проекту"
      titleColor="var(--task-text-color)"
      bgImg={teamBg.src}
    >
      <Slider
        slides={cardsList}
        slidesPerPage={4}
        infinite={true}
        dots={true}
        responsive={responsive}
      />
    </SectionContainer>
  );
};

export default Team;
