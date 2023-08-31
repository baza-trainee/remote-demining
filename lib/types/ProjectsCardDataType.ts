export interface ProjectsCardsData {
  images: [string];
  data: {
    section: string;
    title: string;
    text: string;
    img_description: string;
  };
  dataSchema: {
    section: string;
    id: number;
    title: string;
    text: string;
    img_description: string;
  };
  _id: string;
}