import {defineField, defineType} from 'sanity'

export const galleryCollage = defineType({
  name: 'galleryCollage',
  title: 'Gallery Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        {
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
                  type: 'block',
                  // styles: [
                  //   {title: 'Normal', value: 'normal'},
                  //   {title: 'H1', value: 'h1'},
                  //   {title: 'H2', value: 'h2'}
                  // ],
                  // lists: [
                  //   {title: 'Numbered', value: 'number'}
                  // ],
                  // marks: {
                  //   // Only allow these decorators
                  //   decorators: [
                  //     {title: 'Strong', value: 'strong'},
                  //     {title: 'Emphasis', value: 'em'}
                  //   ],    
                  // }
                },
              ],
            },
            {
              name: 'is_portrait',
              title: 'Is Portrait?',
              type: 'boolean',
            },
          ],
        },
      ],
    }),
  ],
})