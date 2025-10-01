export function TerminalInfo() {
  return (
    <div className='space-y-4'>
      <div className='text-center font-mono text-green-400'>
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

      <div className='text-center'>
        <p className='text-sm text-green-300 italic'>
          &quot;Happiness doesn&apos;t last but programming does.&quot;
        </p>
        <p className='mt-1 text-xs text-gray-400'>- kl3inIT</p>
      </div>

      <div className='space-y-2 text-center'>
        <p className='text-white'>
          Welcome to kl3inIT&apos;s terminal portfolio.
        </p>

        <div className='my-4'>----</div>

        <p className='text-white'>
          This project&apos;s source code can be found in this project&apos;s{' '}
          <span className='cursor-pointer text-green-400 underline'>
            GitHub repo
          </span>
          .
        </p>

        <div className='my-4'>----</div>

        <p className='text-white'>
          For a list of available commands, type{' '}
          <span className='text-green-400'>help</span>.
        </p>
      </div>
    </div>
  );
}
