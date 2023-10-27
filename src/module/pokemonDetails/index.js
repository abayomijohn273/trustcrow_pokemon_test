"use client"
import GoBackButton from '@/components/blocks/goBackButton'
import LoadingSpinner from '@/components/blocks/loadingSpinner'
import React, { useEffect } from 'react'
import TopSection from './components/topSection'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { getPokemonDetails } from '@/services/api'

const PokemonDetails = () => {
    const params = useParams();
    const slug = params?.slug
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})
    const [error, setError] = useState("");

    const fetchData = async () => {
        setLoading(true)
        try {
            const resp = await getPokemonDetails(slug);
            setData(resp)
            setLoading(false)
        } catch (error) {
            setError("Error occurred loading data. Try again later!")
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {
                loading ?
                    <div className='pt-40 pb-80 mx-auto flex justify-center'>
                        <LoadingSpinner />
                    </div> : error ? <div className='pt-'>
                        <div className='pt-40 pb-80 text-center text-red-500 font-bold'>
                            {error}
                        </div>
                    </div> :
                        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto pb-12">
                            <div className="">
                                <div className='mb-6 lg:mb-8'>
                                    <GoBackButton />
                                </div>
                                <TopSection
                                    image={data?.sprites?.front_shiny}
                                    name={data?.name}
                                />
                            
                            </div>
                        </div>
            }
        </div>
    )
}

export default PokemonDetails