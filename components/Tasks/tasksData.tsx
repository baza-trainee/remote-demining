import notes from "@/public/images/icons/tasks/notes.svg";
import security from "@/public/images/icons/tasks/security.svg";
import laptop from "@/public/images/icons/tasks/laptop.svg";
import calendar from "@/public/images/icons/tasks/calendar.svg";
import users from "@/public/images/icons/tasks/users.svg";
import book from "@/public/images/icons/tasks/book.svg";

interface Task {
  id: number;
  icon: string;
  text: string;
}

const tasksData: Task[] = [
  {
    id: 1,
    icon: notes,
    text: "Принципово новий підхід, що дозволяє дистанційно з використанням БПЛА проводити дослідження по виявленню локації вибухонебезпечних предметів",
  },
  {
    id: 2,
    icon: security,
    text: " Технологія заснована на методі сканування (ПЕМЗ) – зондування  теріторії разом із аналізом випромінювань аномалій  пошукових об'єктів",
  },
  {
    id: 3,
    icon: laptop,
    text: "Проведені тестові польові роботи в реальних умовах",
  },
  {
    id: 4,
    icon: calendar,
    text: " Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей ",
  },
  {
    id: 5,
    icon: users,
    text: "В Україні є необхідність скласти  карти забруднених територій та об’єктів країни",
  },
  {
    id: 6,
    icon: book,
    text: "Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей ",
  },
];

export default tasksData;
