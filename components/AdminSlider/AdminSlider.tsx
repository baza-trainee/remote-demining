"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getSliders } from "@/lib/admin/slider";
import pen from "@/public/images/adminInputs/pen.svg";

import AdminWrapper from "../AdminWrapper/AdminWrapper";
import Breadcrumb, { CrumbItem } from "../Breadcrumb/Breadcrumb";

import AdminSlidersList from "./AdminSlidersList/AdminSlidersList";

import styles from "./AdminSlider.module.css";

export interface AdminSliderData {
  id: string;
  img?: string;
  title: string;
  text: string;
}

const items: CrumbItem[] = [{ label: "Слайдер", path: "/admin/slider" }];

const AdminSlider = () => {
  const [sliderData, setSliderData] = useState<AdminSliderData[]>();
  const router = useRouter();
  useEffect(() => {
    fetchSliderData();
  }, []);

  const handleEditSlider = (slider: AdminSliderData) => {
    router.push(`/admin/slider/edit?id=${slider.id}`);
  };
  const handleDeleteSlider = async () => {
    try {
      await fetchSliderData();
    } catch (error) {
      console.log(error);
      toast.error("Упс..., щось пішло не так!");
    }
  };
  const fetchSliderData = async () => {
    try {
      const data = await getSliders();
      // console.log("data", data);
      const slidersData = data?.map((slider): AdminSliderData => {
        return {
          id: slider._id,
          img: slider.images[0],
          title: slider.data.title,
          text: slider.data.text,
        };
      });
      setSliderData(slidersData);
    } catch (error) {
      console.log(error);
      toast.error("Упс..., щось пішло не так!");
    }
  };
  return (
    <div>
      <div className={styles.heading_container}>
        <Breadcrumb items={items} />
        <Image src={pen} alt="edit_img" width={27} height={27} />
      </div>
      <AdminWrapper size="bigWrapper">
        <AdminSlidersList
          sliderData={sliderData}
          handleEditSlider={handleEditSlider}
          handleDeleteSlider={handleDeleteSlider}
        />
      </AdminWrapper>
    </div>
  );
};

export default AdminSlider;
