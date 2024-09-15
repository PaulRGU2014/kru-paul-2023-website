import {defineField, defineType} from 'sanity'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'header_title',
      type: 'string',
    }),
    defineField({
      name: 'main_menu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'menu_title',
              type: 'string',
            }),
            defineField({
              name: 'menu_url',
              type: 'string',
            }),
            defineField({
              name: 'menu_sub',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'sub_title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'sub_url',
                      type: 'string',
                    }),
                  ],
                }
              ],
            }),
          ],
        }
      ],
    }),
  ],
})