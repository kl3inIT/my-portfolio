import { useCallback, useMemo } from 'react';
import { useLocalStorage } from '@/hooks';
import { THEMES, DEFAULT_THEME_NAME, THEME_NAMES } from '@/constants/themes';
import type { ThemeName, TerminalTheme } from '@/types';

export interface UseTerminalThemeReturn {
  currentTheme: TerminalTheme;
  currentThemeName: ThemeName;
  setTheme: (themeName: ThemeName) => void;
  resetTheme: () => void;
  isValidTheme: (themeName: string) => themeName is ThemeName;
}

const STORAGE_KEY = 'terminalTheme';

export const useTerminalTheme = (): UseTerminalThemeReturn => {
  const [themeName, setThemeName] = useLocalStorage(
    STORAGE_KEY,
    DEFAULT_THEME_NAME,
    {
      defaultServerValue: DEFAULT_THEME_NAME,
      storageSync: true,
    }
  );

  const currentTheme = useMemo<TerminalTheme>(() => {
    return THEMES[themeName] || THEMES[DEFAULT_THEME_NAME];
  }, [themeName]);

  const isValidTheme = useCallback(
    (name: string): name is ThemeName => {
      return THEME_NAMES.includes(name as ThemeName);
    },
    []
  );

  const setTheme = useCallback(
    (newThemeName: ThemeName) => {
      if (isValidTheme(newThemeName)) {
        setThemeName(newThemeName);
      } else {
        console.warn(
          `Invalid theme name: ${newThemeName}. Available themes: ${THEME_NAMES.join(', ')}`
        );
      }
    },
    [isValidTheme, setThemeName]
  );

  const resetTheme = useCallback(() => {
    setThemeName(DEFAULT_THEME_NAME);
  }, [setThemeName]);

  return {
    currentTheme,
    currentThemeName: themeName,
    setTheme,
    resetTheme,
    isValidTheme,
  };
};