import { DefaultTheme } from 'react-native-paper';

export const colors = {
  primary: '#6A5ACD', // Slate Blue
  secondary: '#9370DB', // Medium Purple
  accent: '#FF7F50', // Coral
  background: '#F8F8FF', // Ghost White
  surface: '#FFFFFF',
  text: '#333333',
  error: '#B00020',
  disabled: '#BDBDBD',
  placeholder: '#9E9E9E',
  backdrop: 'rgba(0, 0, 0, 0.5)',
  notification: '#FF4081',
  
  // Type colors (for the 9 enneagram types)
  type1: '#E53935', // Red
  type2: '#43A047', // Green
  type3: '#FB8C00', // Orange
  type4: '#5E35B1', // Purple
  type5: '#00ACC1', // Cyan
  type6: '#3949AB', // Indigo
  type7: '#FFD600', // Yellow
  type8: '#D81B60', // Pink
  type9: '#8D6E63', // Brown
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    background: colors.background,
    surface: colors.surface,
    text: colors.text,
    error: colors.error,
    disabled: colors.disabled,
    placeholder: colors.placeholder,
    backdrop: colors.backdrop,
    notification: colors.notification,
  },
  roundness: 10,
};