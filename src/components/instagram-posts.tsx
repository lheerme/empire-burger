import publiInsta1 from '../assets/publicacoes-instagram/publi-insta-1.png'
import publiInsta2 from '../assets/publicacoes-instagram/publi-insta-2.png'
import publiInsta3 from '../assets/publicacoes-instagram/publi-insta-3.png'
import publiInsta4 from '../assets/publicacoes-instagram/publi-insta-4.png'
import publiInsta5 from '../assets/publicacoes-instagram/publi-insta-5.png'
import publiInsta6 from '../assets/publicacoes-instagram/publi-insta-6.png'
import publiInsta7 from '../assets/publicacoes-instagram/publi-insta-7.png'
import publiInsta8 from '../assets/publicacoes-instagram/publi-insta-8.png'

const publicacoes = [
  publiInsta1,
  publiInsta2,
  publiInsta3,
  publiInsta4,
  publiInsta5,
  publiInsta6,
  publiInsta7,
  publiInsta8,  
]

export function InstagramPosts() {
  return (
    <section className="w-full mx-auto mt-12 md:mt-32">
      <h2 className="font-lilita-one text-2xl md:text-3xl text-center px-6 text-title-black-38/90 uppercase">Publicações do Instagram</h2>
      <p className="text-title-black-38/70 text-center px-6">Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>

      <div className='overflow-hidden mt-4 relative'>
        <div className="absolute bottom-0 top-0 right-0 w-1/5 bg-gradient-to-l from-[#21201B] to-white/0 pointer-events-none z-[1]" />
        <div className="absolute bottom-0 top-0 left-0 w-1/5 bg-gradient-to-r from-[#21201B] to-white/0 pointer-events-none z-[1]" />
        <div className="flex items-center w-max animate-scroll-left-slow">
          {publicacoes.concat(publicacoes).map((publi, index) => (
            <img 
              src={publi}
              key={index}
              alt="Foto de uma publicação no Instagram sobre o Empire Burger"
              className='w-[123px] md:w-[270px] object-cover'
            />
          ))}
        </div>
      </div>
      <div className='overflow-hidden flex items-center bg-yellow-layout'>
        <div className='flex items-center w-max animate-scroll-left-fast'>
          {Array.from({ length: 16 }).map((_, index) => (
            <p key={index} className='w-max text-sm md:text-[1.75rem] text-title-black-38/90 font-lilita-one uppercase'>#empireburger • </p>
          ))}
        </div>
      </div>
    </section>
  )
}