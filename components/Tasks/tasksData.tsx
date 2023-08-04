import book from "@/public/images/icons/tasks/book.svg";
import calendar from "@/public/images/icons/tasks/calendar.svg";
import laptop from "@/public/images/icons/tasks/laptop.svg";
import notes from "@/public/images/icons/tasks/notes.svg";
import security from "@/public/images/icons/tasks/security.svg";
import users from "@/public/images/icons/tasks/users.svg";

interface Task {
  id: number;
  icon: string;
  text: string;
}

const tasksData: Task[] = [
  {
    id: 1,
    icon: notes,
    text: "Впровадження принципово нового підходу, що дозволяє дистанційно, з використанням БПЛА, проводити дослідження по виявленню локацій вибухонебезпечних предметів.",
  },
  {
    id: 2,
    icon: security,
    text: "Використання технологій, заснованих на методі сканування (ПЕМЗ) – зондування території разом із аналізом випромінювань аномалій пошукових об'єктів.",
  },
  {
    id: 3,
    icon: laptop,
    text: "Проведення тестових польових робіт в реальних умовах.",
  },
  {
    id: 4,
    icon: calendar,
    text: "Очищення території України, оскільки 30% території країни наразі забруднено мінами і вибухонебезпечними предметами.",
  },
  {
    id: 5,
    icon: users,
    text: "Складання карт забруднених територій та об’єктів в Україні.",
  },
  {
    id: 6,
    icon: book,
    text: "Впровадження новітніх методів розмінування, так як при сьогоднішніх технологіях на розмінування території України знадобиться більше 750 років.",
  },
];

export default tasksData;
