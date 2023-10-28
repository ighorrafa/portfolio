"use client"
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import AnimatedSquare from '@/components/AnimatedSquare'

export default function Intro() {
    return (
        <div className="min-h-[170vh]">
            <div className="fixed inset-0 w-100">
                <div className="flex min-h-screen flex-col items-center justify-center">
                    <div className="container mx-auto text-white grid grid-cols-1 lg:grid-cols-2">
                        <div className="ps-20">
                            <AnimatedText
                                className="text-8xl font-bold font-tomato mb-4"
                                text="Ighor Rafael"
                                el="h1"
                            />

                            <AnimatedText
                                className="text-lg font-montserrat max-w-xl"
                                text="Entusiasta e desenvolvedor front-end apaixonado por transformar conceitos em experiências digitais memoráveis."
                                stagger={0.01}
                                delay={1}
                            />
                        </div>
                        <motion.div
                            className="flex flex-col items-center justify-center gap-24"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5 }}
                        >
                            <AnimatedSquare />
                            <div id='circle' className="w-32 h-32 rounded-full bg-gray-200 absolute left-[65%] top-[55%]"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}