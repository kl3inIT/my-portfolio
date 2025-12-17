export interface TerminalTheme {
    name: string;
    displayName: string;
    colors: {
      background: string;
      foreground: string;
      cursor: string;s
      cursorAccent: string;
      selection: string;
      // ANSI Colors (normal)
      black: string;
      red: string;
      green: string;
      yellow: string;
      blue: string;
      magenta: string;
      cyan: string;
      white: string;
      // ANSI Colors (bright)
      brightBlack: string;
      brightRed: string;
      brightGreen: string;
      brightYellow: string;
      brightBlue: string;
      brightMagenta: string;
      brightCyan: string;
      brightWhite: string;
    };
  }
  
  export type ThemeName = 'default' | 'dracula' | 'monokai' | 'nord' | 'solarized-dark' | 'gruvbox';