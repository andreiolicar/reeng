import reengBlueLogo from '../assets/reenge-blue.png'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'

const footerNavigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#a-reeng' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contato" className="scroll-mt-20 border-t border-line bg-white text-brand-900">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-24 sm:px-8 sm:pt-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(16rem,1.15fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-14" data-reveal="stagger">
          <div data-reveal-item>
            <a href="#inicio" className="inline-flex items-center" aria-label="REENGE Engenharia Consultiva — início">
              <img
                src={reengBlueLogo}
                alt="REENGE Engenharia Consultiva"
                className="h-12 w-auto sm:h-14"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
              Inteligência técnica para decisões seguras.
            </p>
          </div>

          <div data-reveal-item>
            <p className="text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase">
              Endereço
            </p>
            <address className="mt-5 flex items-start gap-4 text-sm leading-6 not-italic text-muted">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <LuMapPin className="size-4" aria-hidden="true" />
              </span>
              <span>
                Alameda das Araucárias, 77
                <br />
                Bairro do Bosque – Vinhedo/SP
                <br />
                CEP 13.283-548
              </span>
            </address>
          </div>

          <div data-reveal-item>
            <p className="text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase">
              Contato
            </p>
            <div className="mt-5 space-y-4 text-sm font-medium text-graphite">
              <div className="flex items-start gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <LuPhone className="size-4" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5 pt-0.5">
                  <a href="tel:+5519993057300" className="transition-colors hover:text-brand-700">
                    19 99305-7300
                  </a>
                  <a href="tel:+5511959664121" className="transition-colors hover:text-brand-700">
                    11 95966-4121
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <LuMail className="size-4" aria-hidden="true" />
                </span>
                <a
                  href="mailto:walter@projetoseobras.com.br"
                  className="min-w-0 break-all pt-2 transition-colors hover:text-brand-700"
                >
                  walter@projetoseobras.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-7 border-t border-line pt-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center" data-reveal>
          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-xs font-medium text-muted transition-colors hover:text-brand-900">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-xs text-muted">
            © {currentYear} REENGE Engenharia Consultiva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
