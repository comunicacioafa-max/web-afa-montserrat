import {strapiClient} from '@/lib/strapi-client'

export async function getHomeInfo() {
  return strapiClient('home?populate=hero&populate=faqs&populate=seo').then(({data}) => {
    return data
  })
}
