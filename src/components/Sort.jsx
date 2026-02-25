import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";

const SortPopover = ({ sortBy, setSortBy }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="bg-gradient-to-r from-sky-600 via-cyan-500 to-sky-400">
          <ArrowDownUp className="size-5  inline-block" />
          {sortBy}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-25 p-2 ml-10 space-y-1">
        <Button
          variant={sortBy === "a-z" ? "default" : "ghost"}
          className=" justify-start capitalize bg-gradient-to-r from-sky-400 via-cyan-500 to-sky-600"
          onClick={() => setSortBy("a-z")}
        >
          <ArrowDownUp className="size-5  inline-block" />A - Z
        </Button>

        <Button
          variant={sortBy === "z-a" ? "default" : "ghost"}
          className=" justify-start bg-gradient-to-r from-sky-400 via-cyan-500 to-sky-600 capitalize"
          onClick={() => setSortBy("z-a")}
        >
          <ArrowDownUp className="size-5  inline-block" />Z - A
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default SortPopover;
