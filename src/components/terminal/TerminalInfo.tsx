export function TerminalInfo() {
  return (
    <div className='mb-2 space-y-4'>
      <div className='font-mono text-white'>
        <pre className='text-sm'>{`
   █████      ████   ████████   ███             █████ ███████████
  ▒▒███      ▒▒███  ███▒▒▒▒███ ▒▒▒             ▒▒███ ▒█▒▒▒███▒▒▒█
   ▒███ █████ ▒███ ▒▒▒    ▒███ ████  ████████   ▒███ ▒   ▒███  ▒ 
   ▒███▒▒███  ▒███    ██████▒ ▒▒███ ▒▒███▒▒███  ▒███     ▒███    
   ▒██████▒   ▒███   ▒▒▒▒▒▒███ ▒███  ▒███ ▒███  ▒███     ▒███    
   ▒███▒▒███  ▒███  ███   ▒███ ▒███  ▒███ ▒███  ▒███     ▒███    
   ████ █████ █████▒▒████████  █████ ████ █████ █████    █████   
  ▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒▒ ▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒    ▒▒▒▒▒                                                                                                                                                                                                                                                              
        `}</pre>
      </div>

      <div>
        <p className='text-sm text-white/70 italic'>
          &quot;Happiness doesn&apos;t last but programming does.&quot;
        </p>
        <p className='mt-1 text-xs text-white/50'>- kl3inIT</p>
      </div>

      <div className='space-y-2'>
        <p className='text-white'>
          Welcome to kl3inIT&apos;s terminal portfolio.
        </p>

        <div className='my-4'>----</div>

        <p className='text-white'>
          This project&apos;s source code can be found in this project&apos;s{' '}
          <a
            href='https://github.com/kl3inIT/my-portfolio'
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer text-white underline'
          >
            GitHub repo.
          </a>
        </p>

        <div className='my-4'>----</div>

        <p className='text-white'>
          For a list of available commands, type{' '}
          <span className='text-white underline'>help</span>.
        </p>
      </div>
    </div>
  );
}
