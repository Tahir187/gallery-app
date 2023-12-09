"use client";

import { ImageGrid } from "@/components/image-grid";
import CloudinaryImage from "../../components/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { useState, useEffect } from "react";

const FavoriteList = ({
  initialResources,
}: {
  initialResources: SearchResult[];
}) => {
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <>
      <ImageGrid
        images={resources}
        getImage={(imageData: SearchResult) => {
          return (
            <CloudinaryImage
              key={imageData.public_id}
              imageData={imageData}
              width="400"
              height="300"
              sizes="100vw"
              alt="Description of my image"
              onUnheart={(unheartedResource) => {
                setResources((currentResources) =>
                  currentResources.filter(
                    (resource) =>
                      resource.public_id != unheartedResource.public_id
                  )
                );
              }}
            />
          );
        }}
      />
    </>
  );
};

export default FavoriteList;
