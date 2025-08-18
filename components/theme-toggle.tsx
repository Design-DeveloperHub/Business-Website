"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-between w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      {/* Sun Icon (Left) */}
      <motion.div
        animate={{
          opacity: isDark ? 0.6 : 1,
          scale: isDark ? 0.8 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10 flex items-center justify-center w-6 h-6"
      >
        <Sun className="h-4 w-4 text-yellow-500 dark:text-gray-800" />
      </motion.div>

      {/* Moon Icon (Right) */}
      <motion.div
        animate={{
          opacity: isDark ? 1 : 0.4,
          scale: isDark ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10 flex items-center justify-center w-6 h-6"
      >
        {/* white background circle behind moon icon */}
        <div className="absolute inset-0 bg-gray-200 dark:bg-white rounded-full flex items-center justify-center">
          <Moon className="h-4 w-4 text-indigo-900 dark:text-indigo-400" />
        </div>
      </motion.div>

      {/* Sliding Toggle Indicator */}
      <motion.div
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="absolute left-1 top-1 w-6 h-6 bg-white dark:bg-indigo-800 rounded-full shadow-md border border-gray-300 dark:border-gray-600"
      />

      {/* Gradient Background Effect */}
      <motion.div
        animate={{
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-white to-indigo-800 rounded-full opacity-20"
      />
    </motion.button>
  )
}
