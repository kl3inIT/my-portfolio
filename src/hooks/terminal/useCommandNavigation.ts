import { useState, useCallback } from 'react';

export function useCommandNavigation() {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const addToCommandHistory = useCallback((command: string) => {
    if (command.trim()) {
      setCommandHistory((prev) => [...prev, command]);
      setHistoryIndex(-1); // Reset index when a new command is added
    }
  }, []);

  const navigateUp = useCallback(
    (setInput: (value: string) => void) => {
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    },
    [commandHistory, historyIndex]
  );

  const navigateDown = useCallback(
    (setInput: (value: string) => void) => {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    },
    [historyIndex, commandHistory]
  );

  return {
    addToCommandHistory,
    navigateUp,
    navigateDown,
  };
}
