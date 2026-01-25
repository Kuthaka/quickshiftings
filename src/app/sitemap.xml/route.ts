import { getBlogPosts } from '@/lib/sanity-queries'

export async function GET() {
    const baseUrl = 'https://www.packershub.in'
    const posts = await getBlogPosts()

    const staticRoutes = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: '1.0',
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: '0.8',
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: '0.8',
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: '0.8',
        },
    ]

    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
        changeFrequency: 'weekly',
        priority: '0.64',
    }))

    const allRoutes = [...staticRoutes, ...blogRoutes]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${allRoutes
            .map((route) => {
                const lastModDate = route.lastModified instanceof Date ? route.lastModified : new Date(route.lastModified)
                const lastMod = !isNaN(lastModDate.getTime()) ? lastModDate.toISOString() : new Date().toISOString()

                return `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
            })
            .join('')}
</urlset>`

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
