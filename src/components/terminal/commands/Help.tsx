export function Help() {
  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        <p>
          <span className='text-green-400'>about</span> - about me
        </p>
        <p>
          <span className='text-green-400'>clear</span> - clear the terminal
        </p>
        <p>
          <span className='text-green-400'>echo</span> - print out anything
        </p>
        <p>
          <span className='text-green-400'>education</span> - my education
          background
        </p>
        <p>
          <span className='text-green-400'>email</span> - send an email to me
        </p>
        <p>
          <span className='text-green-400'>gui</span> - go to my portfolio in
          GUI
        </p>
        <p>
          <span className='text-green-400'>help</span> - check available
          commands
        </p>
        <p>
          <span className='text-green-400'>history</span> - view command history
        </p>
        <p>
          <span className='text-green-400'>projects</span> - view projects that
          I have coded
        </p>
        <p>
          <span className='text-green-400'>pwd</span> - print current working
          directory
        </p>
        <p>
          <span className='text-green-400'>socials</span> - check out my social
          accounts
        </p>
        <p>
          <span className='text-green-400'>themes</span> - check available
          themes
        </p>
        <p>
          <span className='text-green-400'>welcome</span> - display hero section
        </p>
        <p>
          <span className='text-green-400'>whoami</span> - about current user
        </p>
      </div>

      <div className='mt-4 space-y-1'>
        <p>
          <span className='text-green-400'>Tab or Ctrl + i</span> ={'>'}{' '}
          autocompletes the command
        </p>
        <p>
          <span className='text-green-400'>Up Arrow</span> ={'>'} go back to
          previous command
        </p>
        <p>
          <span className='text-green-400'>Ctrl + l</span> ={'>'} clear the
          terminal
        </p>
      </div>
    </div>
  );
}
