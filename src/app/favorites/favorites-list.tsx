"use client"

import CloudinaryImage from "../gallery/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { useState, useEffect } from "react";

const FavoriteList = ({initialResources}: {initialResources: SearchResult[]}) => {
    const [resources, setResources] = useState(initialResources)
    useEffect(()=>{
        setResources(initialResources);
    },[initialResources])
  return (
        <div className="grid grid-cols-4 gap-4 pb-5">
          {resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
            //   src={result.public_id}
            //   publicId={result.public_id}
              imageData={result}
              width="400"
              height="300"
              sizes="100vw"
              alt="Description of my image"
              onUnheart = {(unheartedResource) =>{
                setResources((currentResources)=> currentResources.filter((resource) => resource.public_id != unheartedResource.public_id)
                );
              }}
            />
          ))}
        </div>
  );
};

export default FavoriteList;
