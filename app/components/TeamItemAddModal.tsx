"use client";

import Search from "./Search";
import { useModal } from "./context/Modal";
import { useSearch } from "./context/Search";

export default function TeamItemAddModal() {
    const [_, setModalOpened] = useModal()
    const [searchValue] = useSearch()

    const handleCloseModal = () => {
        setModalOpened(false)
    }

    return (
        <div className="relative p-4 bg-primary-base/10 text-primary-base">
            <p>Pokemons</p>
            <i onClick={handleCloseModal}
                className="Icon-close absolute text-primary-base right-4 text-xl absolute-y-center cursor-pointer" />
            <Search />
        </div>
    )
} 