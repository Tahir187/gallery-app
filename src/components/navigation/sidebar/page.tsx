import Folder from "@/components/icons/folder";
import Gallery from "@/components/icons/gallery";
import Heart from "@/components/icons/heart";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="pb-12 bg-gray-300 w-1/6">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              className="w-full justify-start flex gap-2"
            >
              <Gallery/>
              Gallery
            </Button>
            <Button variant="ghost" className="w-full justify-start flex gap-2">
              <Folder />
              Albums
            </Button>
            <Button variant="ghost" className="w-full justify-start flex gap-2">
              <Heart />
              Favorites
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
