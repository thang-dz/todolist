import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Calendar,
  CheckCircle2,
  Circle,
  SquarePen,
  Trash2,
  Angry,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const TaskCard = ({
  task,
  onToggle,
  onDelete,
  onUpdate,
  onConfirm,
  confirm,
  setConfirm,
  delCon,
  setDelCon,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [update, setUpdate] = useState(task.title || "");

  return (
    <Card className="p-4 bg-gradient-card bg-teal-400 border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group">
      <div className="flex items-center gap-2 sm:gap-4">
        <Popover open={confirm === task.id}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              onClick={() => onToggle(task.id)}
              className={cn(
                "flex-shrink-0 size-8 rounded-full transition-all duration-200",
                task.status === "completed"
                  ? "text-lime-300 hover:text-lime-400"
                  : "text-muted-foreground hover:text-primary",
              )}
            >
              {task.status === "completed" ? (
                <CheckCircle2 className="size-5" />
              ) : (
                <Circle className="size-5" />
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-88 sm:w-120 ml-10 sm:ml-100 p-5 flex flex-col ">
            <p className="text-sm  sm:text-base  mb-3 flex items-center gap-2">
              Are you sure you have completed this task ?
              <Angry className="bg-red-300 text-red-500" />
            </p>

            <div className="flex gap-2 justify-end">
              <Button
                size="sm"
                variant="outline "
                onClick={() => setConfirm(null)}
                className="text-sm"
              >
                Yes, I done
              </Button>

              <Button
                size="sm"
                onClick={() => onConfirm(task.id)}
                className="text-sm"
              >
                No, I haven't done
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex-1">
          {isEditing ? (
            <Input
              placeholder="Update task title"
              className="bg-white"
              type="text"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onUpdate(task.id, { title: update });
                  setIsEditing(false);
                }
              }}
              onBlur={() => {
                onUpdate(task.id, { title: update });
                setIsEditing(false);
              }}
              autoFocus
            />
          ) : (
            <p className="text-sm font-medium text-foreground">{task.title}</p>
          )}
          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-4 sm:mt-1">
            {task.createdAt && (
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="size-3 text-muted-foreground" />
                {new Date(task.createdAt).toLocaleDateString()} -
                {new Date(task.createdAt).toLocaleTimeString()}
              </p>
            )}

            {task.status === "completed" && task.completedAt && (
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="size-3 text-muted-foreground" />
                {new Date(task.completedAt).toLocaleDateString()} -
                {new Date(task.completedAt).toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>
        <div className="flex  items-center sm:gap-2  sm:opacity-1 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            onClick={() => {
              onUpdate(task.id, { title: update });
              setIsEditing(true);
            }}
            variant="ghost"
            className="p-0 hover:text-blue-600"
          >
            <SquarePen className="size-4" />
          </Button>
          <Popover open={delCon === task.id}>
            <PopoverTrigger asChild>
              <Button
                onClick={() => setDelCon(task.id)}
                variant="ghost"
                className="p-0  hover:text-red-600"
              >
                <Trash2 className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-5 flex flex-col gap-3">
              <p className="text-sm flex items-center gap-2">
                Are you sure you want to delete this task?                
              </p>

              <div className="flex justify-end gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setDelCon(null)}
                >
                  Cancel
                </Button>

                <Button
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => {
                    onDelete(task.id);
                    setConfirm(null);
                  }}
                >
                  Delete
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
