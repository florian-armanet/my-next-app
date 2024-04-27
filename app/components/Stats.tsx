"use client"

import { motion } from 'framer-motion';
import { Stats as TypeStats } from '../lib/definitions';

export default function Stats({ stats }: { stats: TypeStats }) {
    return (
        <ul className="flex flex-col mb-12">
            {Object.entries(stats).map(([statName, statValue], index) =>
                <li className="mb-4 text-xl" key={index}>
                    <span>{statName} : </span><span>{statValue}</span>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${statValue}%` }}
                        transition={{ ease: "easeInOut", duration: 1 }}
                        className='bg-violet-500 rounded h-4' />
                </li>
            )}
        </ul>
    )
}