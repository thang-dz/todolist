import { useMemo } from "react";
import TaskCard from "./TaskCard";

const TaskList = ({
  tasks = [],
  filter = "all",
  sortBy = "",
  onToggle,
  onDelete,
  onUpdate,
}) => {
  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    if (filter !== "all") {
      result = result.filter((task) => task.status === filter);
    }

    result.sort((a, b) => {
      switch (sortBy) {     
        case "a-z":
          return a.title.localeCompare(b.title);

        case "z-a":
          return b.title.localeCompare(a.title);

        default:
          return 0;
      }
    });

    return result;
  }, [tasks, filter, sortBy]);

  return (
    <div className="space-y-3 w-full max-w-xl mt-20 bg-yellow-100 rounded-lg p-4">
      {filteredTasks.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          No tasks found.
        </p>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;