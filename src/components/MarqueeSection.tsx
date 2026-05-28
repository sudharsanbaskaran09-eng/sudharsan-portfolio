import { useEffect, useRef, useState } from 'react';

const IMAGES = [
'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
];

const ROW_ONE = IMAGES.slice(0, 3);
const ROW_TWO = IMAGES.slice(3);

const tripled = (arr: string[]) => [...arr, ...arr, ...arr];

interface RowProps {
images: string[];
offset: number;
direction: 'left' | 'right';
}

const Row = ({ images, offset, direction }: RowProps) => {
const translate =
direction === 'right'
? offset - 200
: -(offset - 200);

return (
<div
className="flex gap-5"
style={{
willChange: 'transform',
transform: `translateX(${translate}px)`,
}}
>
{tripled(images).map((src, i) => (
<div
key={i}
className="shrink-0 overflow-hidden rounded-[28px] border border-[#ffffff12] bg-[#111827]/70 backdrop-blur-xl"
style={{
width: 420,
height: 270,
boxShadow:
'0px 0px 30px rgba(37,99,235,0.12)',
}}
> <img
         src={src}
         alt=""
         loading="lazy"
         className="h-full w-full object-cover transition duration-500 hover:scale-105"
         draggable={false}
       /> </div>
))} </div>
);
};

const MarqueeSection = () => {
const sectionRef = useRef<HTMLElement>(null);

const [offset, setOffset] = useState(0);

useEffect(() => {
const handleScroll = () => {
if (!sectionRef.current) return;

  const sectionTop =
    sectionRef.current.getBoundingClientRect().top +
    window.scrollY;

  const raw =
    (window.scrollY - sectionTop + window.innerHeight) *
    0.3;

  setOffset(raw);
};

handleScroll();

window.addEventListener('scroll', handleScroll, {
  passive: true,
});

window.addEventListener('resize', handleScroll);

return () => {
  window.removeEventListener(
    'scroll',
    handleScroll
  );

  window.removeEventListener(
    'resize',
    handleScroll
  );
};

}, []);

return ( <section
   ref={sectionRef}
   className="relative w-full overflow-hidden bg-[#0B1120] pt-24 sm:pt-32 md:pt-40 pb-14"
 > <div className="mb-16 text-center"> <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#60A5FA]">
Featured Infrastructure </p>

    <h2
      className="font-black uppercase text-white"
      style={{
        fontSize: 'clamp(2.5rem, 8vw, 7rem)',
      }}
    >
      Cloud Projects
    </h2>
  </div>

  <div className="flex flex-col gap-5">
    <Row
      images={ROW_ONE}
      offset={offset}
      direction="right"
    />

    <Row
      images={ROW_TWO}
      offset={offset}
      direction="left"
    />
  </div>
</section>

);
};

export default MarqueeSection;
