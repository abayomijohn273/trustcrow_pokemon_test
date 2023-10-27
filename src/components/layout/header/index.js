import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../../../../public/pokemon.png"

const Header = () => {
    return (
        <header className="relative">
            <nav className="container mx-auto px-4 lg:px-8 xl:px-4 py-6">
                <Link href={"/"} className="font-bold text-base lg:text-lg ">
                    <Image src={Logo} alt="Pokemon" className='w-20 lg:w-24' />
                    <span>
                        <span className="text-primary">Trustcrow</span>
                        <span className="text-secondary">Test</span>
                    </span>

                </Link>
            </nav>
        </header>
    )
}

export default Header