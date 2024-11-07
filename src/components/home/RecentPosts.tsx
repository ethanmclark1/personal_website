import { posts } from '@/lib/constants/blog'

export function RecentPosts() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
      <ul className="space-y-3">
        {posts.map((post, index) => (
          <li key={index}>
            <span className="text-gray-500 mr-3">{post.date}</span>
            <a href={`/blogs/${post.slug}`} className="hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}