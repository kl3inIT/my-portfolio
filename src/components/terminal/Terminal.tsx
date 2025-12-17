'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Help, Echo, History, Themes } from './commands';
import { TerminalInfo } from './TerminalInfo';
import { useAutoComplete, useCommandNavigation, useTerminalTheme } from '@/hooks/terminal/';
import {
  Command,
  CommandHistory,
  CommandHandler,
  ParsedCommand,
  ExecContext,
} from '@/types';


const parseCommand = (rawInput: string): ParsedCommand => {
  const commandParts = rawInput.trim().split(/\s+/);
  const command = (commandParts[0] || 'help') as Command;
  const rest = commandParts.slice(1);
  return { command, rest, rawInput };
};

export function Terminal() {
  const { currentTheme } = useTerminalTheme();
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [showTerminalInfo, setShowTerminalInfo] = useState(true);
  const {
    inlineSuggestion,
    getAutoComplete,
    acceptAutoComplete,
    clearSuggestion,
  } = useAutoComplete();

  const themeStyles = {
    '--term-bg': currentTheme.colors.background,
    '--term-fg': currentTheme.colors.foreground,
    '--term-cursor': currentTheme.colors.cursor,
    '--term-cursor-accent': currentTheme.colors.cursorAccent,
    '--term-selection': currentTheme.colors.selection,
    // ANSI colors
    '--term-black': currentTheme.colors.black,
    '--term-red': currentTheme.colors.red,
    '--term-green': currentTheme.colors.green,
    '--term-yellow': currentTheme.colors.yellow,
    '--term-blue': currentTheme.colors.blue,
    '--term-magenta': currentTheme.colors.magenta,
    '--term-cyan': currentTheme.colors.cyan,
    '--term-white': currentTheme.colors.white,
    // Bright ANSI colors
    '--term-bright-black': currentTheme.colors.brightBlack,
    '--term-bright-red': currentTheme.colors.brightRed,
    '--term-bright-green': currentTheme.colors.brightGreen,
    '--term-bright-yellow': currentTheme.colors.brightYellow,
    '--term-bright-blue': currentTheme.colors.brightBlue,
    '--term-bright-magenta': currentTheme.colors.brightMagenta,
    '--term-bright-cyan': currentTheme.colors.brightCyan,
    '--term-bright-white': currentTheme.colors.brightWhite,
  } as React.CSSProperties;

  const { addToCommandHistory, navigateUp, navigateDown } =
    useCommandNavigation();

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const context: ExecContext = {
    print: (out) => {
      setHistory((prev) => {
        if (prev.length === 0) return prev; // no command to attach output
        const last = prev[prev.length - 1];
        const updated = { ...last, output: out };
        return [...prev.slice(0, -1), updated]; // update last entry (add output)
      });
    },
    clear: () => {
      setShowTerminalInfo(false);
      setHistory([]);
    },
  };

  const handlers: Record<Command, CommandHandler> = {
    help: () => <Help />,
    echo: (args) => <Echo args={args} />,
    history: () => <History history={history} />,
    clear: (_, context) => {
      context.clear();
      return null;
    },
    welcome: () => <TerminalInfo />,
    about: () => 'Not implemented yet',
    projects: () => 'Not implemented yet',
    themes: (args) => <Themes args={args} />,
    pwd: () => 'Not implemented yet',
    whoami: () => 'Not implemented yet',
    gui: () => 'Not implemented yet',
    email: () => 'Not implemented yet',
    education: () => 'Not implemented yet',
    socials: () => 'Not implemented yet',
  };

  const executeCommand = async (rawInput: string) => {
    if (!rawInput.trim()) return; // ignore empty command
    const { command, rest } = parseCommand(rawInput);

    // add command to history for navigation
    addToCommandHistory(rawInput);

    // push command vào history trước, output tạm null
    setHistory((prev) => [
      ...prev,
      {
        command: [command, ...rest].join(' '),
        output: null,
        timestamp: new Date().toISOString(),
      },
    ]);

    const handler =
      handlers[command] ??
      (() =>
        `Command not found: ${command}. Type "help" for a list of commands.`);

    const output = await handler(rest, context);
    if (output !== null) context.print(output);
    setInput('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
    getAutoComplete(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyHandlers: Record<string, () => void> = {
      Enter: () => {
        clearSuggestion();
        void executeCommand(input);
      },
      Tab: () => {
        event.preventDefault();
        acceptAutoComplete(input, setInput);
      },
      ArrowUp: () => {
        event.preventDefault();
        navigateUp(setInput);
      },
      ArrowDown: () => {
        event.preventDefault();
        navigateDown(setInput);
      },
    };

    const handler = keyHandlers[event.key];
    if (handler) handler();
  };

  return (
    <div
      ref={terminalRef}
      className='max-h-screen w-full overflow-x-hidden overflow-y-auto p-4'
      style={{
        ...themeStyles,
        height: '100vh',
        backgroundColor: 'var(--term-bg)',
        color: 'var(--term-fg)',
      }}
    >
      {showTerminalInfo ? <TerminalInfo /> : <div className='mt-2' />}

      <div className='mb-2 space-y-2'>
        {history.map((his, index) => (
          <div key={index} className='space-y-1'>
            <div className='flex items-center'>
              <span className='mr-2 text-white'>C:\\Users\\visitor&gt;</span>
              <span className='text-white'>{his.command}</span>
            </div>
            {his.output !== null && (
              <div className='ml-4 whitespace-pre-line text-white/90'>
                {his.output}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='relative flex items-center font-mono text-white'>
        <span className='mr-2'>C:\\Users\\visitor&gt;</span>
        <div className='relative flex-1'>
          <div className='pointer-events-none absolute inset-0 flex items-center'>
            <span className='invisible'>{input}</span>
            <span className='text-gray-400/70'>{inlineSuggestion}</span>
          </div>
          <input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='w-full bg-transparent font-mono text-white caret-white outline-none'
            autoComplete='off'
          />
        </div>
      </div>
    </div>
  );
}
