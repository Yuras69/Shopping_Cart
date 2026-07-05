import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { IoNotifications } from "react-icons/io5";
const NavBar = () => {
    const { cart } = useContext(CartContext)

    const notificationCount = cart.length;
   
       return (
        <>
            <header className="bg-[#73aab0] text-white shadow-sm fixed top-0 w-full">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="text-xl font-bold">Shopping Site</div>
                    <div className="flex gap-4 text-sm">
                        <Link to="/" className="transition hover:text-[#e1ff00]">
                            Home
                        </Link>
                        <Link to="/Cart" className="transition hover:text-[#e1ff00]">
                            Cart
                              <div className={`notification-count align-middle inline-block relative`}>
        <span className="absolute top-[-12px] right-[-8px]  w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white" >{notificationCount}</span> <IoNotifications />
    </div>
                        </Link>
                        <Link to="/contact" className="transition hover:text-[#e1ff00]">
                            Contact
                        </Link>
                        <Link to="/product" className="transition hover:text-[#e1ff00]">
                            Product
                        </Link>
                        <Link to="/productAdd" className="transition hover:text-[#e1ff00]">
                            Product Add
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default NavBar;
