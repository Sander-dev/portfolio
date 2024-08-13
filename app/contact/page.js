'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen p-4">
            <motion.h1
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                className="text-center text-2xl md:text-4xl font-bold space-y-2">
                <span className="text-accent block">Felipe Sander</span>
                <span className="block">felipe.sander350@gmail.com</span>
                <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-accent block hover:underline"
                    href={'https://github.com/Sander-dev/'}>
                    github.com/Sander-dev
                </Link>
                <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block hover:underline"
                    href={'https://www.linkedin.com/in/felipe-sander/'}>
                    linkedin.com/in/felipe-sander
                </Link>
            </motion.h1>
        </div>
    );
}
