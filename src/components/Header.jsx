import { PencilLine } from "lucide-react";
const Header = () => {
  return (
    <div className="space-y-3 text-center mt-8 sm:mt-12">
      <div className="flex gap-5">
        <PencilLine className="size-10 sm:size-15 text-amber-700" />
        <h1 className="uppercase italic text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
          TO DO LIST
        </h1>
      </div>

      <p className="text-gray-600">Organize your tasks efficiently</p>
    </div>
  );
};
export default Header;
