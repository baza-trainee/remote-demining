"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AdminSliderData } from "@/components/AdminSlider/AdminSlider";
import AdminSliderAdd from "@/components/AdminSlider/AdminSliderAdd/AdminSliderAdd";
import { getSliderById } from "@/lib/admin/slider";

function SlidersAddPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [editedSlider, setEditedSlider] = useState<AdminSliderData>({
    id: "",
    img: "",
    title: "",
    text: "",
    img_description: "",
  });

  useEffect(() => {
    fetchSliderData();
    console.log(editedSlider);
  }, [id]);

  const fetchSliderData = async () => {
    if (id) {
      try {
        const data = await getSliderById(id);
        setEditedSlider({
          id: data._id,
          img: data.images[0],
          title: data.data.title,
          text: data.data.text,
          img_description: data.data.img_description,
        });
      } catch (e) {
        toast.error("Упс..., щось пішло не так!");
        console.error(e);
      }
    }
  };

  return (
    <>
      <AdminSliderAdd sliderData={editedSlider} />
    </>
  );
}
export default SlidersAddPage;
