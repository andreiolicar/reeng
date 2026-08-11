import { LuBuilding2, LuClipboardCheck, LuMap, LuMessagesSquare, LuNetwork } from 'react-icons/lu'
import atpImage from '../assets/experiencia-levantamento-aereo-reeng.jpeg'
import managementImage from '../assets/reeng-visao-integrada-empreendimento.jpeg'

const primaryServices = [
  {
    icon: LuNetwork,
    image: managementImage,
    imageAlt: 'Vista aérea de empreendimento do acervo institucional da REENG',
    title: 'Gerenciamento e Coordenação de Projetos',
    description:
      'Integração entre disciplinas, coordenação técnica e acompanhamento do desenvolvimento dos projetos.',
  },
  {
    icon: LuClipboardCheck,
    image: atpImage,
    imageAlt: 'Levantamento aéreo com marcações técnicas do acervo institucional da REENG',
    title: 'ATP — Análise Técnica de Projetos',
    description:
      'Avaliação técnica independente, verificando conformidade normativa, consistência das soluções e oportunidades de melhoria antes da execução.',
  },
]

const complementaryServices = [
  {
    icon: LuMessagesSquare,
    title: 'Consultoria em Engenharia',
    description:
      'Estudos técnicos, pareceres, revisões de projetos e suporte especializado para decisões fundamentadas.',
  },
  {
    icon: LuBuilding2,
    title: 'Assessoria à Incorporação Imobiliária',
    description:
      'Suporte técnico ao desenvolvimento do empreendimento, desde os estudos iniciais até a coordenação dos projetos.',
  },
  {
    icon: LuMap,
    title: 'Desenvolvimento de Loteamentos',
    description:
      'Consultoria técnica para planejamento, coordenação e implantação de empreendimentos urbanísticos.',
  },
]

function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-canvas py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10" data-reveal>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:order-2 lg:col-span-3 lg:col-start-10 lg:justify-self-end">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
              Serviços
            </p>
          </div>

          <div className="lg:order-1 lg:col-span-8 lg:col-start-1">
            <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-6xl">
              Engenharia consultiva em cada decisão relevante.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              Cinco frentes de atuação para analisar, integrar e orientar o desenvolvimento técnico de empreendimentos.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-y border-brand-900 sm:mt-18 lg:mt-24 lg:grid-cols-2">
          {primaryServices.map((service, index) => (
            <article
              key={service.title}
              className={`group relative isolate flex min-h-[28rem] flex-col overflow-hidden bg-brand-900 px-7 py-8 sm:min-h-[30rem] sm:px-9 sm:py-10 lg:min-h-[34rem] lg:px-11 lg:py-11 ${
                index === 0
                  ? 'border-b border-white/30 lg:border-r lg:border-b-0'
                  : ''
              }`}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out motion-safe:lg:group-hover:scale-[1.035]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-brand-900/70 transition-colors duration-500 ease-out lg:group-hover:bg-brand-900/62" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-950 via-brand-900/35 to-transparent" />

              <div className="relative z-10 flex h-full flex-1 flex-col text-white">
                <service.icon className="size-6 text-white/80" aria-hidden="true" />
                <div className="mt-auto pt-20">
                  <h3 className="max-w-lg text-3xl leading-tight font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8 ${
                      index === 0 ? 'sm:max-w-[25rem]' : ''
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 sm:mt-18 lg:mt-20">
          <p className="mb-5 text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
            Serviços complementares
          </p>
          <div className="border-t border-line">
            {complementaryServices.map((service) => (
              <article
                key={service.title}
                className="group grid gap-3 border-b border-line py-7 transition-colors hover:border-brand-600 sm:grid-cols-[3rem_minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-start sm:gap-7 sm:py-8 lg:grid-cols-[4rem_minmax(18rem,0.85fr)_minmax(0,1.15fr)]"
              >
                <service.icon
                  className="size-5 text-brand-600 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
                <h3 className="text-xl leading-7 font-semibold text-brand-900 sm:text-2xl">{service.title}</h3>
                <p className="max-w-2xl text-base leading-7 text-muted sm:pl-5">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
