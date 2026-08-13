import aboutImage from '../assets/reeng-visao-integrada-empreendimento.jpeg'
import {
  LuBriefcaseBusiness,
  LuLayers3,
  LuLightbulb,
  LuShieldCheck,
  LuDraftingCompass,
} from 'react-icons/lu'

const principles = [
  { label: 'Independência técnica', icon: LuShieldCheck },
  { label: 'Experiência aplicada', icon: LuBriefcaseBusiness },
  { label: 'Visão integrada', icon: LuLayers3 },
  { label: 'Apoio à tomada de decisão', icon: LuLightbulb },
  { label: 'Engenharia consultiva especializada', icon: LuDraftingCompass },
]

function About() {
  return (
    <section id="a-reeng" className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:order-2 lg:col-span-3 lg:col-start-10 lg:justify-self-end" data-reveal="from-right">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
              Quem Somos
            </p>
          </div>

          <div className="lg:order-1 lg:col-span-8 lg:col-start-1" data-reveal>
            <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-6xl">
              Uma atuação técnica, independente e integrada.
            </h2>
            <div className="mt-8 grid gap-5 text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:grid-cols-2 lg:gap-10">
              <p>
                A REENGE atua como parceira técnica de incorporadores, investidores e empreendedores imobiliários, oferecendo análises, coordenação e consultoria especializada.
              </p>
              <p>
                O trabalho apoia decisões mais seguras, promove a integração dos projetos e contribui para reduzir riscos e agregar valor aos empreendimentos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid items-stretch gap-10 sm:mt-18 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-brand-100 lg:col-span-8" data-reveal="image">
            <img
              src={aboutImage}
              alt="Vista aérea de empreendimento do acervo institucional da REENGE"
              className="size-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-y-0 left-0 w-2 bg-brand-900 sm:w-3" aria-hidden="true" />
            <figcaption className="sr-only">Fotografia do acervo institucional da REENGE.</figcaption>
          </figure>

          <div className="flex flex-col justify-between lg:col-span-4" data-reveal="from-right">
            <p className="max-w-sm text-lg leading-8 text-graphite">
              Conhecimento técnico convertido em orientação clara ao longo do desenvolvimento do empreendimento.
            </p>

            <ul className="mt-8 border-t border-brand-900 lg:mt-12" data-reveal="stagger">
              {principles.map((principle) => {
                const Icon = principle.icon

                return (
                  <li
                    key={principle.label}
                    data-reveal-item
                    className="group flex items-center gap-5 border-b border-line py-4 transition-colors hover:border-brand-600"
                  >
                    <Icon
                      className="size-4 shrink-0 text-brand-600 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-brand-900">{principle.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
