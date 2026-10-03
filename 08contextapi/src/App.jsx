import { useState, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => setThemeMode('light');
  const darkTheme = () => setThemeMode('dark');

  // DOM par class update karna dark theme active karne ke liye
  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
        <div className="w-full max-w-sm flex justify-end mb-4">
          <ThemeBtn />
        </div>
        <Card />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;