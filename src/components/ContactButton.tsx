interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  }
  
  const ContactButton = ({
  label = 'Connect With Me',
  href = '#contact',
  onClick,
  className = '',
  }: ContactButtonProps) => {
  return (
  <a
  href={href}
  onClick={onClick}
  className={`inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98] ${className}`}
  style={{
  background:
  'linear-gradient(135deg, #0F172A 0%, #1E293B 30%, #2563EB 70%, #F97316 100%)',
  boxShadow:
  '0px 0px 25px rgba(37, 99, 235, 0.35), inset 0px 0px 12px rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.12)',
  backdropFilter: 'blur(12px)',
  }}
  >
  {label} </a>
  );
  };
  
  export default ContactButton;
  