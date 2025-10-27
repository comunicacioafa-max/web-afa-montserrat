import {strapiClient} from '@/lib/strapi-client'

export async function getCommissionsInfo({slug}: {slug: string}) {
  return strapiClient(`comissions?filters[slug][$eq]=${slug}&populate[blocks][populate]=*`).then(({data}) => {
    return data
  })
}

export async function getAllCommissions() {
  return strapiClient('comissions?populate=*').then(({data}) => {
    return data
  })
}
