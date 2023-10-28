import { motion, useInView } from 'framer-motion';
import { useRef } from 'react'

type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
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
}: AnimatedTextProps) {
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 1 })

    return (
        <Wrapper className={className}>
            {/* Elemento para acessibilidade */}
            <span className="sr-only">{text}</span>
            <motion.span
                ref={ref}
                aria-hidden
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ staggerChildren: 0.07 }}
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