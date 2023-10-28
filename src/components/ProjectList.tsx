"use client"
import AnimatedText from "@/components/AnimatedText";

export default function ProjectList() {
    return (
        <div className="relative z-10 min-h-[30vh] flex flex-column items-center justify-center">
            <AnimatedText
                text="Meus Projetos"
                el="h2"
                className="text-8xl font-bold font-tomato mb-4 text-black text-center"
            />
        </div>
    )
}