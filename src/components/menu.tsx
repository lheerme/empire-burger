import { useQuery } from "@tanstack/react-query";
import { Button } from "./button";

interface Menu {
  plate: string
  price: number
  ingredients: string
}

export function Menu() {
  const { data, isFetching } = useQuery<Menu[]>({
    queryKey: ['menu'],
    queryFn: async () => {
      const response = await fetch('https://api.brchallenges.com/api/empire-burger/menu')
      const data = await response.json()

      return data
    },
    refetchOnWindowFocus: false,
  })

  const formatNumber = new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return (
    <section
      id="menu"
      className="w-full min-[950px]:h-[575px] mx-auto flex flex-col min-[950px]:grid min-[950px]:grid-cols-2 min-[950px]:grid-rows-1"
    >
      <div className="size-full min-[950px]:bg-[url('/src/assets/menu-background.png')] bg-[url('/src/assets/menu-background-mobile.png')] bg-center bg-cover bg-no-repeat flex items-center justify-center min-[950px]:justify-end">
        <div className="w-full max-w-[460px] mr-7 min-[1777px]:mr-20 min-[950px]:backdrop-blur xl:backdrop-blur-none py-9 min-[950px]:py-0 px-6 min-[950px]:px-0 min-[950px]:p-2 box-content rounded-md">
          <h3 className="text-brown font-lilita-one text-2xl min-[950px]:text-[2.563rem] min-[950px]:leading-tight uppercase">Escolha o seu combo imperial, <mark className="text-inherit bg-yellow-layout px-1 py-0.5 rounded">peça agora!</mark></h3>
          <p className="text-sm min-[950px]:text-base text-title-black-38/70 w-full max-w-[436px]">Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
          <Button variant="primary" size="sm">Ver Cardápio Completo</Button>
        </div>
      </div>

      <div className="min-[950px]:size-full bg-brown flex flex-col justify-center px-6 min-[950px]:px-7">
        <div className="w-full max-w-[570px] mx-auto min-[950px]:mx-0 space-y-3 py-12 min-[950px]:py-0">
          <h2 className="text-2xl min-[950px]:text-[2rem] text-yellow-layout font-lilita-one uppercase">Cardápio imperial | Burger</h2>
          <ul className="space-y-8">
            {isFetching ? (
              <>
                {Array.from({ length: 4 }).map((_, index) => (
                  <li key={index} className="space-y-3">
                    <div className="w-full h-5 bg-title-black-60 animate-pulse rounded" />
                    <div className="w-9/12 h-4 bg-title-black-60 animate-pulse rounded" />
                    <div className="w-6/12 h-4 bg-title-black-60 animate-pulse rounded" />
                  </li>
                ))}
              </>
            ) : (
              <>
                {data?.map((item, index) => (
                  <li 
                    id={item.plate}
                    key={index}
                  >
                    <h3 className="w-full flex items-center justify-between text-lg min-[950px]:text-xl text-beige font-lilita-one uppercase">
                      <span className="flex flex-1 items-end after:content-[''] after:border-b-4 after:border-dotted after:border-red-90 after:mx-1 after:flex-1 after:mb-2">{item.plate}</span>
                      <span>{formatNumber.format(item.price)}</span>
                    </h3>
                    <p className="text-sm min-[950px]:text-base text-white/90 w-full max-w-[470px]">{item.ingredients}</p>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}