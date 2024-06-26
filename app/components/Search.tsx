'use client'

import { useEffect, useRef } from "react"
import { useDebouncedCallback } from "use-debounce"
import { useSearch } from "./context/Search"

export default function SearchByQuery() {
    const [searchValue, setSearchValue] = useSearch()
    const inputRef = useRef<HTMLInputElement>(null)

    /**
     * 
     */
    const handleChange = useDebouncedCallback((term: string) => {
        setSearchValue(term)
    }, 1000)

    /**
     * 
     */
    const handleReset = () => {
        setSearchValue('')
    }

    useEffect(() => {
        if (inputRef?.current) {
            inputRef.current.value = searchValue
        };
    }, [searchValue])

    return (
        <div className="flex-flow-center mb-8">
            <div className="relative">
                <input type="text"
                    ref={inputRef}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Rechercher un pokemon..."
                    className="bg-transparent w-96 ring-inset ring-2 ring-primary-base focus:ring-4 transition-all rounded-full px-8 py-3 text-primary-base focus:outline-none placeholder:text-primary-base font-bold" />
                {searchValue.length ?
                    <i onClick={handleReset} className="Icon-close text-violet-800 font-bold text-xl cursor-pointer absolute right-4 absolute-y-center"></i>
                    :
                    <i className="Icon-search text-violet-800 font-bold text-xl absolute right-4 absolute-y-center"></i>
                }
            </div>
        </div>
    )
}