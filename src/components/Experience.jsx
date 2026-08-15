import residentialCommonAreaImage from '../assets/projects/area-comum-empreendimento-residencial.jpg'
import nossoTetoImage from '../assets/projects/conjunto-habitacional-nosso-teto-braganca-paulista.jpg'
import hospitalAerialImage from '../assets/projects/edificacao-hospitalar-vista-aerea.jpg'
import residentialImage from '../assets/projects/empreendimento-residencial-multifamiliar.jpg'
import territorialStudyImage from '../assets/projects/estudos-territoriais-implantacao-urbana.jpg'
import hospitalFacadeImage from '../assets/projects/fachada-edificacao-hospitalar.jpg'
import sportsInfrastructureImage from '../assets/projects/infraestrutura-esportiva-ginasio.jpg'
import hospitalRenderImage from '../assets/projects/projeto-edificacao-hospitalar-render-arquitetonico.jpg'

const featuredProject = {
  title: 'Conjunto Habitacional Nosso Teto, Bragança Paulista',
  category: 'Experiência documentada',
  description:
    'Empreendimento habitacional com 900 casas. Após o terceiro mês de execução, a obra alcançou ritmo de seis casas por dia, apoiado pela fabricação de blocos e outros elementos pré-moldados no próprio canteiro.',
  image: nossoTetoImage,
  imageAlt: 'Vista aérea do Conjunto Habitacional Nosso Teto em Bragança Paulista',
}

const projects = [
  {
    title: 'Empreendimento residencial multifamiliar',
    category: 'Edificação residencial',
    image: residentialImage,
    imageAlt: 'Torres de empreendimento residencial multifamiliar vistas a partir da rua',
    layout: 'sm:col-span-2 lg:col-span-2',
    aspect: 'aspect-[16/10]',
  },
  {
    title: 'Área comum de empreendimento residencial',
    category: 'Espaços de convivência',
    image: residentialCommonAreaImage,
    imageAlt: 'Área comum com playground em empreendimento residencial multifamiliar',
    layout: 'lg:row-span-2',
    aspect: 'aspect-[4/5]',
  },
  {
    title: 'Projeto de edificação hospitalar',
    category: 'Estudo arquitetônico',
    image: hospitalRenderImage,
    imageAlt: 'Render arquitetônico de edificação hospitalar',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Fachada de edificação hospitalar',
    category: 'Infraestrutura hospitalar',
    image: hospitalFacadeImage,
    imageAlt: 'Fachada de edificação hospitalar com acesso principal',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Edificação hospitalar em contexto urbano',
    category: 'Implantação urbana',
    image: hospitalAerialImage,
    imageAlt: 'Vista aérea de edificação hospitalar em área urbana',
    layout: 'lg:col-span-2',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Infraestrutura esportiva',
    category: 'Equipamento de uso coletivo',
    image: sportsInfrastructureImage,
    imageAlt: 'Interior de ginásio coberto com quadra esportiva',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Estudos territoriais e implantação urbana',
    category: 'Leitura territorial',
    image: territorialStudyImage,
    imageAlt: 'Vista aérea de área urbana e área verde para estudo de implantação',
    layout: 'sm:col-span-2 lg:col-span-3',
    aspect: 'aspect-[16/10] sm:aspect-[16/7]',
  },
]

function ProjectCard({ project }) {
  return (
    <article
      className={`experience-project group relative isolate overflow-hidden rounded-[1.25rem] bg-brand-900 lg:h-full lg:aspect-auto ${project.layout ?? ''} ${project.aspect}`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className="experience-project__image absolute inset-0 size-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-brand-950/90 via-brand-900/10 to-transparent"
        aria-hidden="true"
      />
      <div className="experience-project__content absolute inset-x-5 bottom-5 z-10 text-white sm:inset-x-6 sm:bottom-6">
        <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-white/70 uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 max-w-md text-2xl leading-tight font-semibold tracking-[-0.025em]">
          {project.title}
        </h3>
      </div>
    </article>
  )
}

function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 bg-canvas pt-20 pb-0 sm:pt-24 lg:pt-28">
      <div className="site-container">
        <div className="text-center" data-reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
            Experiência aplicada em cada projeto
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-6xl">
            Projetos que traduzem conhecimento técnico em prática.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted">
            Registros de diferentes escalas e aplicações da engenharia, apresentados com a clareza técnica que orienta a atuação da REENG.
          </p>
        </div>

        <article
          className="experience-project group mt-14 grid overflow-hidden rounded-[1.25rem] bg-brand-900 text-white sm:mt-18 lg:mt-24 lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.55fr)]"
          data-reveal="image"
        >
          <div className="relative min-h-80 overflow-hidden sm:min-h-[28rem] lg:min-h-[32rem]">
            <img
              src={featuredProject.image}
              alt={featuredProject.imageAlt}
              className="experience-project__image absolute inset-0 size-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-brand-950/90 via-brand-900/25 to-transparent"
              aria-hidden="true"
            />
            <div className="experience-project__content absolute inset-x-7 bottom-7 z-10 sm:inset-x-10 sm:bottom-10 lg:inset-x-12 lg:bottom-12">
              <h3 className="max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">
                {featuredProject.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-center px-7 py-9 sm:px-10 sm:py-12 lg:px-12">
            <p className="text-xs font-semibold tracking-[0.16em] text-white/65 uppercase">
              {featuredProject.category}
            </p>
            <p className="mt-6 text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              {featuredProject.description}
            </p>
          </div>
        </article>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:auto-rows-[20rem] lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
