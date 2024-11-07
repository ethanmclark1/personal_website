import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils/date'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

// This generates all possible slugs at build time
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// This renders the page for each slug
export default async function Post({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug)
    
    return (
      <PageWrapper>
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{post.frontmatter.title}</h1>
            <time className="text-gray-500">
              {formatDate(post.frontmatter.date)}
            </time>
          </header>
          <MDXRemote source={post.content} />
        </article>
      </PageWrapper>
    )
  } catch (error) {
    notFound()
  }
}