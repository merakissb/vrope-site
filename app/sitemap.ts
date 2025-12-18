import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.vrope.cl',
      lastModified: new Date(),
      changeFrequency: 'monthly', // Como es una One Page corporativa, 'monthly' o 'weekly' está bien
      priority: 1, // Es la página principal, máxima prioridad
    },
  ]
}