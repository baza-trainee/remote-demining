import email from "@/public/images/icons/contacts/email.svg";
import map from "@/public/images/icons/contacts/map.svg";
import phone from "@/public/images/icons/contacts/phone.svg";

interface IContactInfo {
  id: string;
  subheading: string;
  icon: string;
  text: string;
}

const data: IContactInfo[] = [
  {
    id: "1",
    subheading: "Наше розташування",
    icon: map.src,
    text: "вул. Олеся Гончара 55 б, Київ, Україна 01601",
  },
  {
    id: "2",
    subheading: "Телефонуйте нам",
    icon: phone.src,
    text: "+38 (044) 209 5302 ",
  },
  {
    id: "3",
    subheading: "Напишіть нам",
    icon: email.src,
    text: "2021snp@ukr.net",
  },
];

export default data;
