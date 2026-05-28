import FadeIn from './FadeIn';

const SERVICES = [
{
number: '01',
title: 'Cloud Infrastructure',
description:
'Designing and deploying scalable cloud infrastructure using AWS services including EC2, VPC, IAM, RDS, S3, Auto Scaling, and CloudWatch for high availability and reliability.',
},

{
number: '02',
title: 'DevOps Automation',
description:
'Building automated CI/CD pipelines using GitHub Actions, Jenkins, Docker, and Kubernetes to streamline deployments, improve delivery speed, and reduce manual operations.',
},

{
number: '03',
title: 'Infrastructure as Code',
description:
'Provisioning and managing production-ready cloud environments using Terraform and Infrastructure as Code principles for faster, repeatable, and scalable deployments.',
},

{
number: '04',
title: 'Monitoring & Observability',
description:
'Implementing monitoring and observability systems using Prometheus, Grafana, Alertmanager, and CloudWatch for proactive issue detection and system reliability.',
},

{
number: '05',
title: 'Cloud-Native Solutions',
description:
'Building modern cloud-native and containerized applications with Docker, Kubernetes, microservices architecture, and scalable deployment strategies.',
},
];

const ServicesSection = () => {
return ( <section
   id="services"
   className="relative w-full bg-[#F8FAFC] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
 > <FadeIn y={40}>
<h2
className="text-center font-black uppercase text-[#0B1120] mb-16 sm:mb-20 md:mb-28 leading-none"
style={{
fontSize: 'clamp(3rem, 12vw, 160px)',
}}
>
Expertise </h2> </FadeIn>

  <div className="mx-auto max-w-5xl">
    {SERVICES.map((service, i) => (
      <FadeIn
        key={service.number}
        delay={i * 0.1}
        y={30}
      >
        <div
          className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
          style={{
            borderTop:
              '1px solid rgba(15, 23, 42, 0.12)',

            ...(i === SERVICES.length - 1
              ? {
                  borderBottom:
                    '1px solid rgba(15, 23, 42, 0.12)',
                }
              : {}),
          }}
        >
          <div
            className="shrink-0 font-black text-[#0B1120] leading-none"
            style={{
              fontSize: 'clamp(3rem, 10vw, 140px)',
            }}
          >
            {service.number}
          </div>

          <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
            <h3
              className="font-medium uppercase text-[#0B1120] leading-tight relative inline-block w-fit"
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
              }}
            >
              {service.title}

              <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#2563EB]/60 transition-all duration-500 group-hover:w-full" />
            </h3>

            <p
              className="font-light leading-relaxed text-[#0B1120] max-w-2xl"
              style={{
                fontSize:
                  'clamp(0.85rem, 1.6vw, 1.25rem)',

                opacity: 0.72,
              }}
            >
              {service.description}
            </p>
          </div>
        </div>
      </FadeIn>
    ))}
  </div>
</section>

);
};

export default ServicesSection;
