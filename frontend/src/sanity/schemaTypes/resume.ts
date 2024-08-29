import {defineField, defineType} from 'sanity'

export const resume = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'resume_title',
      type: 'string',
    }),
    defineField({
      name: 'resume_url',
      type: 'slug',
    }),
    defineField({
      name: 'resume_sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'education'},
            {type: 'experience'},
            {type: 'skills'},
          ]
        }
      ],
    }),
  ],
})