import { client } from './sanity'
import { Service, Testimonial, BlogPost, FAQ, Category, Author, SiteSettings } from './sanity'

// Site Settings
export async function getSiteSettings() {
  return client.fetch<SiteSettings>(
    `*[_type == "siteSettings"][0] {
      _id,
      title,
      description,
      logo,
      contactInfo,
      hero,
      serviceLocations
    }`
  )
}

// Services
export async function getServices() {
  return client.fetch<Service[]>(
    `*[_type == "service" && isActive == true] | order(order asc) {
      _id,
      title,
      slug,
      icon,
      description,
      features,
      image,
      order
    }`
  )
}

export async function getServiceBySlug(slug: string) {
  return client.fetch<Service>(
    `*[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      icon,
      description,
      longDescription,
      features,
      image,
      order
    }`,
    { slug }
  )
}

// Testimonials
export async function getTestimonials(limit?: number) {
  const limitQuery = limit ? `[0...${limit}]` : ''
  return client.fetch<Testimonial[]>(
    `*[_type == "testimonial" && isActive == true] | order(featured desc, date desc)${limitQuery} {
      _id,
      name,
      text,
      rating,
      image,
      location,
      date,
      featured
    }`
  )
}

export async function getFeaturedTestimonials() {
  return client.fetch<Testimonial[]>(
    `*[_type == "testimonial" && isActive == true && featured == true] | order(date desc) {
      _id,
      name,
      text,
      rating,
      image,
      location,
      date
    }`
  )
}

// Blog Posts
export async function getBlogPosts(limit?: number) {
  const limitQuery = limit ? `[0...${limit}]` : ''
  return client.fetch<BlogPost[]>(
    `*[_type == "blogPost"] | order(publishedAt desc)${limitQuery} {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      "author": author-> {
        _id,
        name,
        slug,
        image,
        role
      },
      publishedAt,
      featured,
      readTime
    }`
  )
}

export async function getFeaturedBlogPosts() {
  return client.fetch<BlogPost[]>(
    `*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      "author": author-> {
        _id,
        name,
        slug,
        image,
        role
      },
      publishedAt,
      featured,
      readTime
    }`
  )
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch<BlogPost>(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      "author": author-> {
        _id,
        name,
        slug,
        image,
        bio,
        role,
        social
      },
      publishedAt,
      body,
      "relatedPosts": relatedPosts[]-> {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt
      },
      seo,
      readTime
    }`,
    { slug }
  )
}

export async function getBlogPostsByCategory(categorySlug: string) {
  return client.fetch<BlogPost[]>(
    `*[_type == "blogPost" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      "author": author-> {
        _id,
        name,
        slug,
        image,
        role
      },
      publishedAt,
      readTime
    }`,
    { categorySlug }
  )
}

export async function getBlogPostsByAuthor(authorSlug: string) {
  return client.fetch<BlogPost[]>(
    `*[_type == "blogPost" && author->slug.current == $authorSlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      publishedAt,
      readTime
    }`,
    { authorSlug }
  )
}

// Categories
export async function getCategories() {
  return client.fetch<Category[]>(
    `*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      color
    }`
  )
}

// Authors
export async function getAuthors() {
  return client.fetch<Author[]>(
    `*[_type == "author"] | order(name asc) {
      _id,
      name,
      slug,
      image,
      role
    }`
  )
}

export async function getAuthorBySlug(slug: string) {
  return client.fetch<Author>(
    `*[_type == "author" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      image,
      bio,
      role,
      email,
      social
    }`,
    { slug }
  )
}

// FAQs
export async function getFAQs(category?: string) {
  const categoryFilter = category ? `&& category == $category` : ''
  return client.fetch<FAQ[]>(
    `*[_type == "faq" && isActive == true ${categoryFilter}] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order
    }`,
    category ? { category } : {}
  )
}

// Pricing Plans
// export async function getPricingPlans() {
//   return client.fetch<PricingPlan[]>(
//     `*[_type == "pricingPlan" && isActive == true] | order(order asc) {
//       _id,
//       name,
//       slug,
//       description,
//       price,
//       features,
//       "services": services[]-> {
//         _id,
//         title,
//         slug
//       },
//       popular,
//       order
//     }`
//   )
// }
