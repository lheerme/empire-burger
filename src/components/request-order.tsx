import phoneIcon from '../assets/phone-icon.svg'
import { Button } from './button'

export function RequestOrder() {
  return (
    <section id="contact" className="max-w-6xl w-full mx-auto mt-32 mb-16 px-6">
      <div className="bg-red-layout w-full rounded-md flex flex-col md:flex-row items-center gap-4 py-3.5 px-6">
        <img
          src={phoneIcon}
          alt="Ícone de um celular"
          className="size-[94px]"
        />
        <div className="w-full md:w-px h-px md:h-20 bg-title-black-38/40" />
        <div className="w-full max-w-[470px] text-center md:text-start">
          <h2 className="text-lg md:text-2xl text-title-black-38/70 font-lilita-one uppercase">
            faça o seu pedido agora mesmo!
          </h2>
          <p className="text-white/90">
            Venha saborear a melhor experiência de hamburguenses artesanal do{' '}
            <span className="font-bold">Empires Burger</span>, com temática
            medieval!
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="md:ml-auto w-full md:w-auto mt-0"
        >
          Solicitar Pedido
        </Button>
      </div>
    </section>
  )
}
