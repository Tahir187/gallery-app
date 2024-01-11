import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <header className="sticky top-0 z-50  sm:w-full">
      <nav style={{ backgroundColor: "rgb(3, 83, 82)" }}>
        <div className="flex h-16 items-center px-4 container mx-auto text-white">
            <p className="text-2xl">Pics Pack</p>
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default page;
