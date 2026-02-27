import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white/80 dark:bg-stone-800/80 backdrop-blur-md shadow-lg border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-yellow-400 transition-all hover:scale-110 cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}
