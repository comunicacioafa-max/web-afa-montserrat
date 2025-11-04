import Container from '@/components/container'
import {getCommissionsInfo, getAllCommissions} from '@/lib/get-comissions-info'
import DynamicBlocks from '@/components/dynamic-blocks'

export const revalidate = 3600

export async function generateStaticParams() {
  const comissions = await getAllCommissions()
 
  return comissions.map((comission: {slug: string}) => ({
    slug: comission.slug,
  }))
}

export default async function Page({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const commission = await getCommissionsInfo({slug})
  return (
    <Container>
      <h1 className="font-heading text-5xl text-center">{commission[0].title}</h1>
      {/* apply styles to inner elements of BlocksRenderer as needed */}
      <div className="[&>img]:max-h-[300px] [&>img]:mx-auto [&>h3]:font-heading [&>h3]:text-3xl [&>p]:font-sans [&>p]:leading-relaxed [&>p]:text-pretty [&>ol]:list-decimal [&>ul]:list-disc [&>ol>li]:ml-8 [&>ol>li]:mt-6 [&>ul>li]:ml-8 [&>ul>li]:mt-6">
        <DynamicBlocks blocks={commission[0].blocks} />
      </div>
    </Container>
  )
}
