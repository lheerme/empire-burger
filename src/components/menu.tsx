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
    }
  })

  const formatNumber = new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return (
    <section className="w-full h-[575px] mx-auto grid grid-cols-2 grid-rows-1">
      <div className="size-full bg-[url('/src/assets/menu-background.png')] bg-center bg-cover bg-no-repeat flex items-center justify-end">
        <div className="w-full max-w-[460px] mr-7 min-[1777px]:mr-20 backdrop-blur xl:backdrop-blur-none p-2 box-content rounded-md">
          <h3 className="text-brown font-lilita-one text-[2.563rem] uppercase">Escolha o seu combo imperial, <mark className="text-inherit bg-yellow-layout px-1 py-0.5 rounded">peça agora!</mark></h3>
          <p className="text-title-black-38/70 w-full max-w-[436px]">Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
          <Button variant="primary" size="sm">Ver Cardápio Completo</Button>
        </div>
      </div>

      <div className="size-full bg-brown flex flex-col justify-center px-7">
        <div className="w-full max-w-[570px] space-y-3">
          <h2 className="text-[2rem] text-yellow-layout font-lilita-one uppercase">Cardápio imperial | Burger</h2>
          <ul className="space-y-8">
            {data?.map((item) => (
              <li 
                id={item.plate}
                className=""
              >
                <h3 className="w-full flex items-center justify-between text-xl text-beige font-lilita-one uppercase">
                  <span className="flex flex-1 items-end after:content-[''] after:border-b-4 after:border-dotted after:border-red-90 after:mx-1 after:flex-1 after:mb-2">{item.plate}</span>
                  <span>{formatNumber.format(item.price)}</span>
                </h3>
                <p className="text-white/90 w-full max-w-[470px]">{item.ingredients}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}