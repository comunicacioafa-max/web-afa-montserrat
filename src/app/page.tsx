import News from '@/components/news'
import Hero from '@/components/hero'
import WhoWeAre from '@/components/whoweare'
import Comissions from '@/components/comissions'
import Container from '@/components/container'
import Faqs from '@/components/faqs'
import Contact from '@/components/contact'

export const revalidate = 60 * 60 // Revalidate every hour

export default async function Home() {
  return (
    <>
      <Hero />
      <Container>
        <News />
        <WhoWeAre />
        <Comissions />
        <Faqs />
        <Contact />
      </Container>
    </>
  )
}
