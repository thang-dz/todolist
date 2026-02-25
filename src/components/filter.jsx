import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { filterType } from "@/lib/data";

const FilterPopover = ({ filter, setFilter }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="bg-gradient-to-r from-sky-600 via-cyan-500 to-sky-400">
          <Filter className="size-5  inline-block " />
          {filterType[filter]}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-2 ml-10 space-y-1">
        {Object.keys(filterType).map((key) => (
          <Button
            key={key}
            variant={filter === key ? "default" : "ghost"}
            className="capitalize bg-gradient-to-r from-sky-400 via-cyan-500 to-sky-600"
            size="sm"
            onClick={() => setFilter(key)}
          >
            <Filter className="size-4 " />
            {filterType[key]}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};
export default FilterPopover;
