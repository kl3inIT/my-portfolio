import type { Dispatch, SetStateAction } from "react";
import useLocalStorageState from "use-local-storage-state";

import { ThemeName } from "@/types";

interface Kl3inLocalStorage {
  terminalTheme: ThemeName;
}

export interface UseLocalStorageOptions<T> {
  /**
   * Value used during SSR
   * (important for Next.js to avoid hydration mismatch)
   */
  defaultServerValue?: T;

  /**
   * Sync value across tabs / windows / iframes
   * @default true
   */
  storageSync?: boolean;

  serializer?: {
    parse: (value: string) => T;
    stringify: (value: T) => string;
  };
}

export const useLocalStorage = <T extends keyof Kl3inLocalStorage>(
  key: T,
  initialValue: Kl3inLocalStorage[T],
  options?: UseLocalStorageOptions<Kl3inLocalStorage[T]>
): [
  Kl3inLocalStorage[T],
  Dispatch<SetStateAction<Kl3inLocalStorage[T]>>,
  {
    /**
     * Whether the value is really persisted in localStorage
     * (false when falling back to in-memory storage)
     */
    isPersistent: boolean;

    /**
     * Remove value from localStorage
     */
    removeItem: () => void;
  },
] => {
  const [value, setValue, meta] =
    useLocalStorageState<Kl3inLocalStorage[T]>(key, {
      defaultValue: initialValue,
      defaultServerValue: options?.defaultServerValue,
      storageSync: options?.storageSync,
      serializer: options?.serializer
        ? {
          stringify: (value: unknown) =>
            options.serializer!.stringify(
              value as Kl3inLocalStorage[T]
            ),
          parse: (value: string) =>
            options.serializer!.parse(value),
        }
        : undefined,
    });

  if (value === undefined) {
    throw new Error(
      `useLocalStorage("${String(
        key
      )}") returned undefined. This should never happen.`
    );
  }

  return [value, setValue, meta];
};