import {defineField, defineType} from 'sanity'

export const resume = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  preview: {
    select: {
      title: 'name',
    },
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'profile_desc',
      type: 'text',
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'skill',
              type: 'string',
            },
            {
              name: 'level',
              type: 'number',
            },
            {
              name: 'is_featured',
              type: 'boolean',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'career',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'company',
              type: 'string',
            },
            {
              name: 'position',
              type: 'string',
            },
            {
              name: 'start_date',
              type: 'string',
            },
            {
              name: 'end_date',
              type: 'string',
            },
            {
              name: 'description',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'school',
              type: 'string',
            },
            {
              name: 'degree',
              type: 'string',
            },
            {
              name: 'start_date',
              type: 'string',
            },
            {
              name: 'graduation_date',
              type: 'string',
            },
            {
              name: 'description',
              type: 'text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'resume_file',
      type: 'file',
    }),
  ],
})