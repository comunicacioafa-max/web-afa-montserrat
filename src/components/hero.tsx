import {getHomeInfo} from '@/lib/get-home-info'

async function Hero() {
  const homeInfo = await getHomeInfo()
  const {hero} = homeInfo

  return (
    <section
      className="relative z-0 flex px-4 h-[700px] w-full mx-auto flex-col items-center justify-center overflow-hidden bg-gray-200 bg-cover bg-center text-center"
      style={{
        backgroundImage: `url(${hero.url})`
      }}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white to-transparent to-40%"></div>
      <div className="bg-white opacity-75 p-6 rounded-4xl">
      <h1 className="z-20 text-4xl font-extrabold text-emerald-900 font-heading text-shadow-black text-shadow-xs mb-4 animate-fade-in-up">
        {homeInfo.title}
      </h1>
      <h2 className="z-20 text-2xl font-bold font-heading text-emerald-900 animate-fade-in-up">{homeInfo.subtitle}</h2>
      </div>
    </section>
  )
}

export default Hero
