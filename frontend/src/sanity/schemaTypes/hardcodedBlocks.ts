import {defineField, defineType} from 'sanity'

export const hardcodedBlocks = defineType({
  name: 'hardcodedBlocks',
  title: 'Hardcoded Blocks',
  type: 'document',
  fields: [
    defineField({
      name: 'block_title',
      type: 'string',
    }),
  ],
})
  