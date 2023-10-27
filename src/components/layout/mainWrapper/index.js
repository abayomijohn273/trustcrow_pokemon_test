import React from 'react'
import Header from '../header'
import Footer from '../footer'

const MainWrapper = ({ children }) => {
    return (
        <main className='relative'>
            <Header />
            <section className="relative">
                <div className="container mx-auto px-4 lg:px-8 xl:px-4 mt-4 md:pt-6 lg:pt-8 pb-12">
                    {children}
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default MainWrapper