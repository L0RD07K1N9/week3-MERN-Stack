
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tasks", label: "Tasks" },
    { to: "/api", label: "API Demo" },
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow flex justify-between items-center px-6 py-3 rounded-b-2xl animate-fade-in transition-all duration-300 ease-in-out">
      <div className="font-extrabold text-xl text-blue-700 dark:text-blue-300 tracking-tight animate-slide-up">My App</div>
      <div className="flex items-center gap-4">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-3 py-1 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:scale-105 hover:-translate-y-1 transform ${location.pathname === link.to ? 'bg-blue-600 text-white dark:bg-blue-500' : 'text-blue-700 dark:text-blue-200'}`}
          >
            {link.label}
          </Link>
        ))}
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleTheme}
          className="ml-2 animate-float"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </Button>
      </div>
    </nav>
  );
}
