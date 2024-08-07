import { Carousel } from "flowbite-react";
import Link from "next/link";

const WorkSlider = () => {
  const projects = [
    { src: '/capizip.png', alt: 'Projeto 1', description: 'Encurtador de Link, onde quem encurtou o link pode ter acesso a informações sobre o link e quem o clicou (back-end desativada no momento)', link: 'https://capi-zip.vercel.app/' },
    { src: '/curarSaude.png', alt: 'Projeto 2', description: 'Meu primeiro emprego, site para obter pontos e troca-los por prêmios, os pontos são obtidos com postagem ou por assistir vídeos de outros criadores', link: 'https://curarsaude.com.br/' },
    { src: '/hero.png', alt: 'Projeto 3', description: 'Este projeto envolveu a criação de uma aplicação simples de listagem de heróis, sobre como consumir e integrar APIs externas no front-end usando React', link: 'https://hero-project-mu.vercel.app/' },
  ];

  return (
    <div className="h-full w-full">
      <Carousel pauseOnHover>
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <Link rel="noopener noreferrer" target="_blank" href={project.link}>
              <img className="object-cover w-full h-[90%]" src={project.src} alt={project.alt} />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WorkSlider;