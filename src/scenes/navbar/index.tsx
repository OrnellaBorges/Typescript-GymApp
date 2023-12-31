import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
type Props = {}

export const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between" // je stock une partie du tailwind  
  return (
    <nav className="shadow-sm">
        <div className={`${flexBetween} fixed top-0 z-3 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                <img alt="logo" src={Logo}/>
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>Home</p>
                        <p>Benefits</p>
                        <p>Our classes</p>
                        <p>Contact Us</p>
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign in</p>
                        <button>Become a member</button>
                    </div>
                </div>

            </div>

        </div>
        
        </div>
    </nav>
  )
}