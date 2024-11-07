import { PageWrapper } from '@/components/layout/PageWrapper'
import { posts } from '@/lib/constants/blog'

export default function Blogs() {
  // Sort posts by date (assuming date format "MMM YYYY")
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date + " 1"); // Add day for proper parsing
    const dateB = new Date(b.date + " 1");
    return dateB.getTime() - dateA.getTime();
  });

  // Take only the three most recent blogs
  const recentPosts = sortedPosts.slice(0, 3);

  return (
    <PageWrapper>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <div className="space-y-6">
          {recentPosts.map((post, index) => (
            <div key={index}>
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">{post.date}</span>
                <a href={`/blogs/${post.slug}`} className="text-lg hover:underline">
                  {post.title}
                </a>
              </div>
              {post.description && (
                <p className="text-gray-600 mt-2">{post.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}