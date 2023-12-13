import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import albumIcon from "../../../../public/album.png";

const page = () => {
  return (
    <div>
      <nav className="border-b" style={{ backgroundColor: "rgb(3, 83, 82)" }}>
        <div className="flex h-16 items-center px-4 container mx-auto text-white">
          <div className="flex gap-1">
            <Image
              src={albumIcon}
              width="25"
              height="25"
              alt="icon of this photo album"
              className="bg-white"
            />
            <p className="text-2xl">Pics Pack</p>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default page;
