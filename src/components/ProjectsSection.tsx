import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  liveUrl: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'AWS · Cloud',
    name: '15 AWS Cloud Projects',
    liveUrl: 'https://github.com/sudharsanbaskaran09-eng/15-aws-cloud-projects',
    col1Image1:
      'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop',
    col1Image2:
      'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1200&auto=format&fit=crop',
    col2Image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '02',
    category: 'Terraform · IaC · AWS',
    name: 'Infrastructure Automation',
    liveUrl:
      'https://github.com/sudharsanbaskaran09-eng/Infrastructure-as-Code-IaC-Automation-08-AWS-Projects',
    col1Image1:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    col1Image2:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    col2Image:
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '03',
    category: 'AWS · Solutions Architect',
    name: 'AWS Solutions Architect Projects',
    liveUrl:
      'https://github.com/sudharsanbaskaran09-eng/aws-solutions-architect-projects',
    col1Image1:
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop',
    col1Image2:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    col2Image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '04',
    category: 'AWS · AI/ML · Bedrock',
    name: 'AWS AI Projects Portfolio',
    liveUrl:
      'https://github.com/sudharsanbaskaran09-eng/aws-ai-projects-portfolio',
    col1Image1:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop',
    col1Image2:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
    col2Image:
      'https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '05',
    category: 'AWS · Security',
    name: 'AWS Security Projects',
    liveUrl:
      'https://github.com/sudharsanbaskaran09-eng/aws-security-projects',
    col1Image1:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop',
    col1Image2:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    col2Image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '06',
    category: 'GenAI · Bedrock · PartyRock',
    name: 'AI Productivity Planner',
    liveUrl:
      'https://github.com/sudharsanbaskaran09-eng/ai-productivity-planner',
    col1Image1:
      'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1200&auto=format&fit=crop',
    col1Image2:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop',
    col2Image:
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '07',
    category: 'DevOps · SRE',
    name: 'Self-Healing Infrastructure',
    liveUrl:
      'https://github.com/sudharsanbaskaran09-eng/self-healing-infrastructure-devops',
    col1Image1:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    col1Image2:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    col2Image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '08',
    category: 'Docker · GitHub Actions · CI/CD',
    name: 'CI/CD Pipeline Automation',
    liveUrl:
      'https://github.com/sudharsanbaskaran09-eng/devops-cicd-docker',
    col1Image1:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    col1Image2:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    col2Image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '09',
    category: 'Node.js · EC2 · RDS · GitHub Actions',
    name: 'Multi-Tier Node.js CI/CD',
    liveUrl:
      'https://github.com/sudharsanbaskaran09-eng/multi-tier-nodejs-cicd',
    col1Image1:
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1200&auto=format&fit=crop',
    col1Image2:
      'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1200&auto=format&fit=crop',
    col2Image:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1200&auto=format&fit=crop',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] w-full"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto h-full w-full flex flex-col gap-4 sm:gap-6 md:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#ffffff12] bg-[#0B1120] p-4 sm:p-6 md:p-8 shadow-[0_0_35px_rgba(37,99,235,0.08)]"
      >
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6">
          <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full">
            <div
              className="shrink-0 font-black text-[#F8FAFC] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
            >
              {project.number}
            </div>

            <div className="flex flex-col gap-1 sm:gap-3 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1">
              <span
                className="font-light uppercase tracking-widest text-[#60A5FA]"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#F8FAFC] leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="shrink-0 self-start sm:self-auto pt-1 sm:pt-2 md:pt-3 w-full sm:w-auto">
            <LiveProjectButton href={project.liveUrl} className="w-full sm:w-auto" />
          </div>
        </div>

        <div className="grid grid-cols-[40%_60%] gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-h-0">
            <div
              className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt=""
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
                draggable={false}
              />
            </div>

            <div
              className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt=""
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-0">
            <img
              src={project.col2Image}
              alt=""
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0B1120] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28 text-white"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;