"use client";

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import Search from "./Search";
// import ListPokemons from "./ListPokemons";

export default function TeamItemAdd() {
    const [modalOpened, setModalOpened] = useState(false)

    const handleClick = () => {
        setModalOpened(true)
    }

    return (
        <>
            <span
                onClick={handleClick}
                className='bg-gray-300 rounded-full h-32 lg:h-40 w-32 lg:w-40 m-2 flex flex-wrap items-center justify-center p-4 border-2 border-gray-400 overflow-hidden cursor-pointer text-6xl leading-none text-gray-500'>+</span>
            <AnimatePresence>
                {modalOpened && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="z-max fixed inset-x-40 inset-y-24 flex flex-col bg-white border-4 border-primary-base rounded-lg shadow overflow-auto">
                    <div className="relative p-4 bg-primary-base/10 text-primary-base">
                        <p>Pokemons</p>
                        <i onClick={() => setModalOpened(false)}
                            className="Icon-close absolute text-primary-base right-4 text-xl absolute-y-center cursor-pointer" />
                        {/* <Search/> */}
                        {/* <ListPokemons pokemons={pokemons} /> */}
                    </div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
} 