import {defineField, defineType} from 'sanity'

export const squareLogos = defineType({
  name: 'squareLogos',
  title: 'Square Logos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'logos',
      type: 'image',
      fields: [
        {
          name: 'image_title',
          title: 'Image Title',
          type: 'string',
        },
        {
          name: 'image_description',
          title: 'Image Description',
          type: 'array',
          of: [
            {
              type: 'block'
            },
          ],
        },
      ],
    }),
  ],
})