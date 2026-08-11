import { useState } from 'react'
import reengBlueLogo from '../assets/reenge-blue.png'

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#a-reeng' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        <a
          href="#inicio"
          className="flex items-center"
          aria-label="REENG Engenharia Consultiva — início"
          onClick={closeMenu}
        >
          <img
            src={reengBlueLogo}
            alt="REENG Engenharia Consultiva"
            className="h-10 w-auto sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-graphite transition-colors duration-200 hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="border border-brand-900 px-5 py-2.5 text-sm font-semibold text-brand-900 transition-all duration-200 hover:-translate-y-px hover:bg-brand-900 hover:text-white"
          >
            Contato
          </a>
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center text-brand-900 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-px w-full bg-current transition-transform duration-200 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-200 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-line bg-white px-5 py-5 sm:px-8 lg:hidden"
          aria-label="Navegação mobile"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line py-3.5 text-base font-medium text-graphite"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-5 bg-brand-900 px-5 py-3.5 text-center text-sm font-semibold text-white"
              onClick={closeMenu}
            >
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
