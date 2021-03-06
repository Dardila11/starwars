import { FC } from "react"
import { Link } from "react-router-dom"
import backArrow from 'assets/icons/backarrow.svg'

interface LayoutProps {
  title: string
  back?: boolean
}

export const Layout: FC<LayoutProps> = ({ children, title, back }) => {

  return (
    <>
      <nav className={`fixed flex flex-row w-full px-5 py-5 bg-ravn-black ${back ? 'justify-between' : 'items-center justify-center'}`}>
        {back ?
          <>
            <Link to={'/'}><button ><img src={backArrow} className="inline" alt="go back" /></button></Link>
            <h1 className="flex-1 font-bold text-center text-white text-17">{title}</h1>
          </> : <h1 className="font-bold text-white text-17">{title}</h1>}
      </nav>
      <main className="pt-16 overflow-auto overflow-x-hidden">
        {children}
      </main>
    </>
  )
}
