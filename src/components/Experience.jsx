import projectImage01 from '../assets/projects/projeto-provisorio-01.jpeg'
import projectImage02 from '../assets/projects/projeto-provisorio-02.jpeg'
import projectImage03 from '../assets/projects/projeto-provisorio-03.jpeg'
import projectImage04 from '../assets/projects/projeto-provisorio-04.jpeg'
import projectImage05 from '../assets/projects/projeto-provisorio-05.jpeg'
import projectImage06 from '../assets/projects/projeto-provisorio-06.jpeg'
import projectImage07 from '../assets/projects/projeto-provisorio-07.jpeg'

const projects = [
  {
    title: 'Projeto 01',
    category: 'Imagem provisória',
    image: projectImage01,
    imageAlt: 'Edifício residencial contemporâneo com varandas',
  },
  {
    title: 'Projeto 02',
    category: 'Imagem provisória',
    image: projectImage02,
    imageAlt: 'Edifício contemporâneo em fase de construção',
  },
  {
    title: 'Projeto 03',
    category: 'Imagem provisória',
    image: projectImage03,
    imageAlt: 'Empreendimento contemporâneo com fachada envidraçada',
  },
  {
    title: 'Projeto 04',
    category: 'Imagem provisória',
    image: projectImage04,
    imageAlt: 'Estrutura vertical em execução com equipamentos de obra',
  },
  {
    title: 'Projeto 05',
    category: 'Imagem provisória',
    image: projectImage05,
    imageAlt: 'Edifício em execução envolvido por andaimes',
  },
  {
    title: 'Projeto 06',
    category: 'Imagem provisória',
    image: projectImage06,
    imageAlt: 'Estrutura de edifício em construção sob céu azul',
  },
  {
    title: 'Projeto 07',
    category: 'Imagem provisória',
    image: projectImage07,
    imageAlt: 'Obra vertical com estrutura metálica e guindaste',
  },
]

const projectColumns = [
  { layout: 'tall', projects: [projects[0]] },
  { layout: 'tall', projects: [projects[1]] },
  { layout: 'stacked', projects: [projects[2], projects[3]] },
  { layout: 'tall', projects: [projects[4]] },
  { layout: 'stacked', projects: [projects[5], projects[6]] },
]

const heightClasses = {
  tall: 'h-[32rem] sm:h-[36rem]',
  compact: 'h-[13rem] sm:h-[14rem]',
  medium: 'h-[17.5rem] sm:h-[20.5rem]',
}

function ProjectCard({ project, size, duplicate }) {
  return (
    <article
      className={`project-card group relative isolate overflow-hidden rounded-[1.25rem] bg-brand-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 ${heightClasses[size]}`}
      tabIndex={duplicate ? -1 : 0}
    >
      <img
        src={project.image}
        alt={duplicate ? '' : project.imageAlt}
        className="project-card__image absolute inset-0 size-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" aria-hidden="true" />

      <div className="project-card__caption absolute inset-x-5 bottom-5 z-10 text-white sm:inset-x-6 sm:bottom-6">
        <h3 className="text-2xl leading-tight font-semibold tracking-[-0.025em]">{project.title}</h3>
        <p className="mt-1 text-sm leading-5 text-white/75 sm:text-base">{project.category}</p>
      </div>

      <div className="project-card__hover absolute inset-0 z-20 flex flex-col items-center justify-center bg-brand-900/92 px-6 text-center text-white">
        <h3 className="text-2xl leading-tight font-semibold tracking-[-0.025em] sm:text-3xl">{project.title}</h3>
        <p className="mt-2 text-sm text-white/75 sm:text-base">{project.category}</p>
      </div>
    </article>
  )
}

function ProjectGroup({ duplicate = false }) {
  return (
    <div className="projects-marquee__group flex shrink-0 gap-4 sm:gap-6" aria-hidden={duplicate || undefined}>
      {projectColumns.map((column, columnIndex) => (
        <div
          key={`${column.layout}-${columnIndex}`}
          className="w-[78vw] max-w-[21.5rem] shrink-0 sm:w-[21.5rem] lg:w-[23rem] lg:max-w-none"
        >
          {column.layout === 'tall' ? (
            <ProjectCard project={column.projects[0]} size="tall" duplicate={duplicate} />
          ) : (
            <div className="grid gap-4 sm:gap-6">
              <ProjectCard project={column.projects[0]} size="compact" duplicate={duplicate} />
              <ProjectCard project={column.projects[1]} size="medium" duplicate={duplicate} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 overflow-hidden bg-canvas pt-20 pb-0 sm:pt-24 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10" data-reveal>
        <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
          Experiência aplicada em cada projeto
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-6xl">
          Projetos que traduzem conhecimento técnico em prática.
        </h2>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted">
          Uma composição dinâmica para apresentar diferentes escalas de empreendimento e a atuação técnica da REENGE ao longo de seu desenvolvimento.
        </p>
      </div>

      <div className="projects-marquee mt-14 sm:mt-18 lg:mt-24" aria-label="Galeria contínua de projetos" data-reveal="fade">
        <div className="projects-marquee__track">
          <ProjectGroup />
          <ProjectGroup duplicate />
        </div>
      </div>

    </section>
  )
}

export default Experience
