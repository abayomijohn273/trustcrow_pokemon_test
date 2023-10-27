import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import Link from 'next/link'
import React from 'react'

const Card = ({ name, pokemonType }) => {
    return <Link
        href={`/${pokemonType}/${name}`}
        className='rounded-2xl bg-white text-primary border 
        shadow-[0_4px_15px_0px_rgba(0,0,0,0.05)] py-4 px-6 
        hover:scale-[1.03] hover:bg-secondary hover:text-white 
        transition-all ease-in-out duration-200'
    >
        <div className='w-8 h-8 rounded-full bg-textColor text-white flex justify-center items-center font-bold'>
            {capitalizeFirstLetter(name?.[0])}
        </div>
        <div className='mt-2 text-lg font-semibold '>
            {capitalizeFirstLetter(name)}
        </div>
    </Link>
}

const PokemonListingSection = ({ pokemonType, results }) => {
    return (
        <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {
                results?.map((result, index) => <Card
                    key={index}
                    pokemonType={pokemonType}
                    name={result?.pokemon?.name}
                />)
            }
        </div>
    )
}

export default PokemonListingSection