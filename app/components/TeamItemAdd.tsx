"use client";

// import { AnimatePresence, motion } from "framer-motion";
// import TeamItemAddModal from "./TeamItemAddModal";
// import { useModal } from "./context/Modal";
import SearchProvider from "./context/Search";
// import ListPokemons from "./ListPokemons";

export default function TeamItemAdd() {
    // const [modalOpened, setModalOpened] = useModal()

    // const handleOpenModal = () => {
    //     setModalOpened(true)
    // }

    return (
        <SearchProvider searchValue="">
            <span
                // onClick={handleOpenModal}
                className='bg-gray-300 rounded-full h-32 lg:h-40 w-32 lg:w-40 m-2 flex flex-wrap items-center justify-center p-4 border-2 border-gray-400 overflow-hidden text-6xl leading-none text-gray-500'>
                    <i className="Icon-pets text-6xl"/>
                </span>
            {/* <AnimatePresence>
                {modalOpened && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="z-max fixed inset-x-40 inset-y-24 flex flex-col bg-white border-4 border-primary-base rounded-lg shadow overflow-auto">
                    <TeamItemAddModal />
                </motion.div>}
            </AnimatePresence> */}
        </SearchProvider>
    )
} 