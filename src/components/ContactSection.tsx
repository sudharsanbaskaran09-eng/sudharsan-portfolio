import { Mail, MessageCircle, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';

interface ContactMethod {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sudharsanbaskaran09@gmail.com',
    href: 'mailto:sudharsanbaskaran09@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 9080101414',
    href: 'https://wa.me/919080101414',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'sudharsan-baskaran',
    href: 'https://www.linkedin.com/in/sudharsan-baskaran-95443925a/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@sudharsanbaskaran09-eng',
    href: 'https://github.com/sudharsanbaskaran09-eng',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0B0F19] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20"
    >
      {/* Open to Work Badge */}
      <FadeIn y={20}>
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span
              className="font-medium uppercase tracking-widest text-emerald-400"
              style={{ fontSize: 'clamp(0.65rem, 1vw, 0.8rem)' }}
            >
              Open to Work — Cloud & DevOps Roles
            </span>
          </div>
        </div>
      </FadeIn>

      {/* Heading */}
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4 text-white"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Get In Touch
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
        >
          Let's build scalable systems together
        </p>
      </FadeIn>

      {/* Contact cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {CONTACT_METHODS.map((method, i) => {
          const Icon = method.icon;
          const isExternal = method.href.startsWith('http');

          return (
            <FadeIn key={method.label} delay={i * 0.1} y={30}>
              <a
                href={method.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group relative flex h-full flex-col justify-between gap-8 sm:gap-10 rounded-[28px] sm:rounded-[32px] border border-[#ffffff15] bg-[#111827]/80 backdrop-blur-xl p-6 sm:p-7 md:p-8 transition-all duration-300 hover:border-[#3B82F6]/50 hover:bg-[#172033] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-full border border-[#ffffff15] bg-[#ffffff08] p-3 sm:p-3.5 transition-all duration-300 group-hover:border-[#3B82F6]/40 group-hover:bg-[#3B82F6]/10">
                    <Icon
                      className="text-[#D7E2EA]"
                      size={22}
                      strokeWidth={1.5}
                    />
                  </div>

                  <ArrowUpRight
                    className="text-[#D7E2EA]/40 transition-all duration-300 group-hover:text-[#F97316] group-hover:rotate-12"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <span
                    className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
                    style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
                  >
                    {method.label}
                  </span>

                  <span
                    className="font-medium text-[#F8FAFC] break-all"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
                  >
                    {method.value}
                  </span>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>

      {/* Footer */}
      <FadeIn delay={0.4} y={20}>
        <div className="mx-auto mt-20 sm:mt-24 md:mt-28 flex max-w-5xl flex-col items-center gap-3 border-t border-[#ffffff10] pt-8 text-center sm:flex-row sm:justify-between">
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/40"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            © 2026 Sudharsan
          </span>

          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/40"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            Cloud • DevOps • SRE Engineer
          </span>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;