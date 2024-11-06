import logo from '../assets/empire-burger-logo-2.svg'
import iFoodLogo from '../assets/ifood-icon-3.svg'
import instagramLogo from '../assets/instagram-icon-2.svg'

export function Footer() {
  return (
    <footer className="w-full border-b-[1px] border-[#3C210C26]">
      <div className="max-w-6xl w-full mx-auto py-7 px-6 flex flex-col min-[880px]:flex-row items-center justify-between gap-3">
        <a href="#" className='block w-fit'>
          <img src={logo} alt="Empire Burger logo" />
        </a>
        <div className='w-full min-[880px]:hidden block h-px bg-title-black-38/15' />
        

        <nav className='min-[880px]:order-none order-last'>
          <ul className='flex flex-col min-[880px]:flex-row items-center gap-4'>
            <li className='text-brown text-lg hover:text-brown/80 hover:transition-all'>
              <a href="#home">Home</a>
            </li>
            <li className='text-brown text-lg hover:text-brown/80 hover:transition-all'>
              <a href="#offers">Promoção</a>
            </li>
            <li className='text-brown text-lg hover:text-brown/80 hover:transition-all'>
              <a href="#menu">Cardápio</a>
            </li>
            <li className='text-brown text-lg hover:text-brown/80 hover:transition-all'>
              <a href="#our-royalty">Cometários</a>
            </li>
            <li className='text-brown text-lg hover:text-brown/80 hover:transition-all'>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
        <div className='w-full min-[880px]:hidden block h-px bg-title-black-38/15 order-last' />
        
        <div className='flex items-center gap-3'>
          <a href="#" className='block w-fit hover:opacity-80 hover:transition-opacity'>
            <img src={iFoodLogo} alt="iFood logo" className='' />
          </a>
          <a href="#" className='block w-fit hover:opacity-80 hover:transition-opacity'>
            <img src={instagramLogo} alt="Instagram logo" />
          </a>
        </div>
        <div className='w-full min-[880px]:hidden block h-px bg-title-black-38/15' />
        
      </div>
      <div className='py-3 text-center'>
        <p className='text-sm text-[#020E1F]/30'>
          <span className='text-[#020E1F]/70 font-bold'><a href="https://github.com/lheerme" target='_blank'>2024 © EmpireBurger.</a></span> Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}