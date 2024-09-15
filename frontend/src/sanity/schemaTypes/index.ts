import { type SchemaTypeDefinition } from 'sanity'
import {galleryCollage} from './galleryCollage'
import {pages} from './pages'
import {footer} from './footer'
import {hero} from './hero'
import {resume} from './resume'
import {header} from './header'
import {hardcodedBlocks} from './hardcodedBlocks'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hardcodedBlocks, footer, header, hero, pages, galleryCollage, resume],
}
