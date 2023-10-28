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
                            <AnimatedText className="text-8xl font-bold font-tomato mb-4" text="Ighor Rafael" el="h1" />
                            <motion.p
                                className="text-lg font-montserrat"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                Entusiasta e desenvolvedor front-end apaixonado por <br></br> transformar conceitos em <span className="text-default">experiências</span> digitais memoráveis.
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex flex-col items-center justify-center gap-24"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
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