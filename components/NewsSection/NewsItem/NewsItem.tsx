import CustomLink from "@/components/CustomLink/CustomLink";

interface NewsItem {
  text: string;
  img: any;
}

const NewsItem: React.FC<NewsItem> = ({ img, text }) => {
  return <li></li>;
};

export default NewsItem;
