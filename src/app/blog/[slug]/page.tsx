import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils/date'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'

// Define custom components for MDX with correct typing
const components: MDXComponents = {
  a: ({ href, children }) => {
    // Add type check for href
    if (typeof href !== 'string') return null
    
    return (
      <Link href={href} className="text-blue-600 hover:underline">
        {children}
      </Link>
    )
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)
    
    return (
      <PageWrapper>
        <article className="prose prose-lg max-w-none prose-ol:list-decimal prose-ol:ml-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{post.frontmatter.title}</h1>
            <time className="text-gray-500">
              {formatDate(post.frontmatter.date)}
            </time>
          </header>
          <MDXRemote 
            source={post.content} 
            components={components}
          />
        </article>
      </PageWrapper>
    )
  } catch (error) {
    notFound()
  }
}