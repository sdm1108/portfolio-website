export default function Footer(){
  return (
    <footer className="mt-16 py-8 text-center text-sm border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        © {new Date().getFullYear()} Your Name — Built with Next.js
      </div>
    </footer>
  )
}
