import heroImage from '../assets/hero-empreendimento-reeng.jpeg'
import { LuArrowRight } from 'react-icons/lu'

function Hero() {
  return (
    <section id="inicio" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] lg:px-10">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24 lg:pr-16 xl:pr-24">
          <div className="mb-7 text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase sm:mb-9" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Engenharia consultiva
          </div>

          <h1 className="max-w-4xl text-[clamp(2.75rem,7vw,5.6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-brand-900" data-reveal style={{ '--reveal-delay': '140ms' }}>
            Inteligência técnica para decisões seguras.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:mt-9 sm:text-xl sm:leading-9" data-reveal style={{ '--reveal-delay': '220ms' }}>
            Parceria técnica para apoiar decisões, integrar projetos e agregar valor a empreendimentos com clareza e visão do todo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center" data-reveal style={{ '--reveal-delay': '300ms' }}>
            <a
              href="#contato"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-brand-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-brand-950 sm:px-7"
            >
              Fale com a REENGE
              <LuArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#servicos"
              className="inline-flex min-h-13 items-center justify-center rounded-xl border border-line px-6 py-3.5 text-sm font-semibold text-graphite transition-all duration-200 hover:-translate-y-px hover:border-brand-700 hover:text-brand-900 sm:px-7"
            >
              Conheça nossos serviços
            </a>
          </div>

          <div className="mt-12 border-t border-line pt-6 sm:mt-16 sm:pt-7" data-reveal style={{ '--reveal-delay': '380ms' }}>
            <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.15em] text-muted uppercase">
              Principais especialidades
            </p>
            <div className="grid gap-3 text-sm leading-6 font-medium text-graphite md:grid-cols-[max-content_minmax(0,1fr)] md:gap-7">
              <p className="md:whitespace-nowrap">Gerenciamento e Coordenação de Projetos</p>
              <p>ATP — Análise Técnica de Projetos</p>
            </div>
          </div>
        </div>

        <figure className="relative min-h-80 overflow-hidden rounded-b-[1.25rem] bg-brand-900 sm:min-h-112 lg:min-h-0" data-reveal="image" style={{ '--reveal-delay': '180ms' }}>
          <img
            src={heroImage}
            alt="Empreendimento vertical fotografado para o acervo institucional da REENGE"
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-900/12" aria-hidden="true" />
          <div className="absolute inset-y-0 left-0 w-2 bg-brand-900 sm:w-3" aria-hidden="true" />
          <figcaption className="sr-only">Fotografia do acervo institucional da REENGE.</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
