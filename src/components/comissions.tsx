import {getAllCommissions} from '@/lib/get-comissions-info'
import {BlocksRenderer} from '@strapi/blocks-react-renderer'
import IconArrow from '@/components/iconarrow'
import type {BlocksContent} from '@strapi/blocks-react-renderer'

function Card({title, description, href}: {title: string; description: BlocksContent; href: string}) {
  return (
    <a
      href={href}
      className="group pt-4 relative cursor-pointer overflow-hidden col-span-2 flex flex-row justify-between items-start gap-4"
    >
      <div className="z-20 flex flex-col md:flex-row gap-4 justify-between group-hover:text-white">
        <h3 className="pl-4 text-2xl font-semibold font-heading border-l-1 border-black/50 min-w-[200px]">{title}</h3>
        <div className="mb-4 text-lg leading-relaxed text-pretty font-sans w-full">
          <BlocksRenderer content={description} />
        </div>
      </div>
      <span className="border p-2 border-black rounded-full group-hover:rotate-[-45deg] group-hover:bg-black transition-transform">
        <IconArrow className=" text-black group-hover:text-white w-[24px] h-[24px]" />
      </span>
      <div
        className="
      absolute inset-0 z-10 h-full w-full bg-black/50 rounded-md
      -translate-x-full transition-transform duration-500 ease-in-out 
      group-hover:translate-x-[-48px]
    "
      ></div>
    </a>
  )
}

export default async function Comissions() {
  const comissions = await getAllCommissions()
  return (
    <section
      data-in-view="false"
      id="comissions"
      className="
    relative rounded-4xl p-6 lg:p-12 bg-card-purple flex flex-col justify-center text-black"
    >
      <h2 className="mb-4 text-5xl font-bold font-heading">Comissions</h2>
      <article className="grid grid-cols-2 gap-y-8">
        {comissions.map((comission: {id: string; title: string; description: BlocksContent; slug: string}) => (
          <Card
            key={comission.id}
            title={comission.title}
            description={comission.description}
            href={`/comissions/${comission.slug}`}
          />
        ))}
      </article>
    </section>
  )
}
