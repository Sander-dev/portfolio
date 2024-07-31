'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

export default function Work() {
  const projects = [
    { src: '/capizip.png', alt: 'Projeto 1', link: 'https://capi-zip.vercel.app/' },
    { src: '/curarSaude.png', alt: 'Projeto 2', link: 'https://curarsaude.com.br/' },
    { src: '/hero.png', alt: 'Projeto 3', link: 'https://hero-project-mu.vercel.app/' },
  ];

  return (
    <div className="flex flex-col w-full h-full items-center max-xl:pb-[80px]">
      <motion.h1
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        className="h1 m-4">
        Projetos
      </motion.h1>
      <div className="flex flex-wrap w-[98%] lg:w-5/6 bg-slate-900 rounded-t-md p-4 gap-4 justify-center overflow-y-auto h-full">
        {projects.map((project, index) => (
          <Link rel="noopener noreferrer" target="_blank" key={index} href={project.link}>
            <div className="w-[480px] h-[300px] overflow-hidden rounded-md">
              <Image
                src={project.src}
                width={480}
                height={300}
                alt={project.alt}
                className='object-cover w-full h-full'
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
