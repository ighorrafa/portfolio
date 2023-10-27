"use client"
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import AnimatedSquare from '@/components/AnimatedSquare'

export default function Intro() {


    return (
        <div className="fixed inset-0 w-100">
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div className="container mx-auto text-white grid grid-cols-1 lg:grid-cols-2">
                    <div className="ps-20">
                        <AnimatedText className="text-8xl font-bold font-tomato mb-4" text="Ighor Rafael" />
                        <motion.p
                            className="text-lg font-montserrat"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            Entusiasta e desenvolvedor front-end apaixonado por <br></br> transformar conceitos em <span className="text-default">experiências</span> digitais memoráveis.
                        </motion.p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-24">
                        <AnimatedSquare />
                        <div id='circle' className="w-32 h-32 rounded-full bg-gray-200 absolute left-[65%] top-[55%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}