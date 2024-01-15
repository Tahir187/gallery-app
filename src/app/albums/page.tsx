
import cloudinary from "cloudinary";
import { AlbumCard } from "./album-card";

export type Folder = { name: string; path: string };

const AlbumPage = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <>
      <section>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Albums</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
            {folders.map((folder) => (
              <AlbumCard key={folder.path} folder={folder} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumPage;
