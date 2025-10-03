export interface EchoProps {
  args: string[];
}

export interface HistoryProps {
  history: Array<{
    command: string;
    timestamp: string;
  }>;
}
