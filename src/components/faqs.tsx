import {getHomeInfo} from '@/lib/get-home-info'
import MarkdownComponent from './markdown'

function Card({title, description}: {title: string; description: string}) {
  return (
    <div className="pt-4 col-span-2 flex flex-row items-start gap-4">
      <div className="flex flex-col gap-4 justify-between">
        <h3 className="pl-4 text-2xl font-semibold font-heading border-l border-black/50 min-w-[200px]">{title}</h3>
        <MarkdownComponent>{description}</MarkdownComponent>
      </div>
    </div>
  )
}

export default async function FAQs() {
  const homeInfo = await getHomeInfo()
  const {faqs} = homeInfo
  return (
    <section
      data-in-view="false"
      id="faqs"
      className="
    relative rounded-4xl p-6 lg:p-12 bg-card-red flex flex-col justify-center text-black"
    >
      <h2 className="mb-4 text-5xl font-bold font-heading">FAQs</h2>
      <article className="grid grid-cols-2 gap-y-8">
        {faqs.map((faq: {id: string; question: string; answer: string}) => (
          <Card key={faq.id} title={faq.question} description={faq.answer} />
        ))}
      </article>
    </section>
  )
}
