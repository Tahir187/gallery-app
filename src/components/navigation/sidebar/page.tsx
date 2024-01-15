import FolderIcon from "@/components/icons/folderIcon";
import Gallery from "@/components/icons/gallery";
import Heart from "@/components/icons/heart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import cloudinary from "cloudinary";
import { Folder } from "@/app/albums/page";

const page = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <div className="pb-12 bg-gray-300 w-1/7 h-screen sticky top-0 ">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            {/* Gallery */}
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href="/gallery">
                <Gallery />
                <p className="hidden sm:inline">Gallery</p>
              </Link>
            </Button>
            {/* Albums */}
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href="/albums">
                <FolderIcon />
                <p className="hidden sm:inline">Albums</p>
              </Link>
            </Button>
            {/* items of album */}
            {folders.map((folder) => (
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start flex gap-2"
                key={folder.name}
              >
                <Link className="pl-8  hidden sm:flex" href={`/albums/${folder.path}`}>{folder.name}</Link>
              </Button>
            ))}
            {/* favorites */}
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href="/favorites">
                <Heart />
                <p className="hidden sm:inline">Favorites</p>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
