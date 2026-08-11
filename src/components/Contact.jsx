import {
  LuBuilding2,
  LuFileText,
  LuMail,
  LuMapPin,
  LuMilestone,
  LuPhone,
  LuSend,
  LuUserRound,
} from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'

const fields = [
  { id: 'name', label: 'Nome', type: 'text', autoComplete: 'name', icon: LuUserRound },
  { id: 'phone', label: 'Telefone', type: 'tel', autoComplete: 'tel', icon: LuPhone },
  { id: 'email', label: 'E-mail', type: 'email', autoComplete: 'email', icon: LuMail },
  { id: 'development-type', label: 'Tipo de empreendimento', type: 'text', icon: LuBuilding2 },
  { id: 'project-stage', label: 'Estágio do projeto', type: 'text', icon: LuMilestone },
]

function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 bg-brand-900 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10" data-reveal>
        <div className="grid overflow-hidden border border-white/20 lg:grid-cols-12">
          <div className="px-6 py-10 text-white sm:px-10 sm:py-12 lg:col-span-5 lg:px-12 lg:py-16">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-100 uppercase">
              Contato
            </p>

            <h2 className="mt-8 text-4xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Fale com a REENG
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Envie as informações do empreendimento ou utilize um dos canais diretos de atendimento.
            </p>

            <dl className="mt-12 border-t border-white/25 sm:mt-16">
              <div className="grid gap-2 border-b border-white/15 py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-5">
                <dt className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.14em] text-white/50 uppercase">
                  <LuPhone className="size-3.5" aria-hidden="true" />
                  Telefone
                </dt>
                <dd className="flex flex-col items-start gap-2 text-sm font-semibold sm:text-base">
                  <a href="tel:+5519993057300" className="transition-colors hover:text-brand-100">
                    19 99305-7300
                  </a>
                  <a href="tel:+5511959664121" className="transition-colors hover:text-brand-100">
                    11 95966-4121
                  </a>
                </dd>
              </div>

              <div className="grid gap-2 border-b border-white/15 py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-5">
                <dt className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.14em] text-white/50 uppercase">
                  <LuMail className="size-3.5" aria-hidden="true" />
                  E-mail
                </dt>
                <dd className="min-w-0 text-sm font-semibold sm:text-base">
                  <a
                    href="mailto:walter@projetoseobras.com.br"
                    className="break-all transition-colors hover:text-brand-100"
                  >
                    walter@projetoseobras.com.br
                  </a>
                </dd>
              </div>

              <div className="grid gap-2 border-b border-white/15 py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-5">
                <dt className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.14em] text-white/50 uppercase">
                  <LuMapPin className="size-3.5" aria-hidden="true" />
                  Endereço
                </dt>
                <dd>
                  <address className="max-w-xs text-sm leading-6 font-medium not-italic text-white/85 sm:text-base sm:leading-7">
                    Alameda das Araucárias, 77 – Bairro do Bosque – Vinhedo/SP – CEP 13.283-548
                  </address>
                </dd>
              </div>

              <div className="grid gap-2 py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-5">
                <dt className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.14em] text-white/50 uppercase">
                  <FaWhatsapp className="size-3.5" aria-hidden="true" />
                  WhatsApp
                </dt>
                <dd className="text-sm leading-6 text-white/70">Número principal aguardando confirmação.</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white px-6 py-10 sm:px-10 sm:py-12 lg:col-span-7 lg:px-14 lg:py-16">
            <div className="flex items-end justify-between gap-5 border-b border-brand-900 pb-6">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-brand-900 sm:text-3xl">
                Conte sobre o empreendimento
              </h3>
              <span className="hidden text-[0.65rem] font-semibold tracking-[0.14em] text-muted uppercase sm:block">
                Formulário
              </span>
            </div>

            <form className="mt-8">
              <div className="grid gap-x-8 sm:grid-cols-2">
                {fields.map((field) => {
                  const Icon = field.icon

                  return (
                    <div key={field.id} className="border-b border-line py-5 focus-within:border-brand-900">
                    <label
                      htmlFor={field.id}
                        className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.12em] text-muted uppercase"
                    >
                        <Icon className="size-3.5" aria-hidden="true" />
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      className="mt-2 w-full bg-transparent py-1 text-base text-graphite outline-none"
                    />
                  </div>
                  )
                })}
              </div>

              <div className="border-b border-line py-5 focus-within:border-brand-900">
                <label
                  htmlFor="description"
                  className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.12em] text-muted uppercase"
                >
                  <LuFileText className="size-3.5" aria-hidden="true" />
                  Descrição
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  className="mt-3 w-full resize-y bg-transparent text-base leading-7 text-graphite outline-none"
                />
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-13 cursor-not-allowed items-center justify-center gap-3 bg-brand-900 px-7 py-3.5 text-sm font-semibold text-white opacity-55"
                >
                  <LuSend className="size-4" aria-hidden="true" />
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
