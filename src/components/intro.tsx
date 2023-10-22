"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Intro() {
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
        <div className="fixed inset-0 w-100">
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div className="container mx-auto text-white grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-8xl font-bold font-tomato mb-4">Ighor Rafael</h1>
                        <p className="text-lg font-montserrat">Entusiasta e desenvolvedor front-end apaixonado por <br></br> transformar conceitos em <span className="text-default">experiências</span> digitais memoráveis.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-24">
                        <motion.div
                            id='square'
                            className="bg-white absolute"
                            initial={{ width: 128, height: 128, top: '30%', left: '65%' }}
                            animate={controls}
                        />
                        <div id='circle' className="w-32 h-32 rounded-full bg-white absolute left-[65%] top-[55%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}