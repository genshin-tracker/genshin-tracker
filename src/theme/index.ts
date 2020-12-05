import { createGlobalStyle, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  background: 'rgb(33, 33, 33)',
  backgroundLight: 'rgb(17, 17, 17)',
  backgroundDark: 'rgb(44,44,44)',
  backgroundBlack: 'rgb(0,0,0)',
  foreground: 'rgb(210,210,210)',
  foregroundDark: 'rgb(110,110,110)',
  primary: '#69e0ff',
  secondary: '#ffd49f',
};

export const CSSReset = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.backgroundDark};
  margin: 0;
  color: ${({ theme }) => theme.foreground};
}
* {
  font-family: Helvetica;
}
`;
export default theme;
