import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      borderRadius: string;
  
      colors: {
        default: string | number;
        defaultTint: string;
        primary: string;
        primaryTint: string;
        secondary: string;
        secondaryTint: string;
        secondary_light: string;
      };
    }
  }

  const mainTheme: DefaultTheme = {
    borderRadius: '5px',
  
    colors: {
        default: '#FDB200',
        defaultTint: '#b98201',
        primary: '#2D3648',
        primaryTint: '#212835',
        secondary: '#212353',
        secondaryTint: '#212399',
        secondary_light: '#bcbde3',
    },
  };

  export { mainTheme };
