/* eslint-disable react-refresh/only-export-components */
// src/context/authStore.js
import { createContext, useContext, useState } from "react";

const ToggleThemeContext = createContext();

export function ToggleProvider({ children }) {
  const [light, setLight] = useState(true);

  // Simple auth helpers

  function toggle() {
    setLight(!light)
  } 

  return (
    <ToggleThemeContext.Provider 
     value={{
        light,
        toggle
     }}>
      {children}
    </ToggleThemeContext.Provider>
  );
}

export const useToggle = () => useContext(ToggleThemeContext);
