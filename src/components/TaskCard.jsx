import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
    Calendar,
    CheckCircle2,
    Circle,
    SquarePen,
    Trash2,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils"


const TaskCard = ({ task, onToggle, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [update, setUpdate] = useState(task.title || '');

    return (
        <Card className="p-4 bg-gradient-card bg-teal-400 border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group">
            <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => onToggle(task.id)}
                    className={cn(
                        "flex-shrink-0 size-8 rounded-full transition-all duration-200",
                        task.status === "completed"
                            ? "text-success hover:text-success/80"
                            : "text-muted-foreground hover:text-primary"
                    )}>
                    {task.status === "completed" ? <CheckCircle2 className="size-5" /> : <Circle className="size-5" />}
                </Button>
                <div className="flex-1">
                    {isEditing ? (
                        <Input
                            placeholder="Update task title"
                            type="text"
                            value={update}
                            onChange={(e) => setUpdate(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    onUpdate(task.id, { title: update });
                                    setIsEditing(false);
                                }
                            }}
                        />
                    ) : (
                        <p className="text-sm font-medium text-foreground">
                            {task.title}
                        </p>
                    )

                    }
                    <div className="flex items-center gap-4 mt-1">

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
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button onClick={() => { onUpdate(task.id, { title: update }); setIsEditing(true) }} variant="ghost" className="p-0">
                        <SquarePen className="size-4" />
                    </Button>
                    <Button onClick={() => onDelete(task.id)} variant="ghost" className="p-0">
                        <Trash2 className="size-4" />
                    </Button>
                </div>
            </div>

        </Card>
    )
}




export default TaskCard;
