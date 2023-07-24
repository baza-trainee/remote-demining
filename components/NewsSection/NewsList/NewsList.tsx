import NewsItem from "../NewsItem/NewsItem";

interface NewsList {
  items: {
    id: number;
    img: any;
    text: string;
  }[];
}

const NewsList: React.FC<NewsList> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <NewsItem key={item.id} img={item.img} text={item.text} />
      ))}
    </ul>
  );
};

export default NewsList;
