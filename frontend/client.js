import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p0zin5nb',
  dataset: 'production',
  apiVersion: '2021-03-25', // Update to the latest API version
  useCdn: true, // Enable CDN caching
});

export default client;