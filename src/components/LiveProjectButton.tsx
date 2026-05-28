interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  className?: string;
  }
  
  const LiveProjectButton = ({
  label = 'View Project',
  href = '#',
  className = '',
  }: LiveProjectButtonProps) => {
  return (
  <a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className={`inline-flex items-center justify-center rounded-full border border-[#ffffff20] bg-[#ffffff08] backdrop-blur-xl px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-[0.22em] text-[#F8FAFC] whitespace-nowrap transition-all duration-300 hover:bg-[#2563EB]/20 hover:border-[#60A5FA]/40 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] active:scale-[0.98] ${className}`}
  >
  {label} </a>
  );
  };
  
  export default LiveProjectButton;
  