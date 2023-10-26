"use client";
import React, { useEffect, useState } from 'react'
import TopSection from './topSection'
import LoadingSpinner from '@/components/blocks/loadingSpinner'
import EmptySection from '@/components/blocks/emptySection'
import PokemonListingSection from './pokemonListingSection'
import { getPokemonByCategoryId } from '@/services/api';
import { useParams } from 'next/navigation';

const Pokemon = () => {
    const params = useParams();
    const pokemonType = params?.pokemonType
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])

    const fetchData = async () => {
        setLoading(true)
        const data = await getPokemonByCategoryId(pokemonType);

        setResults(data?.pokemon);
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <TopSection pokemonType={pokemonType} />

            {
                loading ? <div className='pt-24 lg:pt-36 pb-32 lg:pb-64 mx-auto flex justify-center items-center'>
                    <LoadingSpinner />
                </div> :
                    results?.length > 0 ?
                        <PokemonListingSection
                            pokemonType={pokemonType}
                            results={results}
                        />
                        : <EmptySection
                            results={results}
                            loading={loading}
                        />
            }
        </div>
    )
}

export default Pokemon