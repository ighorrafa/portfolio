export default function Intro() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="container mx-auto text-white grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-8xl font-bold font-tomato mb-4">Ighor Rafael</h1>
                    <p className="text-lg font-montserrat">Entusiasta e desenvolvedor front-end apaixonado por <br></br> transformar conceitos em <span className="text-default">experiências</span> digitais memoráveis.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-24">
                    <div className="w-32 h-32 bg-white"></div>
                    <div className="w-32 h-32 rounded-full bg-white"></div>
                </div>
            </div>
        </div>
    )
}