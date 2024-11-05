import girlEatingHamburger from '../assets/girl-eating-hamburger-.png'
import { Button } from './button'

export function CustomerService() {
  return (
    <section className="max-w-6xl w-full mx-auto px-6 my-16 flex flex-col md:flex-row items-center gap-8">
      <img 
        src={girlEatingHamburger} 
        alt="Garota comendo um Hambúrguer com a frase 'Huuum que gostoso!!!' escrita em cima da cabeça"
        className='w-full max-w-[570px]'
      />
      <div className='flex flex-col justify-center w-full max-w-[470px]'>
        <h2 className="text-brown font-lilita-one text-2xl md:text-[2.563rem] md:leading-tight uppercase mb-2.5">Atendimento <mark className="text-inherit bg-yellow-layout px-3 md:-ml-3 py-0.5 rounded">personalizado</mark></h2>
        <p className="md:text-xl text-title-black-38/70">Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
        <Button 
          variant='primary' 
          size='default'
          className='mt-2'
        >Cardápio Imperial</Button>
      </div>
    </section>
  )
}