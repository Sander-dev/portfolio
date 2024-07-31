'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <motion.h1
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                animate='show'
                className="h2">
                <span className="text-accent">Felipe Sander</span> <br />
                <span>felipe.sander350@gmail.com</span> <br />
                <Link rel="noopener noreferrer" target="_blank" className="text-accent" href={'https://github.com/Sander-dev/'}>github.com/Sander-dev</Link> <br />
                <Link rel="noopener noreferrer" target="_blank" href={'https://www.linkedin.com/in/felipe-sander/'}>linkedin.com/in/felipe-sander</Link>
            </motion.h1>
        </div>
    )
}