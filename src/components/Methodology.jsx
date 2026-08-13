const steps = [
  {
    initial: 'C',
    title: 'Compreender',
    description: 'Analisamos os objetivos, necessidades e contexto do empreendimento.',
  },
  {
    initial: 'A',
    title: 'Avaliar',
    description: 'Realizamos análises técnicas e identificamos riscos, oportunidades e pontos de atenção.',
  },
  {
    initial: 'I',
    title: 'Integrar',
    description: 'Coordenamos informações e promovemos a compatibilização entre disciplinas.',
  },
  {
    initial: 'O',
    title: 'Orientar',
    description: 'Apresentamos soluções fundamentadas e apoiamos a tomada de decisões.',
  },
  {
    initial: 'A',
    title: 'Acompanhar',
    description: 'Mantemos o suporte técnico durante as etapas necessárias do empreendimento.',
  },
]

function Methodology() {
  return (
    <section id="metodologia" className="scroll-mt-20 bg-brand-900 py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:order-2 lg:col-span-3 lg:col-start-10 lg:justify-self-end" data-reveal="from-right">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-100 uppercase">
              Metodologia CAIOA
            </p>
          </div>

          <div className="lg:order-1 lg:col-span-8 lg:col-start-1" data-reveal>
            <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Um processo estruturado para orientar cada decisão.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Cinco etapas conectam análise, integração e acompanhamento em uma atuação técnica clara e consistente.
            </p>
          </div>
        </div>

        <ol className="mt-14 border-t border-white/30 sm:mt-18 lg:mt-24 lg:grid lg:grid-cols-5" data-reveal="stagger">
          {steps.map((step) => (
            <li
              key={step.title}
              data-reveal-item
              className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-b border-white/20 py-8 transition-colors hover:bg-white/[0.03] lg:block lg:border-r lg:border-b-0 lg:px-6 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span
                className="text-4xl leading-none font-semibold tracking-[-0.04em] text-white/20 lg:block lg:text-6xl"
                aria-hidden="true"
              >
                {step.initial}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] lg:mt-7">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65 lg:mt-5 lg:text-base lg:leading-7">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Methodology
