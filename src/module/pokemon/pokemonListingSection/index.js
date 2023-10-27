import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import Link from 'next/link'
import React from 'react'

const Card = ({ id, name, pokemonType }) => {
    const color = `rgba(${id * 10}, ${id * 2}, ${id * 20}, 1)`

    return <Link
        href={`/${pokemonType}/${name}`}
        className='rounded-2xl bg-white text-primary border 
        shadow-[0_4px_15px_0px_rgba(0,0,0,0.05)] py-4 px-6 
        hover:scale-[1.03] hover:bg-primary hover:text-white 
        transition-all ease-in-out duration-200 flex flex-col justify-center items-center text-center'
    >
        <div
            className='w-8 h-8 rounded-full bg-textColor text-white flex justify-center items-center font-bold'
            style={{ background: `${color}` }}
        >
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
                    id={index}
                    pokemonType={pokemonType}
                    name={result?.pokemon?.name}
                />)
            }
        </div>
    )
}

export default PokemonListingSection