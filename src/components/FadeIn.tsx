import { motion } from 'framer-motion';
import type { ReactNode, ElementType } from 'react';

interface FadeInProps {
children: ReactNode;
delay?: number;
duration?: number;
x?: number;
y?: number;
as?: ElementType;
className?: string;
style?: React.CSSProperties;
}

const FadeIn = ({
children,
delay = 0,
duration = 0.9,
x = 0,
y = 40,
as = 'div',
className,
style,
}: FadeInProps) => {
const MotionComponent = motion.create(as);

return (
<MotionComponent
initial={{
opacity: 0,
x,
y,
filter: 'blur(10px)',
}}
whileInView={{
opacity: 1,
x: 0,
y: 0,
filter: 'blur(0px)',
}}
viewport={{
once: true,
margin: '-50px',
amount: 0.15,
}}
transition={{
delay,
duration,
ease: [0.22, 1, 0.36, 1],
}}
className={className}
style={style}
>
{children} </MotionComponent>
);
};

export default FadeIn;
