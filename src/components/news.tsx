import IconArrow from '@/components/iconarrow'
import {getNews} from '@/lib/get-news'
import Link from 'next/link'
import Image from 'next/image'

function NewCard({
  className,
  title,
  slug,
  description,
  cover
}: {
  className: string
  title: string
  slug: string
  description: string
  cover?: {url: string; width?: number; height?: number}
}) {
  return (
    <article
      className={`${className} min-w-[250px] min-h-[400px] max-h-[400px] relative rounded-4xl px-6 py-8 flex flex-col gap-2`}
    >
      <Link href={`/news/${slug}`} passHref>
        <header className="group cursor-pointer flex gap-4 items-start justify-between">
          <h2 className="text-black text-2xl text-balance">{title}</h2>
          <span className="outline p-2 outline-black rounded-full group-hover:-rotate-45 group-hover:bg-black transition-transform">
            <IconArrow className=" text-black group-hover:text-white w-6 h-6" />
          </span>
        </header>
      </Link>
      <main className="z-1 mt-2 flex-1 overflow-y-hidden">{description}</main>
      {cover && (
        <div className="z-0 overflow-hidden rotate-8 absolute bottom-4 right-4 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-70">
          <Image src={cover.url} alt={title} width={cover.width} height={cover.height} className="rounded-2xl" />
        </div>
      )}
    </article>
  )
}

async function News() {
  const news = await getNews()
  const colors = ['bg-card-yellow', 'bg-card-purple', 'bg-card-red', 'bg-card-blue', 'bg-card-green']
  return (
    <section className="rounded-4xl p-6 lg:p-12 bg-panel-background">
      <h2 className="text-3xl mb-8 font-heading">Notícies Recents</h2>
      <div className="flex overflow-x-scroll gap-4 mx-auto pb-8 scrollbar">
        {news.sort((a: {publishedAt: string}, b: {publishedAt: string}) => {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        }).map(
          (
            article: {id: string; slug: string; title: string; description: string; cover: {url: string}},
            index: number
          ) => {
            return (
              <NewCard
                key={article.id}
                slug={article.slug}
                title={article.title}
                description={article.description}
                className={colors[index % colors.length]}
                cover={article.cover}
              />
            )
          }
        )}
      </div>
    </section>
  )
}
export default News
