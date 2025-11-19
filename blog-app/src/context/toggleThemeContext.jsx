
import { createContext, useContext, useEffect, useState } from "react";

const ToggleThemeContext = createContext();

export function ToggleProvider({ children }) {
  const [light, setLight] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : { themeLight: true };
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(light));    
  }, [light]);

  function toggle() {
    setLight({
      themeLight: !light.themeLight
    })
  } 

  return (
    <ToggleThemeContext.Provider 
     value={{
        light: light.themeLight,
        toggle
     }}>
      {children}
    </ToggleThemeContext.Provider>
  );
}

export const useToggle = () => useContext(ToggleThemeContext);
