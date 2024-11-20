"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Edit2,
  Trash2,
  Clock,
  Sun,
  Moon,
} from "lucide-react";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [tasks, setTasks] = useState<Array<{ text: string; time: string }>>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTask = () => {
    if (task.trim() !== "") {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = { text: task, time };
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, { text: task, time }]);
      }
      setTask("");
      setTime("");
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index: number) => {
    setTask(tasks[index].text);
    setTime(tasks[index].time);
    setEditIndex(index);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-700 to-violet-600"
          : "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600"
      }`}
    >
      <header className="bg-white/80 backdrop-blur-sm shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">ToDo App</div>
          <div className="flex space-x-4 items-center">
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center text-purple-600 mb-4">
              My ToDo App
            </h1>
            <div className="space-y-2 mb-4">
              <input
                type="text"
                placeholder="Enter a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex space-x-2">
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={addTask}
                  className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                >
                  {editIndex !== null ? "Update" : "Add"}
                </button>
              </div>
            </div>
            <ul className="space-y-2">
              {tasks.map((t, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg text-white shadow-md"
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>{t.text}</span>
                    {t.time && (
                      <span className="text-xs text-gray-200 flex items-center">
                        <Clock size={12} className="mr-1" />
                        {t.time}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => editTask(index)}
                      className="p-1 text-white hover:text-yellow-300 focus:outline-none transition duration-300"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="p-1 text-white hover:text-red-300 focus:outline-none transition duration-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm shadow-md mt-8 py-4">
        <div className="container mx-auto text-center text-gray-900">
          © 2024 Uzma Azam. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
