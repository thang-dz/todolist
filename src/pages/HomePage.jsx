import { useState,useCallback } from "react";

import TaskList from "@/components/TaskList";
import Header from "@/components/Header";
import AddTask from "@/components/AddTask";
import FilterTask from "@/components/FilterTask";

const HomePage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      status: "active",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Build Todo App",
      status: "completed",
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Deploy Project",
      status: "active",
      createdAt: new Date(),

    },
  ]);
  const [filter, setFilter] = useState("all");
  const [isopen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");


  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      status: "active",
      completedAt: null,
      createdAt: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
  };
  const comTasksCount = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const actTasksCount = tasks.filter(
    (task) => task.status === "active"
  ).length;

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
            ...task,
            status:
              task.status === "completed"
                ? "active"
                : "completed",
            completedAt:
              task.status === "completed"
                ? null
                : new Date(),
          }
          : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const handleTaskChanged = useCallback((id, updatedTask) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    )
  );
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white overflow-hidden flex items-center justify-start flex-col p-6 gap-6">
      <Header />
      <AddTask onAddTask={handleAddTask} />
      <FilterTask filter={filter} setFilter={setFilter} sortBy={sortBy} setSortBy={setSortBy} comTasksCount={comTasksCount} actTasksCount={actTasksCount} />
      <TaskList
        tasks={tasks} 
        filter={filter}
        onToggle={handleToggle}
        onDelete={handleDelete}
        sortBy={sortBy}
        onUpdate={handleTaskChanged}
      />


    </div>
  );
};

export default HomePage;
