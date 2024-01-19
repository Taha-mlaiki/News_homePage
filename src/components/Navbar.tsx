import bars from "../assets/images/icon-menu.svg"
import close from "../assets/images/icon-menu-close.svg"
import logo from "../assets/images/logo.svg"
import { useState } from "react"

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(true)
  return (
    <header>
        <nav className='container'>
            <div className='flex min-h-16 items-center mt-3 px-7 xl:px-14 content-between'>
                <img src={logo} alt="" />
                <div className="ms-auto">
                    <img onClick={()=> setShowMenu((prev)=> !prev)} className=" cursor-pointer md:hidden" src={bars} alt="" />
                <ul className='hidden md:flex navLinks'>
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">New</a></li>
                    <li> <a href="#">Popular</a></li>
                    <li> <a href="#">Trending</a></li>
                    <li> <a href="#">Categories</a></li>
                </ul>
                </div>
            </div>
        </nav>
            <div className={`mob_menu w-3/4 sm:w-2/4 ${showMenu && "hidden"}`}>
                <img onClick={()=> setShowMenu((prev)=> !prev)} className=" w-6 cursor-pointer" src={close} alt="" />
                <ul className='mt-20'>
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">New</a></li>
                    <li> <a href="#">Popular</a></li>
                    <li> <a href="#">Trending</a></li>
                    <li> <a href="#">Categories</a></li>
                </ul>
            </div>
    </header>
  )
}

export default Navbar
