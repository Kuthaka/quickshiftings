import { getBlogPosts, getCategories, getSiteSettings, getServices } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './Blog.module.css'

export const revalidate = 60

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const categories = await getCategories()
  const siteSettings = await getSiteSettings()
  const services = await getServices()

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "PackersHub Blog",
    "description": "Expert tips, industry insights, and inspiring stories about moving and relocation",
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://www.packershub.in/blog/${post.slug.current}`,
        "datePublished": post.publishedAt,
        "author": {
          "@type": "Person",
          "name": post.author?.name || "PackersHub Team"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <main className={styles.blogPage}>
        <Navigation />
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <div className={styles.container}>
              <div className={styles.breadcrumbs}>
                <Link href="/">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 6L8 2l6 4v7a1 1 0 01-1 1H9v-5H7v5H3a1 1 0 01-1-1V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Home
                </Link>
                <span>›</span>
                <span className={styles.currentPage}>Blog</span>
              </div>
              <span className={styles.tagline}>INSIGHTS & STORIES</span>
              <h1 className={styles.title}>
                Moving <span className={styles.highlight}>Insights</span>
              </h1>
              <p className={styles.subtitle}>
                Expert tips, industry insights, and inspiring stories about moving and relocation
              </p>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            {/* Blog Posts Grid */}
            <div className={styles.postsGrid}>
              {posts && posts.length > 0 ? (
                posts.map((post, index) => (
                  <article key={post._id} className={styles.postCard} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
                    <Link href={`/blog/${post.slug.current}`} className={styles.cardLink}>
                      {post.mainImage && (
                        <div className={styles.imageWrapper}>
                          <div className={styles.imageOverlay}></div>
                          <img
                            src={urlFor(post.mainImage).width(800).height(500).url()}
                            alt={post.title}
                            className={styles.postImage}
                          />
                          {post.categories && post.categories.length > 0 && (
                            <div className={styles.imageCategories}>
                              {post.categories.slice(0, 2).map((cat) => (
                                <span
                                  key={cat._id}
                                  className={styles.imageCategory}
                                  style={{ backgroundColor: cat.color || '#0066cc' }}
                                >
                                  {cat.title}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      <div className={styles.postContent}>
                        <div className={styles.postHeader}>
                          <h2 className={styles.postTitle}>{post.title}</h2>
                          <p className={styles.postExcerpt}>{post.excerpt}</p>
                        </div>
                        <div className={styles.postFooter}>
                          <div className={styles.authorInfo}>
                            {post.author?.image && (
                              <div className={styles.authorImageWrapper}>
                                <img
                                  src={urlFor(post.author.image).width(80).height(80).url()}
                                  alt={post.author.name}
                                  className={styles.authorImage}
                                />
                              </div>
                            )}
                            <div className={styles.authorDetails}>
                              <div className={styles.authorName}>{post.author?.name}</div>
                              {post.author?.role && (
                                <div className={styles.authorRole}>{post.author.role}</div>
                              )}
                            </div>
                          </div>
                          <div className={styles.postMeta}>
                            <div className={styles.postDate}>
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </div>
                            {post.readTime && (
                              <div className={styles.readTime}>{post.readTime} min</div>
                            )}
                          </div>
                        </div>
                        <div className={styles.readMore}>
                          <span>Read Article</span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))
              ) : (
                <div className={styles.noPosts}>
                  <p>No blog posts yet. Check back soon!</p>
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer
          phone={siteSettings?.contactInfo?.phone}
          email={siteSettings?.contactInfo?.email}
          address={siteSettings?.contactInfo?.address}
          services={services}
        />
      </main>
    </>
  )
}
