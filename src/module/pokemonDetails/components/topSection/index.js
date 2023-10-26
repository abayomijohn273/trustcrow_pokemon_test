import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import Image from 'next/image'
import React from 'react'

const TopSection = ({ name, image }) => {
    return (
        <div className='mb-6'>
        <div className=''>
            <Image
                src={image || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png"}
                alt={name}
                width={100}
                height={100}
            />
        </div>

        <h3 className="mt-6 text-lg md:text:lg lg:text-xl xl:text-2xl font-bold leading-6 text-primary">
            {capitalizeFirstLetter(name)}
        </h3>
        </div>
    )
}

export default TopSection