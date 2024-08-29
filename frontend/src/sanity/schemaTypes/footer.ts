import {defineField, defineType} from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'footer_title',
      type: 'string',
    }),
    defineField({
      name: 'footer_links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'link_title',
              type: 'string',
            }),
            defineField({
              name: 'link_url',
              type: 'string',
            }),
          ],
        }
      ],
    }),
  ],
})