import { Badge } from "./ui/badge";
import { filterType } from "@/lib/data";
import { Button } from "./ui/button";
import { Filter} from "lucide-react";
import SortPopover from "./Sort";


const FilterTask = ({
  comTasksCount = 0,
  actTasksCount = 0,
  filter = "all",
  setFilter,
  sortBy,
  setSortBy,
}) => {
  
  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">

      <div className="flex gap-3">
        <Badge variant="secondary">
          {actTasksCount} {filterType.active}
        </Badge>

        <Badge variant="secondary">
          {comTasksCount} {filterType.completed}
        </Badge>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        {Object.keys(filterType).map((key) => (
          <Button
            key={key}
            variant={filter === key ? "default" : "ghost"}
            className="capitalize"
            size="sm"
            onClick={() => setFilter(key)}
          >
            <Filter className="size-4 mr-2" />
            {filterType[key]}
          </Button>
        ))}
        {/* <button className="ml-2 text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center">
          <ArrowDownUp className="size-5 mr-2 inline-block" />
          Sort
        </button> */}
        <SortPopover sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </div>
  );
};

export default FilterTask;