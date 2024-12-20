export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <div className="absolute whitespace-nowrap overflow-hidden flex items-center h-full w-full -z-10">
                <span className="animate-move-left">
                    <div className="text-center text-9xl text-transparent font-bold text-stroke-3 text-stroke-gray-600 -rotate-45 uppercase">
                        ChungZZ
                    </div>
                </span>
            </div>
            <div className="text-8xl font-bold flex items-center justify-center text-center h-full w-full ">
                Hello World
            </div>
        </div>
    );
}
