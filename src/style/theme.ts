import { MD3DarkTheme as DefaultTheme, MD3Theme } from "react-native-paper";

const darkColor = {
  "primaryGradientFrom": "#7c3aed",
  "primaryGradientTo": "#3b82f6",
  "backgroundFrom": "#0f172a",
  "backgroundTo": "#1e293b",
  "textPrimary": "#f8fafc",
  "textSecondary": "#94a3b8",
  "border": "#1e293b",
  "highlightBackground": "#4c1d95",
  "highlightText": "#7c3aed",
  "inputBackground": "#0f172a",
  "buttonBackground": "#7c3aed",
}

const theme: MD3Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
      background: darkColor.backgroundTo
    },
    dark: true
  };
  

export {
    theme,
    darkColor
}