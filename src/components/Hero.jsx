import heroImage from '../assets/hero/empreendimento-residencial-reeng.jpg'
import { LuArrowRight, LuBuilding2, LuClipboardCheck, LuNetwork } from 'react-icons/lu'

const specialties = [
  { icon: LuNetwork, label: 'Gerenciamento e Coordenação de Projetos' },
  { icon: LuClipboardCheck, label: 'ATP — Análise Técnica de Projetos' },
  { icon: LuBuilding2, label: 'Incorporações Imobiliárias' },
]

function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24 bg-white">
      <div className="site-container grid min-h-[calc(100svh-4.5rem)] lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)]">
        <div className="flex flex-col justify-center py-10 sm:py-14 lg:pr-16 xl:pr-24">
          <div className="mb-7 text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase sm:mb-9 lg:mb-7" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Engenharia consultiva
          </div>

          <h1 className="max-w-4xl text-[clamp(2.75rem,7vw,5.6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-brand-900" data-reveal style={{ '--reveal-delay': '140ms' }}>
            Inteligência técnica para decisões seguras.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:mt-9 sm:text-xl sm:leading-9 lg:mt-7" data-reveal style={{ '--reveal-delay': '220ms' }}>
            Parceria técnica para apoiar decisões, integrar projetos e agregar valor a empreendimentos com clareza e visão técnica.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center lg:mt-9" data-reveal style={{ '--reveal-delay': '300ms' }}>
            <a
              href="#contato"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-brand-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-brand-950 sm:px-7"
            >
              Fale com a REENG
              <LuArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#servicos"
              className="inline-flex min-h-13 items-center justify-center rounded-xl border border-line px-6 py-3.5 text-sm font-semibold text-graphite transition-all duration-200 hover:-translate-y-px hover:border-brand-700 hover:text-brand-900 sm:px-7"
            >
              Conheça nossos serviços
            </a>
          </div>

          <div className="mt-8 border-t border-line pt-5 sm:mt-12 sm:pt-6 lg:mt-8" data-reveal style={{ '--reveal-delay': '380ms' }}>
            <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.15em] text-muted uppercase">
              Principais especialidades
            </p>
            <ul className="grid gap-3 text-lg leading-7 font-medium text-graphite">
              {specialties.map((specialty) => (
                <li key={specialty.label} className="flex items-center gap-3">
                  <specialty.icon className="size-6 shrink-0 text-brand-600" aria-hidden="true" />
                  <span>{specialty.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="relative min-h-64 overflow-hidden rounded-b-[1.25rem] bg-brand-900 sm:min-h-96 lg:min-h-0" data-reveal="image" style={{ '--reveal-delay': '180ms' }}>
          <img
            src={heroImage}
            alt="Empreendimento residencial vertical acompanhado pela REENG"
            width="1537"
            height="1023"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-900/12" aria-hidden="true" />
          <div className="absolute inset-y-0 left-0 w-2 bg-brand-900 sm:w-3" aria-hidden="true" />
          <figcaption className="sr-only">Empreendimento residencial do acervo institucional da REENG.</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
