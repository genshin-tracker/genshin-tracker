import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundLight: string;
    backgroundBlack: string;
    backgroundDark: string;
    foreground: string;
    foregroundDark: string;
    primary: string;
    secondary: string;
  }
}
