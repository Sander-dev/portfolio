import { Carousel, DarkThemeToggle } from "flowbite-react";
import Link from "next/link";

const WorkSlider = () => {
  const projects = [
    { src: '/capizip.png', alt: 'Projeto 1', description: 'Encurtador de Link, onde quem encurtou o link pode ter acesso a informações sobre o link e quem o clicou (back-end desativada no momento)', link: 'https://capi-zip.vercel.app/' },
    { src: '/curarSaude.png', alt: 'Projeto 2', description: 'Meu primeiro emprego, site para obter pontos e troca-los por prêmios, os pontos são obtidos com postagem ou por assistir vídeos de outros criadores', link: 'https://curarsaude.com.br/' },
    { src: '/hero.png', alt: 'Projeto 3', description: 'Este projeto envolveu a criação de uma aplicação simples de listagem de heróis, sobre como consumir e integrar APIs externas no front-end usando React', link: 'https://hero-project-mu.vercel.app/' },
  ];

  return (
    <div className="h-full w-full">
      <Carousel slideInterval="5000" theme={{
        control: {
          base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500',
          icon: 'h-4 w-4 text-white',
        }
      }}>
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <Link rel="noopener noreferrer" target="_blank" href={project.link}>
              <img className="object-cover w-full h-full" src={project.src} alt={project.alt} />
            </Link>
          </div>
        ))}
      </Carousel>
    </div >
  );
};

export default WorkSlider;