import {getHomeInfo} from '@/lib/get-home-info'
import MarkdownComponent from '@/components/markdown'
export default async function Contact() {
  const homeInfo = await getHomeInfo()
  if (!homeInfo.contact) {
    return null
  }
  return (
    <section
      data-in-view="false"
      id="contact"
      className="
    relative rounded-4xl p-6 lg:p-12 bg-card-yellow flex flex-col text-black"
    >
      <h2 className="mb-4 text-5xl font-bold font-heading">Contactens</h2>
      <div className="[&>p>a]:text-blue-600 [&>p>a]:cursor-pointer [&>p>a]:hover:text-blue-800 [&>p]:text-pretty [&>p]:font-sans">
        <MarkdownComponent>{homeInfo.contact}</MarkdownComponent>
      </div>
    </section>
  )
}
