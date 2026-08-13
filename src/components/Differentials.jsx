import apoioTomadaDecisaoIcon from '../assets/icons/apoio-tomada-decisao.png'
import atendimentoPersonalizadoIcon from '../assets/icons/atendimento-personalizado.png'
import conformidadeNormativaIcon from '../assets/icons/conformidade-normativa.png'
import engenhariaConsultivaIcon from '../assets/icons/engenharia-consultiva-especializada.png'
import independenciaTecnicaIcon from '../assets/icons/independencia-tecnica.png'
import integracaoProjetosIcon from '../assets/icons/integracao-entre-projetos.png'

const differentials = [
  { label: 'Independência técnica', image: independenciaTecnicaIcon },
  {
    label: 'Engenharia consultiva especializada',
    image: engenhariaConsultivaIcon,
  },
  { label: 'Integração entre projetos', image: integracaoProjetosIcon },
  { label: 'Conformidade normativa', image: conformidadeNormativaIcon },
  { label: 'Atendimento personalizado', image: atendimentoPersonalizadoIcon },
  { label: 'Apoio à tomada de decisão', image: apoioTomadaDecisaoIcon },
]

function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="text-center" data-reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
            Diferenciais
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-6xl">
            Critério técnico que fortalece o empreendimento.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted">
            Uma atuação independente, especializada e próxima, orientada por clareza técnica em todas as etapas necessárias.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 sm:mt-18 sm:grid-cols-2 lg:mt-20 xl:grid-cols-3" data-reveal="stagger">
          {differentials.map((differential) => (
            <li
              key={differential.label}
              data-reveal-item
              className="group grid min-h-28 grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-5 rounded-[1.25rem] border border-line bg-white p-5 transition-colors duration-300 ease-out hover:border-brand-900 hover:bg-brand-900"
            >
              <span
                className="grid size-[4.5rem] place-items-center rounded-2xl border border-line bg-brand-100/60 transition-colors duration-300 ease-out group-hover:border-white group-hover:bg-white"
                aria-hidden="true"
              >
                <img
                  src={differential.image}
                  alt=""
                  className="size-10 object-contain"
                />
              </span>
              <span className="text-lg leading-6 font-semibold text-brand-900 transition-colors duration-300 ease-out group-hover:text-white sm:text-xl sm:leading-7">
                {differential.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Differentials
