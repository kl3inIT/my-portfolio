import { useState, useCallback } from 'react';
import { COMMANDS } from '@/types';

export function useAutoComplete() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const getAutoComplete = useCallback((input: string) => {
    if (!input.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const matches = COMMANDS.filter((command) =>
      command.toLowerCase().startsWith(input.toLowerCase())
    );

    setSuggestions(matches);
    setShowSuggestions(matches.length > 0);
  }, []);

  const handleTabComplete = useCallback(
    (currentInput: string, setInput: (value: string) => void) => {
      if (suggestions.length === 1) {
        setInput(suggestions[0]);
        setShowSuggestions(false);
      } else if (suggestions.length > 1) {
        setInput(suggestions[0]);
        setShowSuggestions(true);
      }
    },
    [suggestions]
  );

  const hideSuggestions = useCallback(() => {
    setShowSuggestions(false);
  }, []);

  return {
    suggestions,
    showSuggestions,
    getAutoComplete,
    handleTabComplete,
    hideSuggestions,
  };
}
