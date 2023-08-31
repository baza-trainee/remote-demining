import { AxiosResponse } from "axios";

import api from "../api/baseQuery";
import { ProjectsCardsData } from "../types/ProjectsCardDataType";

export const fetchProjectsCards = async (): Promise<ProjectsCardsData[] | undefined> => {
  try {
    const response: AxiosResponse<ProjectsCardsData[]> = await api.get(
      `content/?data={"section":"cards"}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};