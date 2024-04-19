'use client'

import { useDebouncedCallback } from "use-debounce"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useQuery } from "./context/QueryContext"

export default function Search() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const [_, setQuery] = useQuery()

    const handleChange = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)

        setQuery(term)

        if (term) {
            params.set('query', term)
            replace(`${pathname}?${params.toString()}`)
            return
        }

        params.delete('query')
        replace(`${pathname}`)
    }, 1000)

    return (
        <div className="flex flex-wrap justify-center mb-8">
            <div className="max-w-96 w-full border-2 border-violet-900 rounded-full px-8 py-2 flex flex-wrap">
                <input type="text"
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Rechercher un pokemon..."
                    className="w-full bg-transparent focus:outline-none placeholder:text-violet-900 font-bold" />
            </div>
        </div>
    )
}