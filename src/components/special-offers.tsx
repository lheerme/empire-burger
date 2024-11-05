import meatBurger from '../assets/meat-burger-french-fries-spices.png'
import frenchFries from '../assets/french-fries-with-ketchup-and-burger-on-a-board.png'
import iceCream from '../assets/ice-cream.png'

export function SpecialOffers() {
  return (
    <section 
      id='offers'
      className="max-w-6xl w-full mx-auto px-6"
    >
      <h2 className="font-lilita-one text-2xl md:text-3xl text-title-black-38/90 uppercase">Ofertas especiais</h2>
      <p className="text-title-black-38/70">Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos mudando o nosso cardápio.</p>

      <div className='mt-4 grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 lg:gap-[30px]'>
        <div className="w-full max-w-[770px] h-[211px] md:h-[430px] relative group overflow-hidden rounded-2xl cursor-default md:row-span-2 md:col-span-2">
          <img
            src={meatBurger}
            alt="Hambúrguer Imperial com batata frita de R$ 49,50 por R$ 35,99"
            className='size-full object-cover absolute group-hover:scale-110 transition-transform'
          />

          <div className='size-full relative z-[1] flex justify-between py-4 px-5'>
            <div>
              <h3 className='font-lilita-one text-xl md:text-2xl text-white uppercase'>Burger imperial+batata</h3>
              <p className='text-white/70 text-lg'>250kg</p>
            </div>

            <p className='text-white/70 text-xs md:text-2xl self-end w-12 md:w-24'>Apenas <span className='text-white font-lilita-one text-xl md:text-[2.625rem]'>HOJE</span></p>
          </div>
        </div>

        <div className="w-full md:max-w-[370px] h-[211px] md:h-[200px] relative group overflow-hidden rounded-2xl cursor-default">
          <img
            src={frenchFries}
            alt="Batata frita de R$ 15,50 por R$ 11,99"
            className='size-full object-cover absolute group-hover:scale-110 transition-transform'
          />

          <div className='size-full relative z-[1] flex justify-between py-4 px-5'>
            <div>
              <h3 className='font-lilita-one text-xl md:text-2xl text-title-black-38/90 uppercase leading-none'>batata</h3>
              <p className='text-title-black-38/70 leading-none text-lg'>150kg</p>
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-[370px] h-[211px] md:h-[200px] relative group overflow-hidden rounded-2xl cursor-default">
          <img
            src={iceCream}
            alt="Sorvete de R$ 3,50 por R$ 2,50"
            className='size-full object-cover absolute group-hover:scale-110 transition-transform'
          />

          <div className='size-full relative z-[1] flex justify-between py-4 px-5'>
            <div>
              <h3 className='font-lilita-one text-xl md:text-2xl text-title-black-38/90 uppercase leading-none'>sorvete</h3>
              <p className='text-title-black-38/70 leading-none text-lg'>50kg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}