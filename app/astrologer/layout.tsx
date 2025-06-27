"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import AstrologerSidebar from "@/components/astrologer/Sidebar";

const AstrologerLayout = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <AstrologerSidebar />
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center">
          <div className="text-lg font-semibold ml-10 md:ml-32 w-full text-center">Astrologer Dashboard</div>
          <button
            onClick={toggleDarkMode}
            className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
          >
            {isDarkMode ? (
              <Sun className="text-gray-600 dark:text-gray-300" size={20} />
            ) : (
              <Moon className="text-gray-600" size={20} />
            )}
          </button>
        </header>
        {/* Page Content */}
        <main className=" md:pl-72 flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AstrologerLayout; 