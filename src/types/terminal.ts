import type { ReactNode } from 'react';

export const COMMANDS = [
  'help',
  'clear',
  'welcome',
  'echo',
  'history',
] as const; // transform to tuple(literal types)

export type Command = (typeof COMMANDS)[number]; // union of literal types

// export type Command = 'help' | 'clear' | 'welcome' | 'echo' | 'history';
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
