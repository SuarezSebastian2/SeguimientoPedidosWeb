import React, { useState } from 'react';
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

function ThemeToggle() {
  const theme = useTheme();
  const [themeMode, setThemeMode] = useState('dark');

  const applyLightTheme = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    setThemeMode('light');
  };

  const applyDarkTheme = () => {
    document.body.style.backgroundColor = '#222';
    document.body.style.color = 'white';
    setThemeMode('dark');
  };

  const toggleTheme = () => {
    if (themeMode === 'light') {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }
  };

  return (
    <ThemeProvider theme={createTheme({ palette: { mode: themeMode } })}>
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 9999 }}>
        <IconButton color="inherit" onClick={toggleTheme}>
          {themeMode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
    </ThemeProvider>
  );
}

export default ThemeToggle;
