// filepath: /c:/Users/TUYET NHI/Documents/GitHub/remod-418-build-a-simple-to-do-list-app/app/todo/component/TaskList.tsx
"use client";

import { useState, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  AlertTriangle,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Minus,
  Edit,
  Trash,
  SortAsc,
  SortDesc,
} from "lucide-react";
import { useTheme } from '../../context/theme-context'; // Adjust import based on your structure
import './TaskList.css';

type Task = {
  id: number;
  name: string;
  priority: "Urgent" | "High" | "Medium" | "Low" | "No priority";
  dueDate: string;
  description: string;
};

const priorityIcons: Record<Task["priority"], JSX.Element> = {
  Urgent: <AlertTriangle className="text-red-500 w-5 h-5" />,
  High: <SignalHigh className="text-orange-500 w-5 h-5" />,
  Medium: <SignalMedium className="text-blue-500 w-5 h-5" />,
  Low: <SignalLow className="text-green-500 w-5 h-5" />,
  "No priority": <Minus className="text-gray-500 w-5 h-5" />,
};

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("No priority");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Task;
    direction: "ascending" | "descending";
  } | null>(null);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const { theme } = useTheme(); // Get the current theme

  const addTask = () => {
    if (!taskName.trim() || !dueDate.trim()) return;

    const newTask = {
      id: editingTask ? editingTask.id : Date.now(),
      name: taskName,
      priority,
      dueDate,
      description,
    };

    if (editingTask) {
      setTasks(tasks.map((task) => (task.id === editingTask.id ? newTask : task)));
      setEditingTask(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setTaskName("");
    setPriority("No priority");
    setDueDate("");
    setDescription("");
    setIsAddTaskOpen(false); // Close the add task panel
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (task: Task) => {
    setEditingTask(task);
    setTaskName(task.name);
    setPriority(task.priority);
    setDueDate(task.dueDate);
    setDescription(task.description);
    setIsAddTaskOpen(true); // Open the add task panel
  };

  const priorityOrder: Record<Task["priority"], number> = {
    Urgent: 1,
    High: 2,
    Medium: 3,
    Low: 4,
    "No priority": 5,
  };

  const sortedTasks = [...tasks];
  if (sortConfig !== null) {
    sortedTasks.sort((a, b) => {
      if (sortConfig.key === "priority") {
        return sortConfig.direction === "ascending"
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      }
    });
  }

  const requestSort = (key: keyof Task) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Task List */}
        <div className="col-span-3 space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl text-center font-semibold mb-4">TASK LIST</h2>
            <Button onClick={() => setIsAddTaskOpen(true)}>Add New Task</Button>
          </div>
          <table className="min-w-full bg-white dark:bg-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left" style={{ width: '5%' }}>No.</th>
                <th className="py-2 px-4 border-b text-left" style={{ width: '15%' }}>Task</th>
                <th
                  className="py-2 px-4 border-b text-left cursor-pointer"
                  style={{ width: '5%' }}
                  onClick={() => requestSort("priority")}
                >
                  Priority
                  {sortConfig?.key === "priority" &&
                    (sortConfig.direction === "ascending" ? <SortAsc /> : <SortDesc />)}
                </th>
                <th
                  className="py-2 px-4 border-b text-left cursor-pointer"
                  style={{ width: '15%' }}
                  onClick={() => requestSort("dueDate")}
                >
                  Due Date
                  {sortConfig?.key === "dueDate" &&
                    (sortConfig.direction === "ascending" ? <SortAsc /> : <SortDesc />)}
                </th>
                <th className="py-2 px-4 border-b text-left" style={{ width: '50%' }}>Description</th>
                <th className="py-2 px-4 border-b text-left" style={{ width: '5%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task, index) => (
                <tr key={task.id}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{task.name}</td>
                  <td className="py-2 px-4 border-b">{priorityIcons[task.priority]}</td>
                  <td className="py-2 px-4 border-b">{task.dueDate}</td>
                  <td className="py-2 px-4 border-b">{task.description}</td>
                  <td className="py-2 px-4 border-b items-center">
                    <Button
                      onClick={() => editTask(task)}
                      className="p-1 bg-white"
                    >
                      <Edit className="h-5 w-5 text-blue-500" />
                    </Button>
                    <Button
                      onClick={() => deleteTask(task.id)}
                      variant="destructive"
                      className="p-1 bg-white"
                    >
                      <Trash className="h-5 w-5 text-red-500" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Task Panel */}
      <div className={`add-task-container ${isAddTaskOpen ? 'open' : ''}`}>
        <div className="add-task-header">
          <h2 className="text-3xl font-semibold mb-4 text-center">ADD NEW TASK</h2>
          <Button onClick={() => setIsAddTaskOpen(false)}>Close</Button>
        </div>
        <div className="add-task-content">
          <Input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            className="mb-2"
          />
          <div className="mb-2">
            <Select onValueChange={(value: string) => setPriority(value as Task["priority"])}>
              <SelectTrigger>{priorityIcons[priority]} {priority}</SelectTrigger>
              <SelectContent>
                <SelectItem value="No priority">
                  <Minus className="inline-block mr-2 w-4 h-4 text-gray-500" />
                  No priority
                </SelectItem>
                <SelectItem value="Urgent">
                  <AlertTriangle className="inline-block mr-2 w-4 h-4 text-red-500" />
                  Urgent
                </SelectItem>
                <SelectItem value="High">
                  <SignalHigh className="inline-block mr-2 w-4 h-4 text-orange-500" />
                  High
                </SelectItem>
                <SelectItem value="Medium">
                  <SignalMedium className="inline-block mr-2 w-4 h-4 text-blue-500" />
                  Medium
                </SelectItem>
                <SelectItem value="Low">
                  <SignalLow className="inline-block mr-2 w-4 h-4 text-green-500" />
                  Low
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={`mb-2 todo-daypicker ${theme}`}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className={`w-full h-24 p-2 rounded-md resize-none todo-textarea ${theme}`}
          />
          <div className="flex justify-end">
            <Button onClick={addTask}>
              {editingTask ? "Update Task" : "Add Task"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}