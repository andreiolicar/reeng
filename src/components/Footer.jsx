import reengWhiteLogo from '../assets/reenge-white.png'
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
    <footer className="border-t border-white/15 bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-24 sm:px-8 lg:px-10 lg:pb-20" data-reveal>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#inicio" className="inline-flex items-center" aria-label="REENG Engenharia Consultiva — início">
              <img
                src={reengWhiteLogo}
                alt="REENG Engenharia Consultiva"
                className="h-12 w-auto sm:h-14"
              />
            </a>
          </div>

          <address className="flex items-start gap-3 text-sm leading-6 not-italic text-white/65 lg:col-span-4">
            <LuMapPin className="mt-1 size-4 shrink-0" aria-hidden="true" />
            <span>
              Alameda das Araucárias, 77 – Bairro do Bosque
              <br />
              Vinhedo/SP – CEP 13.283-548
            </span>
          </address>

          <div className="flex flex-col items-start gap-2 text-sm font-medium text-white/75 lg:col-span-4 lg:items-end">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:justify-end">
              <LuPhone className="size-4 shrink-0 text-white/55" aria-hidden="true" />
              <a href="tel:+5519993057300" className="transition-colors hover:text-white">
                19 99305-7300
              </a>
              <a href="tel:+5511959664121" className="transition-colors hover:text-white">
                11 95966-4121
              </a>
            </div>
            <span className="flex items-center gap-3">
              <LuMail className="size-4 shrink-0 text-white/55" aria-hidden="true" />
              <a href="mailto:walter@projetoseobras.com.br" className="break-all transition-colors hover:text-white">
                walter@projetoseobras.com.br
              </a>
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-7 border-t border-white/15 pt-7 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-xs font-medium text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-xs text-white/45">
            © {currentYear} REENG Engenharia Consultiva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
