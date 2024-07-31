'use client'

// components
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from "framer-motion";

// next pathname
import { usePathname } from 'next/navigation'

// variants
import { fadeIn } from '../variants';

export default function Home() {

  const pathname = usePathname()
  return (
    <main className="bg-primary/60 h-full overflow-hidden relative">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-28 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            className="h1">
            Portifólio <br />{' '}
            <span className="text-accent">Felipe Sander</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4">
            Neste portfólio, você encontrará uma amostra do meu trabalho e dos projetos nos quais estive envolvido. Estou sempre aberto a novas oportunidades e desafios, e estou ansioso para colaborar em projetos que me permitam aplicar minhas habilidades e contribuir para o sucesso da equipe.
            Obrigado por visitar meu portfólio. Estou à disposição para conversar e discutir como podemos trabalhar juntos para alcançar nossos objetivos comuns.
          </motion.p>


          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            className="xl:flex max-xl:hidden"
          >
            <div className="flex justify-center xl:justify-start relative z-40">
              <ProjectsBtn />
            </div>
          </motion.div>

        </div>
      </div>
      {/* image */}
      <div className='w-full h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-nome xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        {/* particles */}

        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[4%]'>
          <Avatar />
        </motion.div>


      </div>
    </main>
  );
};
