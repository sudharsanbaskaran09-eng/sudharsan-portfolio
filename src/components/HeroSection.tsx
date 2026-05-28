import { useRef, useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Pause when hero scrolls out of view, resume when back
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Only resume if user had it playing
          if (isPlaying) video.play();
        } else {
          // Always pause when out of view
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isPlaying]);

  const handleFirstPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setIsPlaying(true);
    setHasInteracted(true);
  };

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0B1120]/50 to-[#1E3A8A]/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#F97316]/10" />

      {/* First-time Play Overlay */}
      {!hasInteracted && (
        <button
          onClick={handleFirstPlay}
          aria-label="Play video with sound"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 group cursor-pointer"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all group-hover:bg-white/20 group-hover:scale-110">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M6 4l14 8-14 8V4z" />
            </svg>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/70 group-hover:text-white transition">
            Click to play with sound
          </span>
        </button>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Navbar */}
        <FadeIn delay={0} y={-20}>
          <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
            <ul className="flex items-center gap-5 sm:gap-8 md:gap-12">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-xl transition hover:bg-white/20 hover:scale-[1.03]"
            >
              Contact Me
            </a>
          </div>
        </FadeIn>

        {/* Hero Content */}
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-7xl px-6 md:px-10">
            <FadeIn delay={0.3} y={20}>
              <p className="mb-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em] text-[#93C5FD]">
                CLOUD • DEVOPS • SRE ENGINEER
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={40}>
              <h1
                className="font-black uppercase leading-[0.88] tracking-tight text-white"
                style={{ fontSize: 'clamp(3rem, 12vw, 10.5rem)' }}
              >
                SUDHARSAN
              </h1>
            </FadeIn>

            <FadeIn delay={0.85} y={20}>
              <p className="mt-5 md:mt-7 max-w-2xl text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-white/75 leading-relaxed">
                BUILDING SCALABLE CLOUD INFRASTRUCTURE WITH AWS,
                KUBERNETES, TERRAFORM, CI/CD AUTOMATION,
                MONITORING SYSTEMS, AND SELF-HEALING DEVOPS ARCHITECTURE.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-10 md:pb-12">
          <FadeIn delay={1.1} y={20}>
            <a href="#about" aria-label="Scroll" className="group flex flex-col items-center gap-3">
              <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 transition group-hover:text-white">
                SCROLL
              </span>
              <div className="relative h-12 w-px overflow-hidden bg-white/20">
                <span
                  className="absolute inset-x-0 top-0 h-1/2 w-full bg-[#60A5FA]"
                  style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }}
                />
              </div>
            </a>
          </FadeIn>

          {/* Play/Pause Toggle — only shown after first interaction */}
          {hasInteracted && (
            <FadeIn delay={0} y={20}>
              <button
                onClick={toggleVideo}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="group flex flex-col items-center gap-2"
              >
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 hover:scale-110">
                  {isPlaying ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="1.5" y="1" width="3" height="10" rx="1" fill="white" />
                      <rect x="7.5" y="1" width="3" height="10" rx="1" fill="white" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 1.5L10.5 6L2.5 10.5V1.5Z" fill="white" />
                    </svg>
                  )}
                </div>
                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 transition group-hover:text-white">
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </span>
              </button>
            </FadeIn>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;