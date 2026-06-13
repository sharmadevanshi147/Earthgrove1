import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'c3b8bjc6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
