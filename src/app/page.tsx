"use client"
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from "react";


export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
}

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
       <div style={{ backgroundColor: "rgb(3, 83, 82)" }} className=" rounded-sm">
        <CldUploadButton
          className='text-white text-2xl p-2'
          onUpload={(result) => {
            let res = result as UploadResult;
            setImageId(res.info.public_id);
          }}
          uploadPreset="iaeymlgr"
        />
      </div>
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  )
}
