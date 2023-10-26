import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import Link from 'next/link'
import React from 'react'

const Card = ({ name }) => {
    return <Link
        href={"/" + name}
        className='rounded-2xl bg-white text-primary border 
        shadow-[0_4px_15px_0px_rgba(0,0,0,0.05)] py-4 px-6 
        hover:scale-[1.03] hover:bg-primary hover:text-white 
        transition-all ease-in-out duration-200'
    >
        <span className='text-lg font-semibold '>
            {capitalizeFirstLetter(name)}
        </span>
    </Link>
}

const ResultListingSection = ({ results }) => {
    return (
        <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                results?.map((result, index) => <Card
                    key={index}
                    name={result.name}
                />)
            }
        </div>
    )
}

export default ResultListingSection