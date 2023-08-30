import { AxiosResponse } from "axios";

import { AdminSliderData } from "@/components/AdminSlider/AdminSlider";

import api from "../api/baseQuery";
import { AdminSlider } from "../types/adminSlider";
import { ProjectsSlidersData } from "../types/ProjectsSlidersData";

const getSliders = async (): Promise<ProjectsSlidersData[] | undefined> => {
  try {
    const response: AxiosResponse<ProjectsSlidersData[]> = await api.get(
      `content/?data={"section":"slider"}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createSlider = async (slider: AdminSlider): Promise<void> => {
  try {
    await api.post("content", {
      images: slider.img,
      data: {
        section: "sliders",
        title: slider.title,
        text: slider.text,
        img_description: slider.img_description,
      },
      dataSchema: {
        section: "string",
        title: "string",
        text: "string",
        img_description: "string",
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteSlider = async (id: string): Promise<void> => {
  try {
    await api.delete(`content/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateSlider = async (slider: AdminSliderData): Promise<void> => {
  console.log(slider);
  try {
    await api.patch(`content/${slider.id}`, {
      images: slider.img ? [slider.img] : undefined,
      data: {
        section: "sliders",
        title: slider.title,
        text: slider.text,
        img_description: slider.img_description,
      },
      dataSchema: {
        section: "string",
        title: "string",
        text: "string",
        img_description: "string",
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getSliderById = async (id: string): Promise<ProjectsSlidersData> => {
  try {
    const { data }: AxiosResponse<ProjectsSlidersData> = await api.get(
      `content/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export { createSlider, deleteSlider, getSliderById, getSliders, updateSlider };
