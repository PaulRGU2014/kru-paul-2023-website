import { type SchemaTypeDefinition } from 'sanity'
import {eventType} from './eventType'
import {artistType} from './artistType'
import {venueType} from './venueType'
import {pages} from './pages'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pages, artistType, eventType, venueType],
}
