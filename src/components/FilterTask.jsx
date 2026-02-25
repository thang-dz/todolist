import { Badge } from "./ui/badge";
import { filterType } from "@/lib/data";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";
import SortPopover from "./Sort";
import FilterPopover from "./filter";

const FilterTask = ({
  comTasksCount = 0,
  actTasksCount = 0,
  filter = "all",
  setFilter,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex  sm:items-center sm:items-start gap-4  justify-between w-80 sm:w-130">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 ">
        <Badge variant="outline" className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 text-white border-amber-500 ">
          {actTasksCount} {filterType.active}
        </Badge>

        <Badge variant="outline" className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 text-white border-amber-500 ">
          {comTasksCount} {filterType.completed}
        </Badge>
      </div>

      <div className="flex flex-row gap-2  sm:items-center">      
        <FilterPopover filter={filter} setFilter={setFilter} />
        <SortPopover sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </div>
  );
};

export default FilterTask;
