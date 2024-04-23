'use client'

import { useDebouncedCallback } from "use-debounce"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useQuery } from "./context/QueryContext"
import { useEffect, useRef } from "react"

export default function Search() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const [query, setQuery] = useQuery()
    const inputRef = useRef<HTMLInputElement>(null)

    /**
     * 
     */
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

    /**
     * 
     */
    const handleReset = () => {
        const params = new URLSearchParams(searchParams)

        setQuery('')

        params.delete('query')
        replace(`${pathname}`)
    }

    useEffect(() => {
        if (inputRef?.current?.value) {
            inputRef.current.value = query
        };
    }, [query])

    return (
        <div className="flex flex-wrap justify-center mb-8">
            <div className="max-w-96 w-full border-2 border-violet-900 rounded-full px-8 py-2 flex flex-wrap items-center">
                <input type="text"
                    ref={inputRef}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Rechercher un pokemon..."
                    className="w-full bg-transparent text-violet-900 focus:outline-none placeholder:text-violet-900 font-bold flex-1" />
                {(!!query.length) && <i onClick={handleReset} className="Icon-close text-violet-800 font-bold text-xl cursor-pointer"></i>}
            </div>
        </div>
    )
}