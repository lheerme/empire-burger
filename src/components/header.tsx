import { useEffect, useState } from 'react'
import logo from '../assets/empire-burger-logo.svg'
import iFoodLogo from '../assets/ifood-icon.svg'
import instagramLogo from '../assets/instagram-icon.svg'
import whatsappLogo from '../assets/whatsapp-icon.svg'
import { Hamburger } from './hamburger'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHamburgerChecked, setIsHamburgerChecked] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 525) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  function handleAnchorClick() {
    setIsHamburgerChecked(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <header className={`fixed w-full border-b-[1px] border-[#3C210C26] z-[2] ${isScrolled ? 'bg-beige' : 'backdrop-blur-md'} transition-colors`}>
      <div className="max-w-6xl w-full mx-auto py-3.5 px-6 flex items-center justify-between gap-2">
        <a href="#" className='block w-fit shrink-0'>
          <img src={logo} alt="Empire Burger logo" className='min-[390px]:w-auto w-48' />
        </a>

        <nav className={twMerge(
          'min-[1040px]:block hidden', 
          isHamburgerChecked && 'flex flex-col items-center justify-center gap-10 absolute w-full h-dvh top-0 left-0 bg-beige'
        )}>
          <ul className={twMerge(
            'flex items-center gap-4',
            isHamburgerChecked && 'flex-col'
          )}>
            <li 
              className={twMerge(
              'text-title-black-60 text-lg hover:text-title-black-87 hover:transition-all',
              isHamburgerChecked && 'text-2xl'
              )}
              onClick={handleAnchorClick}
            >
              <a href="#home">Home</a>
            </li>
            <li 
              className={twMerge(
              'text-title-black-60 text-lg hover:text-title-black-87 hover:transition-all',
              isHamburgerChecked && 'text-2xl'
              )}
              onClick={handleAnchorClick}
            >
              <a href="#offers">Promoção</a>
            </li>
            <li 
              className={twMerge(
              'text-title-black-60 text-lg hover:text-title-black-87 hover:transition-all',
              isHamburgerChecked && 'text-2xl'
              )}
              onClick={handleAnchorClick}
            >
              <a href="#menu">Cardápio</a>
            </li>
            <li 
              className={twMerge(
              'text-title-black-60 text-lg hover:text-title-black-87 hover:transition-all',
              isHamburgerChecked && 'text-2xl'
              )}
              onClick={handleAnchorClick}
            >
              <a href="#our-royalty">Cometários</a>
            </li>
            <li 
              className={twMerge(
              'text-title-black-60 text-lg hover:text-title-black-87 hover:transition-all',
              isHamburgerChecked && 'text-2xl'
              )}
              onClick={handleAnchorClick}
            >
              <a href="#contact">Contato</a>
            </li>
          </ul>

          <div className='min-[1040px]:hidden'>
            <div className='flex flex-col items-center gap-3'>
              <div className='flex items-center gap-3'>
                <a href="#" className='size-10 flex items-center justify-center hover:opacity-80 hover:transition-opacity shrink-0 bg-red-layout rounded-md'>
                  <img src={iFoodLogo} alt="iFood logo" />
                </a>
                <a href="#" className='size-10 flex items-center justify-center hover:opacity-80 hover:transition-opacity shrink-0 bg-red-layout rounded-md'>
                  <img src={instagramLogo} alt="Instagram logo" />
                </a>
              </div>
              <button className='flex bg-yellow-layout rounded-md gap-2 py-1 px-4 text-base text-title-black-87 font-bold shadow-md'>
                <img src={whatsappLogo} alt="Whatsapp logo" /> Contato
              </button>
            </div>
          </div>
        </nav>

        <div className='min-[1040px]:flex hidden items-center gap-3'>
          <a href="#" className='block w-fit hover:opacity-80 hover:transition-opacity shrink-0'>
            <img src={iFoodLogo} alt="iFood logo" />
          </a>
          <a href="#" className='block w-fit hover:opacity-80 hover:transition-opacity shrink-0'>
            <img src={instagramLogo} alt="Instagram logo" />
          </a>
          <div className='w-[1px] self-stretch bg-[#B50B04]' />
          <button className='flex bg-yellow-layout rounded-md gap-2 py-1 px-4 text-base text-title-black-87 font-bold shadow-md'>
            <img src={whatsappLogo} alt="Whatsapp logo" /> Contato
          </button>
        </div>

        <Hamburger
          isChecked={isHamburgerChecked}
          setIsChecked={setIsHamburgerChecked}
        />
      </div>
    </header>
  )
}