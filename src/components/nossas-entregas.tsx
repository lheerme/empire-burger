import phone from '../assets/phone.png'
import whatsappIcon from '../assets/whatsapp-icon-2.svg'
import scooterIcon from '../assets/scooter-icon.svg'
import iceCreamIcon from '../assets/ice-cream-icon.svg'
import ifoodIcon from '../assets/ifood-icon-2.svg'

export function NossasEntregas() {
  return (
    <section className="max-w-6xl w-full mx-auto px-2 mb-16 mt-40 flex items-center gap-8">
      <div className='relative flex items-center justify-center w-[570px]'>
        <div className="w-[570px] h-[308px] bg-beige border-radius-bullet" />
        <img 
          src={phone} 
          alt="Celular com um hamburger saltando da tela"
          className='absolute top-1/2 left-[44%] -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='w-full space-y-4'>
        <h2 className="font-lilita-one text-3xl text-title-black-38/90 uppercase">Nossas entregas</h2>
        <ul className='w-full flex flex-col gap-2'>
          <li className='bg-white shadow-lg hover:shadow-2xl hover:z-[1] hover:scale-[1.01] transition-transform rounded-md py-3.5 px-[22px] flex items-center gap-5 w-full'>
            <img src={whatsappIcon} alt="Ícone do Whatsapp" />
            <div className='w-[1px] h-11 bg-title-black-38/40' />
            <div>
              <h3 className='text-title-black-38/90 text-xl font-lilita-one uppercase'>Whatsapp</h3>
              <p className='text-title-black-38/70'>Vamos direto ao ponto, sem perder tempo!</p>
            </div>
          </li>
          <li className='bg-white shadow-lg hover:shadow-2xl hover:z-[1] hover:scale-[1.01] transition-transform rounded-md py-3.5 px-[22px] flex items-center gap-5 w-full'>
            <img src={scooterIcon} alt="Ícone do Whatsapp" />
            <div className='w-[1px] h-11 bg-title-black-38/40' />
            <div>
              <h3 className='text-title-black-38/90 text-xl font-lilita-one uppercase'>Entrega</h3>
              <p className='text-title-black-38/70'>Entregamos menos de 45 minutos na porta da sua casa!</p>
            </div>
          </li>
          <li className='bg-white shadow-lg hover:shadow-2xl hover:z-[1] hover:scale-[1.01] transition-transform rounded-md py-3.5 px-[22px] flex items-center gap-5 w-full'>
            <img src={iceCreamIcon} alt="Ícone do Whatsapp" />
            <div className='w-[1px] h-11 bg-title-black-38/40' />
            <div>
              <h3 className='text-title-black-38/90 text-xl font-lilita-one uppercase'>Sobremesa</h3>
              <p className='text-title-black-38/70'>Pedidos assima de 100 reais, ganham brindes.</p>
            </div>
          </li>
          <li className='bg-white shadow-lg hover:shadow-2xl hover:z-[1] hover:scale-[1.01] transition-transform rounded-md py-3.5 px-[22px] flex items-center gap-5 w-full'>
            <img src={ifoodIcon} alt="Ícone do Whatsapp" />
            <div className='w-[1px] h-11 bg-title-black-38/40' />
            <div>
              <h3 className='text-title-black-38/90 text-xl font-lilita-one uppercase'>iFood</h3>
              <p className='text-title-black-38/70'>Nossa loja é Top 1 da região!</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}