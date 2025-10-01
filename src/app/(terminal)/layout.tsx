export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-black p-4 font-mono text-green-400'>
      {children}
    </div>
  );
}
