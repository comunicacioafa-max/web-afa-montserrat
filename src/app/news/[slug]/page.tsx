import Container from '@/components/container'
import {getNewBySlug, getNews} from '@/lib/get-news'
import DynamicBlocks from '@/components/dynamic-blocks'
import Image from 'next/image'

export const revalidate = 3600

export async function generateStaticParams() {
  const articles = await getNews()
 
  return articles.map((article: {slug: string}) => ({
    slug: article.slug,
  }))
}

export default async function Page({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const news = await getNewBySlug(slug)
  return (
    <Container>
      <h1 className="font-heading text-5xl text-center max-w-4xl mx-auto">{news.title}</h1>
      <div className="flex flex-col justify-center gap-4 max-w-4xl mx-auto md:flex-row">
        <div className="[&>img]:max-h-[300px] [&>img]:mx-auto [&>h3]:font-heading [&>h3]:text-3xl [&>p]:font-sans [&>p]:leading-relaxed [&>p]:text-pretty [&>ol]:list-decimal [&>ul]:list-disc [&>ol>li]:ml-8 [&>ol>li]:mt-6 [&>ul>li]:ml-8 [&>ul>li]:mt-6">
          <DynamicBlocks blocks={news.blocks} />
        </div>
        <Image
          src={news.cover.url}
          alt={news.cover.alternativeText || 'News Image'}
          width={news.cover.width}
          height={news.cover.height}
          className="flex-1 max-h-[500px] object-contain"
        />
      </div>
    </Container>
  )
}
