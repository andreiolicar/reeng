import { FaWhatsapp } from 'react-icons/fa6'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511959664121"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-entry fixed right-3 bottom-3 z-40 inline-flex size-11 items-center justify-center rounded-xl border border-white/25 bg-brand-900 text-xs font-semibold tracking-[0.08em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-950 sm:right-5 sm:bottom-5 xl:right-6 xl:bottom-6 xl:h-auto xl:w-auto xl:min-h-12 xl:gap-3 xl:px-5 xl:py-3"
      aria-label="Conversar com a REENG pelo WhatsApp"
      title="Fale com a REENG pelo WhatsApp"
    >
      <FaWhatsapp className="size-5" aria-hidden="true" />
      <span className="hidden xl:inline">WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton
