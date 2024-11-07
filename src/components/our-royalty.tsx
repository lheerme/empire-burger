import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useQuery } from '@tanstack/react-query';
import { twMerge } from 'tailwind-merge';

interface Testimonials {
  name: string
  image: string
  age: number
  testimonial: string
}

export function OurRoyalty() {
  const { data, isFetching } = useQuery<Testimonials[]>({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const response = await fetch('https://api.brchallenges.com/api/empire-burger/testimonials')
      const data = await response.json()

      return data
    },
    refetchOnWindowFocus: false,
  })

  const pagination = {
    clickable: true,
    renderBullet: (_: unknown, className: string) => {
      return '<span class="' + className + ' hidden md:inline-block w-5 sm:w-[47px] h-1 bg-white rounded-none opacity-100"></span>';
    },
  };

  return (
    <section 
      id='our-royalty'
      className="max-w-6xl w-full mx-auto px-6"
    >
      <div className='mb-4'>
        <h2 className="font-lilita-one text-2xl md:text-3xl text-title-black-38/90 uppercase">Nossa realeza</h2>
        <p className="text-title-black-38/70">A satisfação de nossos clientes em primeiro lugar!</p>
      </div>

      {isFetching ? (
        <div className='flex items-center gap-3'>
          <div className='block w-full min-[1080px]:w-[370px] h-52 md:h-56 bg-title-black-60/30 animate-pulse rounded' />
          <div className='hidden md:block w-full min-[1080px]:w-[370px] h-52 md:h-56 bg-title-black-60/30 animate-pulse rounded' />
          <div className='hidden min-[1080px]:block w-[370px] h-52 md:h-56 bg-title-black-60/30 animate-pulse rounded' />
        </div>
      ) : (
        <Swiper
          pagination={pagination} 
          modules={[Pagination]}
          centeredSlides={true}
          centeredSlidesBounds={true}
          spaceBetween={12}
          slidesPerView={1.3}
          breakpoints={{
            768: {
              slidesPerView: 2.3,
            },
            1080: {
              slidesPerView: 3.3,
            },
          }}
          className='p-2 pb-14 sm:pb-9 h-full'
          onSlideChange={(swiper) => {
            if (swiper.activeIndex === 1 || swiper.activeIndex === 0) {
              swiper.params.centeredSlidesBounds = true
            } else {
              swiper.params.centeredSlidesBounds = false
            }
            swiper.update()
          }}
        >
          <div className="absolute bottom-0 top-0 right-0 w-1/5 bg-gradient-to-l from-[#FAF3F2] to-white/0 pointer-events-none z-[1]" />
          {data?.map((testimonial, index) => (
            <SwiperSlide 
              key={index} 
              className={twMerge(
                'w-[370px] h-auto flex flex-col justify-between gap-3 py-3 px-4 rounded-xl bg-white shadow-lg hover:opacity-100 transition-opacity',
                index !== 0 && 'opacity-70'
              )}
            >
              <p title={testimonial.testimonial} className='text-title-black-60 line-clamp-4'>{testimonial.testimonial}</p>
              <div className='flex items-center gap-2'>
                <img src={testimonial.image} alt={`foto do(a) ${testimonial.name}`} className='size-12 rounded-full object-cover' />
                <div className='flex flex-col'>
                  <h4 className='text-title-black-38/90 min-[380px]:text-lg uppercase font-lilita-one'>{testimonial.name}</h4>
                  <p className='text-title-black-38/70 text-xs'>{testimonial.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

    </section>
  )
}