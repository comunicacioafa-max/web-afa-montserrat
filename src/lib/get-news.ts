import {strapiClient} from '@/lib/strapi-client'

export async function getNews() {
  return strapiClient('articles?populate=cover').then(({data}) => {
    return data
  })
}

export async function getNewBySlug(slug: string) {
  return strapiClient(`articles?filters[slug][$eq]=${slug}&populate[blocks][populate]=*&populate=cover`).then(
    ({data}) => {
      return data[0]
    }
  )
}
