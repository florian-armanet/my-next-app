"use client";

import { CSSTransition } from 'react-transition-group'
import { useState } from "react"

export default function TeamItemAdd() {
    // const [modalOpened, setModalOpened] = useState(false)

    // const handleClick = () => {
    //     setModalOpened(true)
    // }

    return (
        <>
            <span className='bg-gray-300 rounded-full h-40 w-40 m-2 flex flex-wrap items-center justify-center p-4 border-2 border-gray-400 overflow-hidden cursor-pointer text-6xl leading-none text-gray-500'>+</span>
            {/* <CSSTransition in={modalOpened} classNames="Animation-translateY" timeout={300} unmountOnExit appear>
                <div
                    className="z-max fixed inset-x-40 inset-y-24 flex flex-col bg-white shadow overflow-auto">
                    <div className="relative p-4 bg-primary-base/10 text-primary-base">
                        <span onClick={() => setModalOpened(false)}
                            className="Icon-close-light absolute left-4 text-xl absolute-y-center cursor-pointer">Fermer</span>
                        <p>Pokemons</p>
                    </div>
                </div>
            </CSSTransition> */}
        </>
    )
} 