import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    stagger?: number;
    delay?: number;
};

// Objeto de animação padrão
const defaultAnimation = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function AnimatedText({
    text,
    el: Wrapper = "p",
    className,
    stagger: time = 0.05,
    delay = 0,
}: AnimatedTextProps) {
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 1 });
    const controls = useAnimation();

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = () => {
            timeout = setTimeout(() => {
                controls.start("visible");
            }, delay * 1000);
        }
        if (isInView) {
            show();
        } else {
            controls.start("hidden");
        }
    }, [isInView]);

    return (
        <Wrapper className={className}>
            {/* Elemento para acessibilidade */}
            <span className="sr-only">{text}</span>
            <motion.span
                ref={ref}
                aria-hidden
                initial="hidden"
                animate={controls}
                transition={{ staggerChildren: time }}
            >
                {textArray.map((line, lineIndex) => (
                    <span className="block" key={`line-${lineIndex}`}>
                        {line.split(" ").map((word, wordIndex) => (
                            <span className='inline-block' key={`word-${wordIndex}`}>
                                {word.split('').map((char, charIndex) => (
                                    <motion.span className="inline-block" variants={defaultAnimation} key={`char-${charIndex}`}>
                                        {char}
                                    </motion.span>
                                ))}
                                <span className='inline-block' key={`space-${wordIndex}`}>&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
}