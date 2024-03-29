import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import GalleryGrid from "./gallery-grid";
import SearchForm from "./search-form";

export type SearchResult = {
  public_id: string;
  tags: string[];
};
const page = async ({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) => {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <SearchForm initialSearch={search} />
        <GalleryGrid images={results.resources} />
      </div>
    </section>
  );
};

export default page;
