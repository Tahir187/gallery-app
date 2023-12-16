"use client"
import { ImageGrid } from "@/components/image-grid";
import CloudinaryImage from "../../components/cloudinary-image";
import { SearchResult } from "./page";

const GalleryGrid = ({images}:{images: SearchResult[]}) => {
  return (
    <section>
        <ImageGrid
          images={images}
          getImage={(imageData: SearchResult) => {
            return (
              <CloudinaryImage
                key={imageData.public_id}
                imageData={imageData}
                width="400"
                height="300"
                alt="Description of my image"
              />
            );
          }}
        />
    </section>
  );
};

export default GalleryGrid;
