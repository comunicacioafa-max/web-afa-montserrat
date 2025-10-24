import type {Schema, Struct} from '@strapi/strapi'

export interface HomeComissio extends Struct.ComponentSchema {
  collectionName: 'components_home_comissios'
  info: {
    displayName: 'comissio'
  }
  attributes: {
    description: Schema.Attribute.Blocks
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5
      }>
  }
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs'
  info: {
    displayName: 'FAQ'
  }
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required
    question: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Unique
  }
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.comissio': HomeComissio
      'home.faq': HomeFaq
    }
  }
}
