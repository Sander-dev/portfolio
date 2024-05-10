export default function Curriculo() {
    return (
        <div className="flex flex-col items-center w-full pt-12">
            <h1 className="text-6xl max-sm:text-4xl">FELIPE SANDER</h1>
            <div className="max-sm:flex-col flex sm:gap-20 xl:gap-28">
                <p className="text-cyan-500">(38) 99738-8178 </p>
                <p className="text-cyan-500">felipe.sander350@gmail.com</p>
            </div>
            <div className="flex flex-col mt-5 w-[80vw] xl:w-[40vw]">
                <h1 className="text-xl mb-4">OBJETIVOS</h1>
                <p className="text-white/70 max-sm:text-sm mb-4">Busco uma oportunidade para aplicar minha paixão e habilidades como desenvolvedor, enquanto
                    continuo a desenvolver meu conhecimento e experiência na área. Meu objetivo é não apenas
                    crescer dentro da empresa, mas também contribuir de forma significativa para projetos
                    essenciais, oferecendo soluções inovadoras com uma mentalidade jovem e impulsionando o
                    sucesso da equipe.</p>
                <h1 className="text-xl mb-4">FORMAÇÃO</h1>
                <h1 className="text-sm">2022 - 2025 | INSTUTO FEDERAL DO NORTE DE MINAS GERAIS</h1>
                <p className="text-white/70 mb-4">Bacharelado em Sistemas de Informação
                    <br />(IFNMG Campus Arinos)
                </p>
                <h1 className="text-xl mb-4">EXPERIÊNCIA</h1>
                <h1 className="text-sm">01/2024 - Presente | Voluntariado de aprendizado em desenvolvimento de software</h1>
                <p className="text-white/70 mb-4">Participei de um projeto colaborativo que reuniu profissionais experientes do mercado com
                    iniciantes para desenvolver alguns projetos em equipe. Utilizei tecnologias como ReactJS, Node.js
                    e frameworks como Next.js e Express, trabalhando dentro de uma metodologia ágil com sprints e
                    reuniões periódicas para feedback.
                </p>
                <div className="flex">
                    <div className="w-1/2">
                        <h1 className="text-xl mb-4">TECNOLOGIAS</h1>
                        <p className="text-white/70 mb-4">
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>Node.js</li>
                            <li>ExpressJS</li>
                            <li>NextJS</li>
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xl mb-4">PRINCIPAIS CURSOS</h1>
                        <p className="text-white/70 mb-4">
                            <li>JavaScript Puro – Danki Code</li>
                            <li>Node.js – Danki Code</li>
                            <li>HTML, CSS, JavaScript – Danki Code</li>
                            <li>Python – Danki Code</li>
                            <li>Web Design – Danki Code</li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
