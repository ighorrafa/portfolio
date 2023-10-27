import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedSquare() {
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimation();

    const handleScroll = () => {
        const newScrollY = window.scrollY;
        setScrollY(newScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Defina a faixa de scroll onde a animação deve ocorrer
        const startScroll = 100; // Ponto de partida da animação
        const endScroll = 500; // Ponto de término da animação

        // Garanta que o valor de scrollY esteja dentro da faixa
        const clampedScrollY = Math.min(Math.max(scrollY, startScroll), endScroll);

        // Obtém as dimensões máximas do viewport
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;

        // Calcula o tamanho com base no scroll dentro da faixa especificada
        const newWidth = 128 + ((clampedScrollY - startScroll) * (maxWidth - 128) / (endScroll - startScroll));
        const newHeight = 128 + ((clampedScrollY - startScroll) * (maxHeight - 128) / (endScroll - startScroll));

        // Calcula as novas posições de top e left
        const newTop = (clampedScrollY - startScroll) * (0 - 30) / (endScroll - startScroll) + 30;
        const newLeft = (clampedScrollY - startScroll) * (0 - 65) / (endScroll - startScroll) + 65;

        // Anima o tamanho, top e left do quadrado
        controls.start({ width: newWidth, height: newHeight, top: `${newTop}%`, left: `${newLeft}%` });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY, controls]);

    return (
        <motion.div
            id='square'
            className="bg-gray-200 absolute"
            initial={{ width: 128, height: 128, top: '30%', left: '65%' }}
            animate={controls}
        />
    )
}