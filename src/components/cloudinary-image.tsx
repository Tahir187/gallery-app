"use client";

import Download from "@/components/icons/download";
import Heart from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavoriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import FullHeart from "@/components/icons/full-heart";
import { ImageMenu } from "./image-menu";
import { DownloadImage } from "./download-image";

const CloudinaryImage = (
  props: {
    imageData: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) => {
  const [transition, startTransition] = useTransition();
  const { imageData, onUnheart } = props;
  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );


  const handleDownload = async () => {
    try {
      const downloadUrl = await fetch(
        `https://res.cloudinary.com/dlxpb8ef7/image/upload/${imageData.public_id}.jpg`
      );
      await DownloadImage(downloadUrl, `${imageData.public_id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative hover:scale-110 hover:p-1">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            onUnheart?.(imageData);
            setIsFavorited(false);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, false);
            });
          }}
          className="absolute top-2 left-2 cursor-pointer hover:text-white text-red-500"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, true);
            });
          }}
          className="absolute top-2 left-2 text-white fill-current cursor-pointer hover:text-red-500"
        />
      )}
      <Download
        onClick={handleDownload}
        className="absolute bottom-[4%] right-2 text-white fill-current cursor-pointer"
      />
      <ImageMenu image={imageData} />
    </div>
  );
};

export default CloudinaryImage;
