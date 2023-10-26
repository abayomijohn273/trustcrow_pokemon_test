import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import React from 'react'

const TopSection = ({pokemonType}) => {
  return (
<div className="mt-8">
            <h2 className="text-xl lg:text-2xl font-bold text-primary">
                Pokemóns Listing
            </h2>
            <p className="mt-2 text-gray-500 text-sm-15 lg:text-vase">
                Explore various pokemóns in this category <span className='font-semibold text-secondary'>({capitalizeFirstLetter(pokemonType)})</span>
            </p>
        </div>
  )
}

export default TopSection