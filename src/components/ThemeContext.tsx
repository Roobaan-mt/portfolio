import React, { useEffect, useMemo, useState, createContext, useContext } from 'react';
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  // Check if user has a theme preference in localStorage or prefers dark mode
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme || (prefersDark ? 'dark' : 'light');
    }
    return 'light';
  });
  // Update class on document element when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    // Apply theme change with requestAnimationFrame to ensure it happens during an animation frame
    requestAnimationFrame(() => {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    });
    localStorage.setItem('theme', theme);
  }, [theme]);
  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if the user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    return () => {};
  }, []);
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Save the user preference
      return newTheme;
    });
  };
  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme]);
  return <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>;
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};