import { getBlogPostBySlug, getSiteSettings, getServices } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import styles from './BlogPost.module.css'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  const siteSettings = await getSiteSettings()
  const services = await getServices()

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className={styles.blogPost}>
      <Navigation />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          {post.mainImage && (
            <>
              <div className={styles.heroImageWrapper}>
                <img
                  src={urlFor(post.mainImage).width(1920).height(1080).url()}
                  alt={post.title}
                  className={styles.heroImage}
                />
              </div>
              <div className={styles.heroOverlay}></div>
            </>
          )}
        </div>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            {/* Breadcrumbs */}
            <div className={styles.breadcrumbs}>
              <Link href="/">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 6L8 2l6 4v7a1 1 0 01-1 1H9v-5H7v5H3a1 1 0 01-1-1V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </Link>
              <span>›</span>
              <Link href="/blog">Blog</Link>
              <span>›</span>
              <span className={styles.currentPage}>Article</span>
            </div>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className={styles.categories}>
                {post.categories.map((cat) => (
                  <Link
                    key={cat._id}
                    href={`/blog/category/${cat.slug.current}`}
                    className={styles.category}
                    style={{ backgroundColor: cat.color || '#0066cc' }}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className={styles.title}>{post.title}</h1>

            {/* Meta */}
            <div className={styles.meta}>
              <div className={styles.author}>
                {post.author?.image && (
                  <div className={styles.authorImageWrapper}>
                    <img
                      src={urlFor(post.author.image).width(100).height(100).url()}
                      alt={post.author.name}
                      className={styles.authorImage}
                    />
                  </div>
                )}
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{post.author?.name}</div>
                  {post.author?.role && (
                    <div className={styles.authorRole}>{post.author.role}</div>
                  )}
                </div>
              </div>
              <div className={styles.metaDivider}></div>
              <div className={styles.metaDetails}>
                <div className={styles.metaItem}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M14.25 3H3.75A1.5 1.5 0 002.25 4.5v10.5A1.5 1.5 0 003.75 16.5h10.5a1.5 1.5 0 001.5-1.5V4.5A1.5 1.5 0 0014.25 3zM12 1.5v3M6 1.5v3M2.25 7.5h13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{formattedDate}</span>
                </div>
                {post.readTime && (
                  <div className={styles.metaItem}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M9 4.5V9l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{post.readTime} min read</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <article className={styles.article}>
            <PortableTextRenderer value={post.body} />
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <div className={styles.relatedHeader}>
              <span className={styles.relatedTagline}>CONTINUE READING</span>
              <h2 className={styles.relatedTitle}>Related <span className={styles.relatedHighlight}>Articles</span></h2>
            </div>
            <div className={styles.relatedGrid}>
              {post.relatedPosts.map((related, index) => (
                <article key={related._id} className={styles.relatedCard} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
                  <Link href={`/blog/${related.slug.current}`} className={styles.relatedLink}>
                    {related.mainImage && (
                      <div className={styles.relatedImageWrapper}>
                        <div className={styles.relatedImageOverlay}></div>
                        <img
                          src={urlFor(related.mainImage).width(600).height(400).url()}
                          alt={related.title}
                          className={styles.relatedImage}
                        />
                        {related.categories && related.categories.length > 0 && (
                          <span
                            className={styles.relatedBadge}
                            style={{ backgroundColor: related.categories[0].color || '#0066cc' }}
                          >
                            {related.categories[0].title}
                          </span>
                        )}
                      </div>
                    )}
                    <div className={styles.relatedContent}>
                      <h3 className={styles.relatedCardTitle}>{related.title}</h3>
                      <p className={styles.relatedExcerpt}>{related.excerpt}</p>
                      <div className={styles.relatedMeta}>
                        <span className={styles.relatedDate}>
                          {new Date(related.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className={styles.relatedArrow}>→</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Explore More Articles</h2>
            <p className={styles.ctaText}>Discover expert insights and tips about moving and relocation</p>
            <Link href="/blog" className={styles.ctaButton}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 5l-7.5 7.5 7.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View All Articles
            </Link>
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
  )
}
