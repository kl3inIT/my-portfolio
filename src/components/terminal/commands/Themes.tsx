import { useTerminalTheme } from '@/hooks/terminal/useTerminalTheme';
import { THEME_NAMES } from '@/constants/themes';
export const Themes: React.FC<{ args: string[] }> = ({ args }) => {
  const { currentThemeName, setTheme } = useTerminalTheme();

  if (args.length === 0) {
    return (
      <div className="space-y-2">
        <div>Available themes:</div>
        {THEME_NAMES.map((theme) => (
          <div key={theme} className="ml-4">
            <span className={theme === currentThemeName ? 'text-green-400' : ''}>
              {theme === currentThemeName ? '● ' : '○ '}
              {theme}
            </span>
          </div>
        ))}
        <div className="mt-2 text-gray-400">
          Usage: themes [theme-name] - Set a theme
        </div> 
      </div>
    );
  }

  const requestedTheme = args[0];
  const theme = THEME_NAMES.find((theme) => theme === requestedTheme);

  if (theme) {
    setTheme(theme);
    return `Theme changed to: ${theme}`;
  }

  return `Theme not found: ${requestedTheme}. Type "themes" to see available themes.`;
};