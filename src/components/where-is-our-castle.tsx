import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

export function WhereIsOurCastle() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  })

  return (
    <section className="w-full mx-auto mt-32">
      <h2 className="font-lilita-one text-2xl md:text-3xl text-center text-title-black-38/90 uppercase px-6">Onde ficar a nosso castelo</h2>
      <p className="text-title-black-38/70 text-center px-6">Estaremos de portas abertas para a nossa realeza.</p>

      <div className="w-full h-[207px] mt-8">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: -23.5881894, lng: -46.6427356}}
            zoom={17}
          ></GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </section>
  )
}