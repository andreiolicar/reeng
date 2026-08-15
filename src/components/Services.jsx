import { LuArrowRight, LuBuilding2, LuClipboardCheck, LuHandshake, LuMap, LuMessagesSquare, LuNetwork } from 'react-icons/lu'
import atpImage from '../assets/services/analise-tecnica-projetos-atp-reeng.jpg'
import managementImage from '../assets/services/gerenciamento-coordenacao-projetos-reeng.jpeg'

const primaryServices = [
  {
    icon: LuNetwork,
    image: managementImage,
    imageAlt: 'Vista aérea de edificação hospitalar em contexto urbano',
    imageWidth: 500,
    imageHeight: 494,
    title: 'Gerenciamento e Coordenação de Projetos',
    description:
      'Integração entre disciplinas, coordenação técnica e acompanhamento contínuo do desenvolvimento, promovendo compatibilização, apoio à execução e redução de inconsistências entre os projetos.',
  },
  {
    icon: LuClipboardCheck,
    image: atpImage,
    imageAlt: 'Modelo estrutural tridimensional de edifício em concreto armado',
    imageWidth: 1339,
    imageHeight: 1037,
    title: 'ATP — Análise Técnica de Projetos',
    description:
      'Avaliação técnica independente dos projetos, com verificação de conformidade normativa — incluindo os requisitos da ABNT NBR 6118:2026 —, consistência das soluções e oportunidades de melhoria antes da execução.',
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
    title: 'Incorporação Imobiliária',
    description:
      'Assessoria técnica a incorporações de terceiros e participação no desenvolvimento de incorporações próprias ou em parceria com investidores e empreendedores.',
  },
  {
    icon: LuMap,
    title: 'Desenvolvimento de Loteamentos',
    description:
      'Consultoria e assessoria a terceiros, além do desenvolvimento de loteamentos em parceria com investidores, empreendedores ou proprietários de terrenos.',
  },
]

function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-canvas py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:order-2 lg:col-span-3 lg:col-start-10 lg:justify-self-end" data-reveal="from-right">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
              Serviços
            </p>
          </div>

          <div className="lg:order-1 lg:col-span-8 lg:col-start-1" data-reveal>
            <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-6xl">
              Engenharia consultiva em cada decisão relevante.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              Cinco frentes de atuação para analisar, integrar e orientar o desenvolvimento técnico de empreendimentos.
            </p>
          </div>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[1.25rem] border border-brand-900 sm:mt-18 lg:mt-24 lg:grid-cols-2" data-reveal="stagger">
          {primaryServices.map((service, index) => (
            <article
              key={service.title}
              data-reveal-item
              className={`group relative isolate flex min-h-[28rem] flex-col overflow-hidden bg-brand-900 px-7 py-8 sm:min-h-[30rem] sm:px-9 sm:py-10 lg:min-h-[34rem] lg:px-11 lg:py-11 ${
                index === 0
                  ? 'border-b border-white/30 lg:border-r lg:border-b-0'
                  : ''
              }`}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                width={service.imageWidth}
                height={service.imageHeight}
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
                  <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 sm:mt-18 lg:mt-20" data-reveal>
          <p className="mb-5 text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
            Serviços complementares
          </p>
          <div className="border-t border-line" data-reveal="stagger">
            {complementaryServices.map((service) => (
              <article
                key={service.title}
                data-reveal-item
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

          <aside
            className="group relative isolate mt-10 overflow-hidden rounded-[1.25rem] bg-brand-900 px-6 py-9 text-white sm:px-9 sm:py-11 lg:px-12 lg:py-12"
            aria-labelledby="partnership-cta-title"
            data-reveal
          >
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
              <span className="absolute -top-28 right-16 size-72 rounded-full border border-white/[0.07]" />
              <span className="absolute top-0 right-24 h-full w-px bg-white/[0.06]" />
              <span className="absolute top-1/2 right-0 h-px w-72 bg-white/[0.06]" />
            </div>

            <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-14">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/60 uppercase">
                  Parcerias e novos negócios
                </p>
                <h3
                  id="partnership-cta-title"
                  className="mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.025em] text-white sm:text-4xl"
                >
                  Tem um terreno ou oportunidade de incorporação?
                </h3>
                <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  A REENG avalia projetos para desenvolvimento em parceria com proprietários de terrenos, investidores e empreendedores, incluindo incorporações imobiliárias e loteamentos.
                </p>
                <p className="mt-5 text-sm leading-6 font-medium text-white/65">
                  Incorporações imobiliárias <span aria-hidden="true">•</span> Loteamentos <span aria-hidden="true">•</span> Parcerias com investidores
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 lg:min-w-[16rem] lg:items-end">
                <span
                  className="grid size-12 place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition-transform duration-300 motion-safe:group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  <LuHandshake className="size-6" />
                </span>
                <a
                  href="#contato"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition-all duration-200 hover:-translate-y-px hover:bg-brand-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none"
                >
                  Apresente sua oportunidade
                  <LuArrowRight className="size-4 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Services
