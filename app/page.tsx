"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            My ToDo List
          </h1>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              placeholder="Enter a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
              className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTask}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {tasks.map((t, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg relative pl-8"
              >
                <span className="text-gray-800 relative">
                  <span className="absolute left-[-1.5rem] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></span>
                  {t}
                </span>
                <button
                  onClick={() => deleteTask(index)}
                  className="px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
