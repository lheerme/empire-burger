import logo from '../assets/empire-burger-logo.svg'
import iFoodLogo from '../assets/ifood-icon.svg'
import instagramLogo from '../assets/intagram-icon.svg'
import whatsappLogo from '../assets/whatsapp-icon.svg'

export function Header() {
  return (
    <header className="py-1 backdrop-blur fixed w-full border-b-[1px] border-[#3C210C26] z-[1]">
      <div className="max-w-6xl w-full mx-auto py-1 px-2 flex items-center justify-between">
        <a href="#" className='block w-fit'>
          <img src={logo} alt="Empire Burger logo" />
        </a>

        <nav>
          <ul className='flex items-center gap-4'>
            <li className='text-title-black-87 text-lg font-bold hover:text-title-black-87 hover:transition-colors'>
              <a href="#">Home</a>
            </li>
            <li className='text-title-black-60 text-lg hover:text-title-black-87 hover:transition-colors'>
              <a href="#">Promoção</a>
            </li>
            <li className='text-title-black-60 text-lg hover:text-title-black-87 hover:transition-colors'>
              <a href="#">Cardápio</a>
            </li>
            <li className='text-title-black-60 text-lg hover:text-title-black-87 hover:transition-colors'>
              <a href="#">Cometário</a>
            </li>
            <li className='text-title-black-60 text-lg hover:text-title-black-87 hover:transition-colors'>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>

        <div className='flex items-center gap-3'>
          <a href="#" className='block w-fit hover:opacity-80 hover:transition-opacity'>
            <img src={iFoodLogo} alt="iFood logo" />
          </a>
          <a href="#" className='block w-fit hover:opacity-80 hover:transition-opacity'>
            <img src={instagramLogo} alt="Instagram logo" />
          </a>
          <div className='w-[1px] self-stretch bg-[#B50B04]' />
          <button className='flex bg-yellow-layout rounded-md gap-2 py-1 px-4 text-base text-title-black-87 font-bold shadow-md'>
            <img src={whatsappLogo} alt="" /> Contato
          </button>
        </div>
      </div>
    </header>
  )
}