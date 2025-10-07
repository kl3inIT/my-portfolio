import { HistoryProps } from '@/types';

export function History({ history }: HistoryProps) {
  return (
    <div className='space-y-2 font-mono'>
      {history.length === 0 ? (
        <p className='text-white/80'>No commands have been executed yet</p>
      ) : (
        <div className='space-y-1'>
          {history.map((entry, index) => (
            <div
              key={index}
              className='flex items-center space-x-4 text-white/90'
            >
              <span className='text-white'>{entry.command}</span>
              <span className='text-sm text-white/60'>
                {new Date(entry.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
