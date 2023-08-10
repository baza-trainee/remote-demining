import { StaticImageData } from "next/image";

import office from "@/public/images/projects/office.jpg";
import robot from "@/public/images/projects/robot.jpg";
import robotHand from "@/public/images/projects/robot-hand.jpg";

interface Project {
  id: number;
  img: StaticImageData;
  title: string;
  text: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    img: office,
    title: "Title",
    text: "Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами.",
  },
  {
    id: 2,
    img: robot,
    title: "Title",
    text: "Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами.",
  },
  {
    id: 3,
    img: robotHand,
    title: "Title",
    text: "Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами.",
  },
  {
    id: 3,
    img: robotHand,
    title: "Title",
    text: "Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами.",
  },
];

export default projectsData;
