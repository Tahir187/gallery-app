"use client";

import Download from "@/components/icons/download";
import Heart from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import FullHeart from "@/components/icons/full-heart";

const CloudinaryImage = (props: any & {imageData:SearchResult; path: string}) => {
  const [transition, startTransition] = useTransition();
  const {imageData} = props;
  const isFavorited = imageData.tags.includes('favorite');

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id}/>
      {isFavorited?
       <FullHeart
       onClick={() => {
         startTransition(() => {
           setAsFavoriteAction(imageData.public_id, false, props.path);
         });
       }}
       className="absolute top-2 right-2 text-white fill-current cursor-pointer hover:text-white text-red-500"
     />
      :
      <Heart
        onClick={() => {
          startTransition(() => {
            setAsFavoriteAction(imageData.public_id, true, props.path);
          });
        }}
        className="absolute top-2 right-2 text-white fill-current cursor-pointer hover:text-red-500"
      />
    }
      <Download className="absolute top-2 left-2 text-white fill-current cursor-pointer" />
    </div>
  );
};

export default CloudinaryImage;
