import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main-background text-text-gray-800 flex min-h-screen flex-col justify-between bg-slate-100 dark:bg-slate-800 dark:text-gray-200">
      <Header />
      <main className="container mx-auto my-28 rounded bg-black/10 p-8 shadow backdrop-blur-3xl dark:bg-white/10">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
