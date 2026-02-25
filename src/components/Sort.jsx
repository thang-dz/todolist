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
                <Button variant="ghost">
                    <ArrowDownUp className="size-5 mr-2 inline-block" />
                    Sort: {sortBy}
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-40 p-2 space-y-1">
                <Button
                    variant={sortBy === "a-z" ? "default" : "ghost"}
                    className="w-full justify-start capitalize"
                    onClick={() => setSortBy("a-z")}
                >
                    A - Z
                </Button>

                <Button
                    variant={sortBy === "z-a" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSortBy("z-a")}
                >
                    Z - A
                </Button>
            </PopoverContent>
        </Popover>
    );
};

export default SortPopover;