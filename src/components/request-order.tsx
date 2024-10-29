import phoneIcon from '../assets/phone-icon.svg'
import { Button } from './button'

export function RequestOrder() {
  return (
    <section className="max-w-6xl w-full mx-auto mt-32 mb-16 px-2">
      <div className='bg-red-layout w-full rounded-md flex items-center gap-4 py-3.5 px-6'>
        <img 
          src={phoneIcon} 
          alt="Ícone de um celular"
          className='size-[94px]'
        />
        <div className='w-[1px] h-20 bg-title-black-38/40' />
        <div className='w-full max-w-[470px]'>
          <h2 className='text-2xl text-title-black-38/70 font-lilita-one uppercase'>faça o seu pedido agora mesmo!</h2>
          <p className='text-white/90 '>Venha saborear a melhor experiência de hamburguenses artesanal do Empires Burger, com temática medieval!</p>
        </div>
        <Button 
          variant='secondary' 
          size='sm'
          className='ml-auto'
        >
          Solicitar Pedido
        </Button>
      </div>
    </section>
  )
}