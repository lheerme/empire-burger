import { useEffect, useState } from 'react'
import stopwatchIcon from '../assets/stopwatch-icon.svg'
import { twMerge } from 'tailwind-merge'

const date = new Date()
const day = date.getDay()
const hour = date.getHours()

export function OpeningHours() {
  const [isEmpireBurgerOpen, setIsEmpireBurgerOpen] = useState(false)

  useEffect(() => {
    if (day === 6 || day === 0) {
      if (hour >= 18 && hour <= 23) {
        setIsEmpireBurgerOpen(true)
      } else {
        setIsEmpireBurgerOpen(false)
      }
    } else {
      if (hour >= 17 && hour <= 23) {
        setIsEmpireBurgerOpen(true)
      } else {
        setIsEmpireBurgerOpen(false)
      }
    }
  }, [])

  return (
    <section className="max-w-6xl w-full mx-auto px-2 my-16 flex flex-col min-[840px]:flex-row items-center gap-8 min-[840px]:gap-0">
      <div
        className={twMerge(
          'rounded-2xl flex items-center gap-4 py-5 px-6 w-full max-w-xl relative overflow-hidden',
          isEmpireBurgerOpen ? 'bg-green-600' : 'bg-red-layout'
        )}
      >
        <span className="bg-beige absolute font-lilita-one text-title-black-38/70 text-xl text-center w-32 uppercase top-5 -left-7 -rotate-45">
          {isEmpireBurgerOpen ? 'Aberto' : 'Fechado'}
        </span>
        <img
          src={stopwatchIcon}
          alt="ícone de um cronômetro"
          className="w-[73px] min-[840px]:w-auto"
        />
        <div className="w-[1px] self-stretch bg-title-black-38/40" />
        <div>
          <h3 className="text-lg md:text-2xl font-lilita-one text-title-black-38/70 uppercase">
            Horário de funcionamento
          </h3>
          <p className="text-white/85 w-36 sm:w-auto">
            Segunda<span className="hidden md:inline">-feira</span> a sexta
            <span className="hidden md:inline">-feira</span>:{' '}
            <span className="font-black">17h00 - 23h00</span>
          </p>
          <p className="text-white/85 w-36 sm:w-auto">
            Sábado a Domingo: <span className="font-black">18h00 - 23h00</span>
          </p>
        </div>
      </div>

      <div className="min-[840px]:px-8 text-center md:text-start">
        <p className="text-lg text-title-black-38/70">
          Não esqueça de marcar a gente no Instagram:
        </p>
        <p className="text-[2.563rem] md:text-3xl text-red-layout font-lilita-one uppercase">
          #empireburger
        </p>
      </div>
    </section>
  )
}
