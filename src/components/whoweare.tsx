import {getHomeInfo} from '@/lib/get-home-info'
import {BlocksRenderer} from '@strapi/blocks-react-renderer'
export default async function WhoWeAre() {
  const homeInfo = await getHomeInfo()
  if (!homeInfo.whoweare) {
    return null
  }
  return (
    <section
      data-in-view="false"
      id="whoweare"
      className="
    relative rounded-4xl p-6 lg:p-12 bg-panel-alternative flex flex-col justify-center text-white"
    >
      <h2 className="mb-4 text-5xl font-bold text-center font-heading">Sobre nosaltres</h2>
      <BlocksRenderer content={homeInfo.whoweare} />
    </section>
  )
}
