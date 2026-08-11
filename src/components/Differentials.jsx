import {
  LuCircleCheckBig,
  LuClipboardCheck,
  LuDraftingCompass,
  LuHandshake,
  LuShieldCheck,
  LuWorkflow,
} from 'react-icons/lu'

const differentials = [
  { label: 'Independência técnica', icon: LuShieldCheck },
  { label: 'Engenharia consultiva especializada', icon: LuDraftingCompass },
  { label: 'Integração entre projetos', icon: LuWorkflow },
  { label: 'Conformidade normativa', icon: LuClipboardCheck },
  { label: 'Atendimento personalizado', icon: LuHandshake },
  { label: 'Apoio à tomada de decisão', icon: LuCircleCheckBig },
]

const complementaryPrinciples = ['Experiência prática', 'Prevenção de riscos', 'Visão integrada']

function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10" data-reveal>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:order-2 lg:col-span-3 lg:col-start-10 lg:justify-self-end">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
              Diferenciais
            </p>
          </div>

          <div className="lg:order-1 lg:col-span-8 lg:col-start-1">
            <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-6xl">
              Critério técnico que fortalece o empreendimento.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              Uma atuação independente, especializada e próxima, orientada por clareza técnica em todas as etapas necessárias.
            </p>
          </div>
        </div>

        <ol className="mt-14 border-t border-brand-900 sm:mt-18 lg:mt-24">
          {differentials.map((differential) => {
            const Icon = differential.icon

            return (
              <li
                key={differential.label}
                className="group grid grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-4 border-b border-line py-6 transition-colors hover:bg-canvas sm:grid-cols-[4rem_minmax(0,1fr)_3rem] sm:py-8 lg:grid-cols-[7rem_minmax(0,1fr)_5rem] lg:py-9"
              >
                <Icon
                  className="size-5 text-brand-600 transition-transform duration-200 group-hover:translate-x-1 sm:size-6"
                  aria-hidden="true"
                />
              <span className="text-2xl leading-tight font-semibold tracking-[-0.025em] text-brand-900 sm:text-3xl lg:text-4xl">
                  {differential.label}
              </span>
              <span className="hidden h-px bg-line sm:block" aria-hidden="true" />
              </li>
            )
          })}
        </ol>

        <div className="mt-10 border-l-2 border-brand-900 pl-5 sm:mt-12 sm:flex sm:items-start sm:justify-between sm:gap-10 sm:pl-7">
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
            Princípios complementares
          </p>
          <ul className="mt-5 flex flex-col gap-3 text-sm font-semibold text-graphite sm:mt-0 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-x-8 sm:gap-y-3">
            {complementaryPrinciples.map((principle) => (
              <li key={principle} className="flex items-center gap-3">
                <span className="size-1 bg-brand-600" aria-hidden="true" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Differentials
