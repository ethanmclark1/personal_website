export function Header() {
  return (
    <header className="mb-12">
      <h1 className="text-3xl mb-2 font-bold">Ethan M. Clark</h1>
      <nav className="text-gray-600 mb-6">
        <a href="/" className="mr-6 hover:underline">Home</a>
        <a href="/blogs" className="mr-6 hover:underline">Blog</a>
        <a href="/projects" className="mr-6 hover:underline">Projects</a>
        <a href="/resume" className="mr-6 hover:underline">Resume</a>
      </nav>
    </header>
  )
}