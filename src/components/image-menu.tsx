import { FolderPlus, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "./icons/menu";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";

export function ImageMenu({image}:{image: SearchResult}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2 cursor-pointer">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0 text-white fill-current">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-38">
          <DropdownMenuItem asChild >
            <AddToAlbumDialog image={image} onClose={()=> setOpen(false)}/>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
              <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
                <Pencil className="mr-2 w-5 h-5" />
                Edit
              </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
