'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { urlFor } from '@/lib/sanity';
import type { BlogPost } from '@/lib/sanity';
import styles from './BlogPosts.module.css';

interface BlogPostsProps {
    posts?: BlogPost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });
    const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({ threshold: 0.2 });

    if (!posts || posts.length === 0) return null;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <section className={styles.blog}>
            <div className={styles.container}>
                <div
                    ref={headerRef}
                    className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
                >
                    <span className={styles.sectionLabel}>Our Blog</span>
                    <h2 className={styles.title}>
                        Latest <span>Insights</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Stay updated with moving tips, industry news, and helpful guides from our experts.
                    </p>
                </div>

                <div
                    ref={gridRef}
                    className={`${styles.grid} ${gridVisible ? styles.visible : ''}`}
                >
                    {posts.map((post, index) => (
                        <article
                            key={post._id}
                            className={styles.card}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={urlFor(post.mainImage).width(600).height(400).url()}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    className={styles.image}
                                />
                                {post.categories && post.categories.length > 0 && (
                                    <span className={styles.category}>
                                        {post.categories[0].title}
                                    </span>
                                )}
                            </div>

                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.date}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                                        </svg>
                                        {formatDate(post.publishedAt)}
                                    </span>
                                    {post.readTime && (
                                        <span className={styles.readTime}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                            </svg>
                                            {post.readTime} min read
                                        </span>
                                    )}
                                </div>

                                <h3 className={styles.postTitle}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>

                                <div className={styles.footer}>
                                    <div className={styles.author}>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.authorName}>{post.author.name}</span>
                                            {post.author.role && (
                                                <span className={styles.authorRole}>{post.author.role}</span>
                                            )}
                                        </div>
                                    </div>
                                    <a href={`/blog/${post.slug.current}`} className={styles.readMore}>
                                        Read More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div
                    ref={buttonRef}
                    className={`${styles.viewMoreContainer} ${buttonVisible ? styles.visible : ''}`}
                >
                    <a href="/blog" className={styles.viewMoreButton}>
                        View All Blogs
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogPosts;
