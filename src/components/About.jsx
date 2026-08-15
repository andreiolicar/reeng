import aboutImage from '../assets/reeng-visao-integrada-empreendimento.jpeg'

const credentials = [
  {
    title: '+40 anos',
    description: 'Experiência em engenharia',
  },
  {
    title: 'Engenharia Civil',
    description: 'Universidade de Mogi das Cruzes — UMC',
  },
  {
    title: 'Especializações',
    description: 'Gerenciamento na Construção Civil e Técnicas de Planejamento — Poli-USP',
  },
  {
    title: 'Experiência aplicada',
    description: 'Infraestrutura, hospitais, habitação e empreendimentos residenciais',
  },
]

function About() {
  return (
    <section id="a-reeng" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <div className="grid gap-y-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-8">
          <div className="order-1 lg:col-start-2 lg:row-start-1" data-reveal="from-right">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
              Quem Somos
            </p>
            <h2 className="mt-5 max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-[3.25rem]">
              Uma atuação técnica, independente e integrada.
            </h2>
            <div className="mt-7 max-w-xl space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>
                A REENGE atua como parceira técnica de incorporadores, investidores e empreendedores imobiliários, oferecendo análises, coordenação e consultoria especializada.
              </p>
              <p>
                O trabalho apoia decisões mais seguras, promove a integração dos projetos e contribui para reduzir riscos e agregar valor aos empreendimentos.
              </p>
            </div>
          </div>

          <figure className="relative order-2 aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-brand-100 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:min-h-[34rem]" data-reveal="image">
            <img
              src={aboutImage}
              alt="Vista aérea de empreendimento do acervo institucional da REENGE"
              width="1280"
              height="720"
              className="size-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-y-0 left-0 w-2 bg-brand-900 sm:w-3" aria-hidden="true" />
            <figcaption className="sr-only">Fotografia do acervo institucional da REENGE.</figcaption>
          </figure>

          <div className="order-3 self-end border-t border-brand-600 pt-6 lg:col-start-2 lg:row-start-2" data-reveal="from-right">
            <p className="max-w-lg text-lg leading-8 font-medium tracking-[-0.01em] text-brand-900 sm:text-xl">
              Conhecimento técnico convertido em orientação clara ao longo do desenvolvimento do empreendimento.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-12 sm:mt-20 sm:pt-16 lg:mt-20 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4" data-reveal>
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
                Responsável técnico
              </p>
              <h3 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl">
                Walter Ferreira
              </h3>
              <p className="mt-5 max-w-md text-base leading-7 font-medium text-graphite sm:text-lg sm:leading-8">
                Engenheiro Civil | Consultoria, Análise Técnica e Gestão de Empreendimentos
              </p>
            </div>

            <div className="space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:col-span-7 lg:col-start-6" data-reveal="from-right">
              <p>
                Com mais de 40 anos de experiência em engenharia, Walter Ferreira atua como Sócio e Responsável Técnico da REENGE Engenharia Consultiva, reunindo experiência prática de campo e visão estratégica de empreendimento.
              </p>
              <p>
                Sua trajetória abrange obras hospitalares, infraestrutura, habitação, edifícios residenciais e sistemas construtivos industrializados, com atuação voltada à análise crítica, coordenação técnica, planejamento e apoio à tomada de decisões mais seguras.
              </p>
            </div>
          </div>

          <dl className="mt-12 grid gap-x-8 gap-y-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4" data-reveal="stagger">
            {credentials.map((credential) => (
              <div key={credential.title} className="border-t border-line pt-5" data-reveal-item>
                <dt className="text-lg leading-7 font-semibold text-brand-900">
                  {credential.title}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-muted">
                  {credential.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
