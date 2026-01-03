import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: '2izf66hq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you want to ensure fresh data
})

// Helper function for generating image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// TypeScript interfaces for your schemas
export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: {
    current: string
  }
  icon?: string
  description: string
  longDescription?: any[]
  features?: string[]
  image: any
  order?: number
  isActive: boolean
}

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  name: string
  text: string
  rating: number
  image?: any
  location?: string
  serviceUsed?: Service
  date: string
  featured: boolean
  isActive: boolean
}

export interface Author {
  _id: string
  _type: 'author'
  name: string
  slug: {
    current: string
  }
  image?: any
  bio?: any[]
  role?: string
  email?: string
  social?: {
    twitter?: string
    linkedin?: string
  }
}

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: {
    current: string
  }
  description?: string
  color?: string
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage: any
  categories?: Category[]
  author: Author
  publishedAt: string
  body: any[]
  relatedPosts?: BlogPost[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
  featured: boolean
  readTime?: number
}

export interface FAQ {
  _id: string
  _type: 'faq'
  question: string
  answer: string
  category?: string
  order?: number
  isActive: boolean
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  title: string
  description?: string
  logo?: any
  contactInfo?: {
    phone?: string
    email?: string
    address?: string
  }
  hero?: {
    title?: string
    subtitle?: string
    backgroundImage?: any
    ctaText?: string
  }
  serviceLocations?: string[]
}
