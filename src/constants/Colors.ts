import { DefaultTheme } from 'react-native-paper';

const tintColorLightPastel = '#90cdf4';
const tintColorLight = '#4299e1';
const tintColorDarkPastel = '#fbd38d';
const tintColorDark = '#ed8936';

export default {
  light: {
    text: '#1a202c',
    background: '#fff',
    tint: tintColorLight,
    tintPastel: tintColorLightPastel,
    tabIconDefault: '#a0aec0',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#1a202c',
    tint: tintColorDark,
    tintPastel: tintColorDarkPastel,
    tabIconDefault: '#a0aec0',
    tabIconSelected: tintColorDark,
  },
};

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: tintColorLight,
    accent: '#f1c40f',
  },
};
