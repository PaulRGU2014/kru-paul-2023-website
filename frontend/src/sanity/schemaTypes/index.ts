import { type SchemaTypeDefinition } from 'sanity'
import {galleryCollage} from './galleryCollage'
import {pages} from './pages'
import {footer} from './footer'
import {hero} from './hero'
import {resume} from './resume'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [footer, hero, pages, galleryCollage, resume],
}
