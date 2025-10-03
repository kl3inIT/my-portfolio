import type { ReactNode } from 'react';
export type Command = 'help' | 'clear' | 'welcome' | 'echo';
// | 'about'
// | 'projects'
// | 'themes'

// | 'history'
// | 'echo'
// | 'pwd'
// | 'whoami'
// | 'gui'
// | 'email'
// | 'education'
// | 'socials';

export interface CommandHistory {
  command: string;
  output: ReactNode | string | null;
  timestamp: string;
}

// export interface TerminalState {
//   history: CommandHistory[];
//   currentInput: string;
//   isExecuting: boolean;
// }

export type CommandHandler = (
  args: string[],
  context: ExecContext
) => ReactNode | string | Promise<ReactNode | string>;

export interface ExecContext {
  print: (out: ReactNode | string) => void;
  clear: () => void;
}

export interface ParsedCommand {
  command: Command;
  rest: string[];
  rawInput: string;
}
