import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'hero_title',
      type: 'string',
    }),
    defineField({
      name: 'hero_subtitle',
      type: 'string',
    }),
  ],
})