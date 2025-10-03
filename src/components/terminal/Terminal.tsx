'use client';
import { useRef, useEffect, useState } from 'react';
import { Help, Echo } from './commands';

import { TerminalInfo } from './TerminalInfo';
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
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [showTerminalInfo, setShowTerminalInfo] = useState(true);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const context: ExecContext = {
    print: (out) => {
      setHistory((prev) => {
        const last = prev[prev.length - 1];
        const updated = { ...last, output: out };
        return [...prev.slice(0, -1), updated]; // update last entry (add output)
      });
    },
    clear: () => setHistory([]),
  };

  const handlers: Record<Command, CommandHandler> = {
    help: () => <Help />,
    echo: (args) => <Echo args={args} />,
    clear: (_, context) => {
      context.clear();
      setShowTerminalInfo(false);
      return null;
    },
    welcome: () => {
      setShowTerminalInfo(true);
      return <TerminalInfo />;
    },
  };

  const executeCommand = async (rawInput: string) => {
    const { command, rest } = parseCommand(rawInput);

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
  return (
    <div className='w-full p-4'>
      {showTerminalInfo && <TerminalInfo />}
      <div className='mb-4 space-y-2'>
        {history.map((h, index) => (
          <div key={index} className='space-y-1'>
            <div className='flex items-center'>
              <span className='mr-2 text-white'>C:\\Users\\visitor&gt;</span>
              <span className='text-white'>{h.command}</span>
            </div>
            {h.output !== null && (
              <div className='ml-4 whitespace-pre-line text-white/90'>
                {h.output}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='flex items-center'>
        <span className='mr-2 text-white'>C:\\Users\\visitor&gt;</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') void executeCommand(input);
          }}
          className='flex-1 bg-transparent font-mono text-white outline-none placeholder:text-white/50'
          autoComplete='off'
        />
        <span className='text-white'>|</span>
      </div>
    </div>
  );
}
