import { FaWhatsapp } from 'react-icons/fa6'

function WhatsAppButton() {
  return (
    <a
      href="#contato"
      className="fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-3 border border-white/25 bg-brand-900 px-4 py-3 text-xs font-semibold tracking-[0.08em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-950 sm:right-6 sm:bottom-6 sm:px-5"
      aria-label="Ver dados de contato da REENG para atendimento por WhatsApp"
      title="Número principal do WhatsApp aguardando confirmação"
    >
      <FaWhatsapp className="size-5" aria-hidden="true" />
      WhatsApp
    </a>
  )
}

export default WhatsAppButton
