import SectionContainer from "../SectionContainer/SectionContainer";
import NewsList from "./NewsList/NewsList";

const NewsSection: React.FC = () => {
  return (
    <SectionContainer>
      <NewsList items={[]} />
    </SectionContainer>
  );
};

export default NewsSection;
