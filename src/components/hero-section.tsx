import burgerIcon from '../assets/burger-icon.svg'
import headsetIcon from '../assets/headset-icon.svg'
import scooterIcon from '../assets/scooter-icon.svg'
import { Button } from './button'

export function HeroSection() {
  return (
    <section 
      id='home'
      className="bg-[url('/src/assets/banner-mobile.png')] md:bg-[url('/src/assets/banner-hero.png')] bg-no-repeat bg-cover bg-center h-[855px] md:h-[545px] w-full min-[830px]:mb-32 mb-[280px] flex md:items-center py-20 md:py-0 relative"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col px-6">
        <p className="text-lg md:text-xl font-bold text-title-black-38/90">Uma nova experiência!</p>
        <h1 className="font-lilita-one text-5xl md:text-7xl text-yellow-layout">
          <span className="text-title-black-38/90">KING</span> BURGER
        </h1>
        <p className="md:text-xl text-title-black-38/70">Para quem tem um <mark className="text-inherit font-black bg-yellow-layout px-1 py-0.5 rounded">Apetite de um REI!</mark></p>
        <Button variant='primary' size='default' >Comprar Agora</Button>
      </div>

      <div className='absolute min-[830px]:-bottom-12 -bottom-56 left-1/2 -translate-x-1/2 w-full px-2 min-[370px]:px-8'>
        <div className="flex flex-col min-[830px]:flex-row items-center sm:items-start min-[830px]:items-center justify-between gap-4 w-full min-[460px]:min-w-[355px] min-[830px]:max-w-[970px] rounded-xl shadow-2xl bg-white py-6 px-8 min-[830px]:px-5 mx-auto">
          <div className="flex items-center gap-4">
            <img src={burgerIcon} alt="burger icon" />
            <div className='max-w-[170px] w-full'>
              <h3 className='text-title-black-38/90 font-lilita-one text-xl uppercase'>Artesanal</h3>
              <p className='text-title-black-38/70 opacity-70'>Nossas receitas são feitas com todo cuidado</p>
            </div>
          </div>
          <div className='w-full min-[830px]:w-px h-px min-[830px]:h-auto min-[830px]:self-stretch bg-[#492E1526]' />
          <div className="flex items-center gap-4">
            <img src={headsetIcon} alt="burger icon" />
            <div className='max-w-[170px] w-full'>
              <h3 className='text-title-black-38/90 font-lilita-one text-xl uppercase'>Atendimento</h3>
              <p className='text-title-black-38/70 opacity-70'>Totalmente personalizado</p>
            </div>
          </div>
          <div className='w-full min-[830px]:w-px h-px min-[830px]:h-auto min-[830px]:self-stretch bg-[#492E1526]' />
          <div className="flex items-center gap-4">
            <img src={scooterIcon} alt="burger icon" />
            <div className='max-w-[170px] w-full'>
              <h3 className='text-title-black-38/90 font-lilita-one text-xl uppercase'>DELIVERY Speed</h3>
              <p className='text-title-black-38/70 opacity-70'>Entregamos menos de 45 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}