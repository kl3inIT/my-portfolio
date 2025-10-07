import { useState, useCallback } from 'react';
import { COMMANDS } from '@/types';

export function useAutoComplete() {
  const [inlineSuggestion, setInlineSuggestion] = useState<string>('');

  const getAutoComplete = useCallback((input: string) => {
    if (!input.trim()) {
      setInlineSuggestion('');
      return;
    }

    const match = COMMANDS.find((cmd) =>
      cmd.toLowerCase().startsWith(input.toLowerCase())
    );

    if (match && match.toLowerCase() !== input.toLowerCase()) {
      setInlineSuggestion(match.slice(input.length));
    } else {
      setInlineSuggestion('');
    }
  }, []);

  const acceptAutoComplete = useCallback(
    (input: string, setInput: (value: string) => void) => {
      if (inlineSuggestion) {
        setInput(input + inlineSuggestion);
        setInlineSuggestion('');
      }
    },
    [inlineSuggestion]
  );

  return {
    inlineSuggestion,
    getAutoComplete,
    acceptAutoComplete,
  };
}
