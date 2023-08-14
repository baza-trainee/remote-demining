import { StaticImageData } from "next/image";

import droneControl from "@/public/images/projects/drone-control.jpg";
import office from "@/public/images/projects/office.jpg";
import robot from "@/public/images/projects/robot.jpg";

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
    title: "Унікальні технології",
    text: "Україна зацікавлена в розвитку технологій для власного виживання, відбудовування і розвитку. Наразі ми в стані впевнено зайняти перше місце в світі по унікальності технологій, випробуваних в польових умовах.",
  },
  {
    id: 2,
    img: robot,
    title: "Бригади розміновування",
    text: "Більш ніж 500 бригад саперів, які щоденно ризикують життям, знадобиться, щоб розмінувати забруднені території. Ми пропонуємо розмінування без участі людини - виключно дистанційно.",
  },
  {
    id: 3,
    img: droneControl,
    title: "Вибухонебезпечні предмети",
    text: "Наша методологія дозволяє визначити і знешкодити міни, які внаслідок часу опустились в землю і не помітні наочно. Шукати їх вручну вкрай небезпечно.",
  },
  {
    id: 3,
    img: robot,
    title: "Title",
    text: "Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей та правил безпеки. Наша команда експертів завжди готова надати вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами.",
  },
];

export default projectsData;
