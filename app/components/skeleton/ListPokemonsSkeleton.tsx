export default function ListPokemonsSkeleton() {
    const arrayFake = new Array(16).fill(null)

    return (
        <div
            className={`animate-pulse p-2 flex flex-wrap`}
        >
            {arrayFake.map((_, index) => {
                return (
                    <div className="basis-1/4 p-2 min-h-52" key={index}>
                        <div className="bg-violet-200 h-full rounded-xl p-4 flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-gray-400 mb-4" />
                            <div className="h-4 w-40 rounded-md bg-gray-400 text-sm font-medium mb-4" />
                            <div className="h-2 w-48 rounded-md bg-gray-400 text-sm font-medium mb-8" />
                            <div className="h-8 w-32 rounded-md bg-gray-400 text-sm font-medium" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}