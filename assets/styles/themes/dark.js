
import LightTheme from './light';

export default {
  ...LightTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    ...LightTheme.colors,
    primary: '#56b387',
    accent: '#b9b9b9',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    text:'#FFFFFF',
    clickable: '#4c4cf9',
    disabled:"#ccc",
    placeholder: '#cacaca',
    backdrop: "#ccc",
    notification: "#ef09b3",
  },
};

const thems = {
  light: {
    background: 'white',
  },
  dark: {
    background: 'dark',
  },
};
const selectTheme = (type = 'light') => {
  return thems?.[type];
};

const them = selectTheme('dark');
console.log(them.background); // dark
