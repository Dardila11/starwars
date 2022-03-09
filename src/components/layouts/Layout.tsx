import { FC } from "react"

interface LayoutProps {
  title: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {

  return (
    <>
      <nav className="fixed flex flex-row items-center justify-center w-full px-5 py-5 bg-[#121212]">
        <h1 className="text-white">{title}</h1>
      </nav>
      <main className="pt-16">
        {children}
      </main>
    </>
  )
}
