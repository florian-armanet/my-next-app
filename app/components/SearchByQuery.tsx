'use client'

import { useDebouncedCallback } from "use-debounce"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useQuery } from "./context/QueryContext"
import { useEffect, useRef } from "react"

export default function SearchByQuery() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const [query, setQuery] = useQuery()
    const inputRef = useRef<HTMLInputElement>(null)
    const params = new URLSearchParams(searchParams)

    /**
     * 
     */
    const handleChange = useDebouncedCallback((term: string) => {
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
        setQuery('')

        params.delete('query')
        replace(`${pathname}`)
    }

    useEffect(() => {
        if (inputRef?.current) {
            inputRef.current.value = query
        };
    }, [query])

    useEffect(() => {
        if (params.get('query') && inputRef.current) {
            inputRef.current.value = params.get('query') as string
        }
    }, [])

    return (
        <div className="flex-flow-center mb-8">
            <div className="relative">
                <input type="text"
                    ref={inputRef}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Rechercher un pokemon..."
                    className="bg-transparent w-96 ring-inset ring-2 ring-primary-base focus:ring-4 transition-all rounded-full px-8 py-3 text-primary-base focus:outline-none placeholder:text-primary-base font-bold" />
                {query.length ?
                    <i onClick={handleReset} className="Icon-close text-violet-800 font-bold text-xl cursor-pointer absolute right-4 absolute-y-center"></i>
                    :
                    <i className="Icon-search text-violet-800 font-bold text-xl absolute right-4 absolute-y-center"></i>
                }
            </div>
        </div>
    )
}