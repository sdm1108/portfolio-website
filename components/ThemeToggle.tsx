"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle(){
  const [theme, setTheme] = useState<'light'|'dark'>(() => (typeof window !== 'undefined' && (document.documentElement.classList.contains('dark') ? 'dark':'light')) ?? 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(()=> {
    const saved = localStorage.getItem('theme');
    if(saved === 'dark') setTheme('dark');
  },[]);

  return (
    <button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md border">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
