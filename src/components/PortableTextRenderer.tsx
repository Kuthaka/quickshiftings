import { PortableText, PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

// Custom components for rendering portable text
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure style={{ margin: '2rem 0' }}>
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          {value.caption && (
            <figcaption style={{
              textAlign: 'center',
              fontSize: '0.9rem',
              color: '#6c757d',
              marginTop: '0.5rem'
            }}>
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '700',
        margin: '2rem 0 1rem',
        color: '#212529'
      }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem',
        color: '#212529'
      }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem',
        color: '#212529'
      }}>
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{
        borderLeft: '4px solid #0066cc',
        paddingLeft: '1.5rem',
        margin: '2rem 0',
        fontStyle: 'italic',
        color: '#495057',
        fontSize: '1.1rem'
      }}>
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        margin: '1rem 0',
        color: '#495057'
      }}>
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{
        margin: '1.5rem 0',
        paddingLeft: '2.5rem',
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#495057',
        listStyleType: 'disc',
        listStylePosition: 'outside'
      }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol style={{
        margin: '1.5rem 0',
        paddingLeft: '2.5rem',
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#495057',
        listStyleType: 'decimal',
        listStylePosition: 'outside'
      }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{
        margin: '0.5rem 0',
        display: 'list-item',
        listStyleType: 'disc'
      }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{
        margin: '0.5rem 0',
        display: 'list-item',
        listStyleType: 'decimal'
      }}>{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ fontWeight: '700', color: '#212529' }}>{children}</strong>
    ),
    em: ({ children }) => (
      <em style={{ fontStyle: 'italic' }}>{children}</em>
    ),
    code: ({ children }) => (
      <code style={{
        backgroundColor: '#f8f9fa',
        padding: '0.2rem 0.4rem',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '0.9em',
        color: '#e83e8c'
      }}>
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const target = value?.blank ? '_blank' : undefined
      const rel = value?.blank ? 'noopener noreferrer' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          style={{
            color: '#0066cc',
            textDecoration: 'underline',
            transition: 'color 0.3s ease'
          }}
        >
          {children}
        </a>
      )
    },
  },
}

interface PortableTextRendererProps {
  value: any[]
}

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
  return <PortableText value={value} components={components} />
}
