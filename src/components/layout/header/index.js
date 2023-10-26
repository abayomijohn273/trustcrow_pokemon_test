import Link from 'next/link'
import React from 'react'


const Header = () => {
    return (
        <header className="relative">
            <nav className="container mx-auto px-4 lg:px-8 xl:px-4 py-6">
                <Link href={"/"} className="font-bold text-lg lg:text-xl ">
                    <span className="text-primary">Pokemóns</span>
                    <span className="text-secondary">Test</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header