import { FaWhatsapp } from 'react-icons/fa6'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511959664121"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-entry fixed right-4 bottom-4 z-40 inline-flex size-12 items-center justify-center rounded-xl border border-white/25 bg-brand-900 text-xs font-semibold tracking-[0.08em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-950 sm:right-6 sm:bottom-6 sm:h-auto sm:w-auto sm:min-h-12 sm:gap-3 sm:px-5 sm:py-3"
      aria-label="Conversar com a REENGE pelo WhatsApp"
      title="Fale com a REENGE pelo WhatsApp"
    >
      <FaWhatsapp className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton
