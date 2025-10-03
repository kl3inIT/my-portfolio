import type { EchoProps } from '@/types';

export function Echo({ args }: EchoProps) {
  const message = args.join(' ');
  return <div className='text-white'>{message || ' '}</div>;
}
