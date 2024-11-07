export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ethan M. Clark
          </div>
          <div className="space-x-6">
            <a 
              href="https://github.com/ethanmclark1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              GitHub
            </a>
            <a 
              href="mailto:eclark715@gmail.com"
              className="text-gray-500 hover:text-gray-700"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}