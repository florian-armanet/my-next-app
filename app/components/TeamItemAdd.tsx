"use client";

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TeamItemAdd() {
    const [modalOpened, setModalOpened] = useState(false)

    const handleClick = () => {
        setModalOpened(true)
    }

    return (
        <>
            <span
                onClick={handleClick}
                className='bg-gray-300 rounded-full h-40 w-40 m-2 flex flex-wrap items-center justify-center p-4 border-2 border-gray-400 overflow-hidden cursor-pointer text-6xl leading-none text-gray-500'>+</span>
            <AnimatePresence>
                {modalOpened && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="z-max fixed inset-x-40 inset-y-24 flex flex-col bg-white border-4 border-violet-900 rounded-lg shadow overflow-auto">
                    <div className="relative p-4 bg-primary-base/10 text-primary-base">
                        <i onClick={() => setModalOpened(false)}
                            className="Icon-close absolute text-violet-900 right-4 text-xl absolute-y-center cursor-pointer" />
                        <p>Pokemons</p>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
} 