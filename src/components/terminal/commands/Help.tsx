export function Help() {
  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        <p>
          <span className='text-white'>about</span> - about me
        </p>
        <p>
          <span className='text-white'>clear</span> - clear the terminal
        </p>
        <p>
          <span className='text-white'>echo</span> - print out anything
        </p>
        <p>
          <span className='text-white'>education</span> - my education
          background
        </p>
        <p>
          <span className='text-white'>email</span> - send an email to me
        </p>
        <p>
          <span className='text-white'>gui</span> - go to my portfolio in GUI
        </p>
        <p>
          <span className='text-white'>help</span> - check available commands
        </p>
        <p>
          <span className='text-white'>history</span> - view command history
        </p>
        <p>
          <span className='text-white'>projects</span> - view projects that I
          have coded
        </p>
        <p>
          <span className='text-white'>pwd</span> - print current working
          directory
        </p>
        <p>
          <span className='text-white'>socials</span> - check out my social
          accounts
        </p>
        <p>
          <span className='text-white'>themes</span> - check available themes
        </p>
        <p>
          <span className='text-white'>welcome</span> - display hero section
        </p>
        <p>
          <span className='text-white'>whoami</span> - about current user
        </p>
      </div>

      <div className='mt-4 space-y-1'>
        <p>
          <span className='text-white'>Tab to</span> ={'>'} autocompletes the
          command
        </p>
        <p>
          <span className='text-white'>Up Arrow</span> ={'>'} go back to
          previous command
        </p>
        <p>
          <span className='text-white'>Ctrl + l</span> ={'>'} clear the terminal
        </p>
      </div>
    </div>
  );
}
