"use client";
import Image from "next/image";
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import Cropper from "react-easy-crop";
import { Area, Point } from "react-easy-crop/types";
import { useToggle } from "usehooks-ts";

import Button from "@/components/Button/Button";
import addImg from "@/public/images/admin/add.svg";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import Modal from "../Modal/Modal";

import ImagePreview from "./ImagePreview/ImagePreview";
import { getCroppedImg } from "./utils/getCroppedImg";

import styles from "./AddImage.module.css";

interface AddImageProps {
  imgWidth?: number;
  imgHeight?: number;
  title: string;
  setImage: Dispatch<SetStateAction<string | null>>;
  toggleSuccessModal: () => void;
}

const AddImage: FC<AddImageProps> = ({
  imgWidth,
  imgHeight,
  title = "Додати зображення",
  setImage,
  toggleSuccessModal,
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imgSrc, setImgSrc] = useState("");
  const [isDragActive, setIsDragActive] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [typeError, setTypeError] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = () => {
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      setImgSrc(URL.createObjectURL(files[0]));
    }
  };

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filename = e.target.files[0].name;

      const extension = filename.split(".").pop();

      const allowedExtensions = ["jpg", "jpeg", "png", "webp", "svg"];

      //Check file size
      if (e.target.files[0].size > 2 * 1000 * 1024) {
        setSizeError(true);
        return false;
      } else {
        setSizeError(false);
      }

      //Check file type
      if (allowedExtensions.includes(extension!)) {
        const reader = new FileReader();
        reader.addEventListener("load", () =>
          setImgSrc(reader.result?.toString() || "")
        );
        reader.readAsDataURL(e.target.files[0]);
      } else {
        setTypeError(true);
      }
    }
  };

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const zoomValue = parseFloat(e.target.value);
    setZoom(zoomValue);
  };

  const onMediaLoad = (mediaSize: { width: number; height: number }) => {
    setImgSize({ width: mediaSize.width, height: mediaSize.height });
  };

  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setImgSrc("");
      }
    },
    [setImgSrc]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleEscKey]);

  const cropImage = useCallback(async () => {
    try {
      if (imgSrc && croppedAreaPixels) {
        const croppedImage = await getCroppedImg(imgSrc, croppedAreaPixels);
        setImage(croppedImage?.base64Image!);
        setCroppedImage(croppedImage?.blobUrl!);
      }
    } catch (e) {
      console.error(e);
    }
  }, [imgSrc, croppedAreaPixels]);

  return (
    <>
      <label
        className={`${styles.wrapper} ${isDragActive ? styles.dragActive : ""}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        htmlFor="images"
      >
        <input
          className={styles.input}
          accept=".jpg, .webP, .png, .svg , .jpeg"
          placeholder="img"
          onChange={handleChange}
          type="file"
          id="images"
        />

        <div>
          <Image
            className={styles.icon}
            src={addImg.src}
            width={24}
            height={24}
            alt="add icon"
          />
          <span className={styles.title}>{title}</span>
        </div>
      </label>
      {sizeError && <p className={styles.error}>Файл повинен бути менше 2MB</p>}
      {typeError && (
        <p className={styles.error}>Допустимий формат PNG,JPEG,SVG,webP</p>
      )}
      {imgSrc && (
        <>
          <div className={styles.inner}>
            <Cropper
              classes={{ containerClassName: styles.cropContainer }}
              image={imgSrc}
              crop={crop}
              zoom={zoom}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              onMediaLoaded={onMediaLoad}
              cropSize={{
                width: imgWidth ? imgWidth : imgSize.width,
                height: imgHeight ? imgHeight : imgSize.height,
              }}
            />
          </div>
          <div className={styles.controls}>
            <span>Приблизити</span>
            <input
              value={zoom}
              type="range"
              min={1}
              max={3}
              step={0.1}
              onChange={handleZoomChange}
            />

            <Button type="button" onClick={cropImage}>
              Обрізати
            </Button>
          </div>
          {croppedImage && (
            <ImagePreview
              imgWidth={
                imgWidth ? imgWidth : imgSize.width > 800 ? 800 : imgSize.width
              }
              imgHeight={
                imgHeight
                  ? imgHeight
                  : imgSize.height > 600
                  ? 600
                  : imgSize.height
              }
              img={croppedImage}
              setCroppedImage={setCroppedImage}
              setImgSrc={setImgSrc}
              toggleSuccessModal={toggleSuccessModal}
            />
          )}

        </>
      )}
    </>
  );
};

export default AddImage;
