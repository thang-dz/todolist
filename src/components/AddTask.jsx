import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Plus  } from "lucide-react";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    onAddTask(title);
    setTitle(""); 
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Card className="p-2 sm:p-6 border-0 bg-white rounded-lg shadow-lg border-2 border-amber-600 mt-8 sm:mt-20">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Input
          placeholder="Enter a new task"
          className=" w-80"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <Button
          onClick={handleSubmit}
          className="ml-4 text-sm sm:text-base bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 transition-colors duration-200 flex items-center"
        >
          <Plus className=" size-4 sm:size-5 " />
          Add Task
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;