export default function ListPokemonsSkeleton() {
    const arrayFake = new Array(9).fill(null)
    return (
        <div
            className={`animate-pulse p-2`}
        >
            {arrayFake.map((_, index) => {
                return (
                    <div className="flex flex-wrap items-center py-2" key={index}>
                        <div className="h-12 w-12 rounded-full bg-gray-300" />
                        <div className="ml-2 h-16 flex-1 rounded-md bg-gray-300 text-sm font-medium" />
                    </div>
                )
            })}
        </div>
    )
}