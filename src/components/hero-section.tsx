import burgerIcon from '../assets/burger-icon.svg'
import headsetIcon from '../assets/headset-icon.svg'
import scooterIcon from '../assets/scooter-icon.svg'

export function HeroSection() {
  return (
    <section className="bg-[url('/src/assets/banner-hero.png')] bg-no-repeat bg-cover bg-center h-[545px] w-full flex items-center relative">
      <div className="max-w-6xl w-full mx-auto flex flex-col px-2">
        <p className="text-xl font-bold text-text-layout/90">Uma nova experiência!</p>
        <h1 className="font-lilita-one text-7xl text-yellow-layout">
          <span className="text-text-layout/90">KING</span> BURGER
        </h1>
        <p className="text-xl text-text-layout/70">Para quem tem um <mark className="text-inherit font-black bg-yellow-layout px-1 py-0.5 rounded">Apetite de um REI!</mark></p>
        <button className="px-5 py-2.5 text-white bg-red-layout w-fit rounded text-xl font-bold hover:opacity-90 hover:transition-opacity mt-5">Comprar Agora</button>
      </div>

      <div className="flex items-center justify-between gap-4 w-full max-w-[970px] rounded-xl shadow-xl bg-white py-6 px-5 absolute -bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <img src={burgerIcon} alt="burger icon" />
          <div className='max-w-[170px] w-full'>
            <h3 className='text-text-layout/90 font-lilita-one text-xl'>Artesanal</h3>
            <p className='text-text-layout/70 opacity-70'>Nossas receitas são feitas com todo cuidado</p>
          </div>
        </div>

        <div className='w-[1px] self-stretch bg-[#492E1526]' />

        <div className="flex items-center gap-4">
          <img src={headsetIcon} alt="burger icon" />
          <div className='max-w-[170px] w-full'>
            <h3 className='text-text-layout/90 font-lilita-one text-xl'>Atendimento</h3>
            <p className='text-text-layout/70 opacity-70'>Totalmente personalizado</p>
          </div>
        </div>

        <div className='w-[1px] self-stretch bg-[#492E1526]' />

        <div className="flex items-center gap-4">
          <img src={scooterIcon} alt="burger icon" />
          <div className='max-w-[170px] w-full'>
            <h3 className='text-text-layout/90 font-lilita-one text-xl'>DELIVERY Speed</h3>
            <p className='text-text-layout/70 opacity-70'>Entregamos menos de 45 minutos</p>
          </div>
        </div>
      </div>
    </section>
  )
}