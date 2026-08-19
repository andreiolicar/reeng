import aboutImage from '../assets/about/empreendimento-residencial-quem-somos.png'
import legacyImage from '../assets/about/luiz-ferreira-legado.png'
import { FiBookOpen, FiHome, FiMapPin, FiShield } from 'react-icons/fi'

const credentials = [
  {
    title: '+45 anos',
    description: 'Experiência em engenharia',
  },
  {
    title: 'Engenharia',
    description: 'Engenharia Civil e Operacional Civil — UMC',
  },
  {
    title: 'Especializações',
    description: 'Gerenciamento da Construção Civil e Planejamento — Poli-USP',
  },
  {
    title: 'Experiência aplicada',
    description: 'Edifícios com mais de 20 pavimentos, hospitais e infraestrutura',
  },
]

const technicalUpdates = [
  {
    title: 'Pilares e verificação da deslocabilidade em estruturas de concreto armado',
    institution: 'UNICAMP',
  },
  {
    title: 'Análise, cálculo e detalhamento de concreto armado assistido por computador',
    institution: 'UNICAMP',
  },
  {
    title: 'Projeto Estrutural em Concreto Armado',
    institution: 'USP',
  },
]

function About() {
  return (
    <section id="a-reeng" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <div className="grid gap-y-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-8">
          <div className="order-1 lg:col-start-2 lg:row-start-1" data-reveal="from-right">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
              Quem Somos
            </p>
            <h2 className="mt-5 max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-[3.25rem]">
              Uma atuação técnica, independente e integrada.
            </h2>
            <div className="mt-7 max-w-xl space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>
                A REENG atua como parceira técnica de incorporadores, investidores e empreendedores imobiliários, oferecendo análises, coordenação e consultoria especializada.
              </p>
              <p>
                O trabalho apoia decisões mais seguras, promove a integração dos projetos e contribui para reduzir riscos e agregar valor aos empreendimentos.
              </p>
            </div>
          </div>

          <figure className="relative order-2 aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-brand-100 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-full lg:aspect-auto" data-reveal="image">
            <img
              src={aboutImage}
              alt="Fachada de empreendimento residencial com varandas"
              width="721"
              height="802"
              className="size-full object-cover object-[center_42%]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-y-0 left-0 w-2 bg-brand-900 sm:w-3" aria-hidden="true" />
            <figcaption className="sr-only">Fotografia do acervo institucional da REENG.</figcaption>
          </figure>

          <div className="order-3 border-t border-brand-600 pt-6 lg:col-start-2 lg:row-start-2 lg:self-start" data-reveal="from-right">
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
                Com mais de 45 anos de experiência em engenharia, Walter Ferreira atua como Sócio e Responsável Técnico da REENG Projetos e Obras LTDA, reunindo experiência prática de campo e visão estratégica de empreendimento.
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

          <div className="mt-10" data-reveal>
            <div>
              <h4 className="text-lg leading-7 font-semibold text-brand-900">
                Atualizações
              </h4>
              <p className="mt-2 text-sm leading-6 text-muted">
                Formação continuada com ênfase em estruturas e concreto armado.
              </p>
            </div>

            <ul className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3" data-reveal="stagger">
              {technicalUpdates.map((update) => (
                <li key={update.title} className="border-t border-line pt-5" data-reveal-item>
                  <p className="text-sm leading-6 font-medium text-graphite sm:text-base sm:leading-7">
                    {update.title}
                  </p>
                  <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-brand-600 uppercase">
                    {update.institution}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <article
          className="group mt-16 overflow-hidden rounded-[1.5rem] border border-line bg-brand-100/30 shadow-[0_18px_55px_rgba(24,38,63,0.08)] sm:mt-20 lg:mt-24"
          aria-labelledby="family-legacy-title"
        >
          <div className="grid lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.45fr)] lg:items-stretch">
            <figure
              className="relative aspect-[4/5] min-h-0 overflow-hidden bg-brand-200 sm:aspect-[5/4] lg:h-full lg:aspect-auto"
              data-reveal="image"
            >
              <img
                src={legacyImage}
                alt="Retrato histórico de Luiz Ferreira"
                width="1086"
                height="1448"
                className="size-full object-cover object-[center_18%] transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.015]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-y-0 right-0 hidden w-px bg-white/40 lg:block" aria-hidden="true" />
              <figcaption className="sr-only">
                Luiz Ferreira, engenheiro civil e avô de Walter Ferreira.
              </figcaption>
            </figure>

            <div className="min-w-0 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-10" data-reveal="from-right">
              <p className="text-xs font-semibold tracking-[0.22em] text-brand-700 uppercase">
                Legado familiar
              </p>
              <h3
                id="family-legacy-title"
                className="mt-3 max-w-3xl text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-4xl lg:text-[2.4rem]"
              >
                Luiz Ferreira, uma inspiração que atravessa gerações
              </h3>
              <div className="mt-4 h-0.5 w-12 bg-brand-600" aria-hidden="true" />

              <div className="mt-5 max-w-3xl space-y-3 text-base leading-7 text-muted">
                <p>
                  A trajetória da REENG também carrega uma herança familiar profundamente ligada à engenharia. Luiz Ferreira, avô de Walter Ferreira, foi engenheiro civil formado em Coimbra e deixou sua contribuição em obras marcantes da história paulistana.
                </p>
                <p>
                  Foi um dos calculistas do Edifício Martinelli, o primeiro arranha-céu de São Paulo, e executou residências de alto padrão na Avenida Paulista, entre elas os casarões das famílias Matarazzo e Homem de Mello, ambos patrimônios históricos.
                </p>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4" data-reveal="stagger">
                <div className="flex min-h-20 items-center gap-3 rounded-xl border border-brand-900/15 bg-white/70 px-4 py-3 transition duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-brand-900/25" data-reveal-item>
                  <FiBookOpen className="size-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Formação</dt>
                    <dd className="text-sm leading-5 font-medium text-brand-900">Coimbra</dd>
                  </div>
                </div>
                <div className="flex min-h-20 items-center gap-3 rounded-xl border border-brand-900/15 bg-white/70 px-4 py-3 transition duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-brand-900/25" data-reveal-item>
                  <FiHome className="size-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Marco</dt>
                    <dd className="text-sm leading-5 font-medium text-brand-900">Edifício Martinelli</dd>
                  </div>
                </div>
                <div className="flex min-h-20 items-center gap-3 rounded-xl border border-brand-900/15 bg-white/70 px-4 py-3 transition duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-brand-900/25" data-reveal-item>
                  <FiMapPin className="size-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Local</dt>
                    <dd className="text-sm leading-5 font-medium text-brand-900">Avenida Paulista</dd>
                  </div>
                </div>
                <div className="flex min-h-20 items-center gap-3 rounded-xl border border-brand-900/15 bg-white/70 px-4 py-3 transition duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-brand-900/25" data-reveal-item>
                  <FiShield className="size-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Legado</dt>
                    <dd className="text-sm leading-5 font-medium text-brand-900">Patrimônio histórico</dd>
                  </div>
                </div>
              </dl>

              <blockquote className="mt-6 border-l-2 border-brand-600 pl-5 text-base leading-7 font-semibold tracking-[-0.01em] text-brand-900 sm:text-lg">
                Uma memória que conecta tradição, excelência técnica e compromisso com a engenharia ao longo das gerações.
              </blockquote>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About