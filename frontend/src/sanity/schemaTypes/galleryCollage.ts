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
                }
              ],
            }
          ],
        },
      ],
    }),
  ],
})