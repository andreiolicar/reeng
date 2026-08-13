import { LuArrowRight } from 'react-icons/lu'
import preFooterImage from '../assets/pre-footer-reeng.png'

function PreFooter() {
  return (
    <section className="bg-canvas px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div
        className="relative isolate mx-auto flex min-h-[24rem] max-w-7xl items-center justify-center overflow-hidden rounded-[1.25rem] bg-brand-900 px-6 py-16 sm:px-10 lg:min-h-[26rem] lg:px-16"
        data-reveal="image"
      >
        <img
          src={preFooterImage}
          alt="Composição de edifício, projetos técnicos, obra e acompanhamento de engenharia"
          className="absolute inset-0 -z-20 size-full object-cover object-[72%_center] sm:object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-brand-900/80" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-b from-brand-950/15 via-transparent to-brand-950/45"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-4xl text-center text-white" data-reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/75 uppercase">
            Inteligência técnica para decisões seguras
          </p>
          <h2 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Clareza técnica para avançar com segurança.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Converse com a REENGE sobre os desafios técnicos do seu empreendimento.
          </p>
          <a
            href="mailto:walter@projetoseobras.com.br"
            className="mt-8 inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-900 transition-all duration-200 hover:-translate-y-px hover:bg-brand-100"
          >
            Fale com a REENGE
            <LuArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default PreFooter
