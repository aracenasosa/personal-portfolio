import { type SchemaTypeDefinition } from 'sanity'
import portfolioType from './portfolioType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioType],
}
