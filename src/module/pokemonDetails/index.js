"use client"
import GoBackButton from '@/components/blocks/goBackButton'
import LoadingSpinner from '@/components/blocks/loadingSpinner'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { getPokemonDetails } from '@/services/api'
import ImageSection from './components/imageSection'
import DescriptionSection from './components/descriptionSection'
import AbilitiesSection from './components/abilitiesSection'
import StatsSection from './components/statsSection'

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
                        <div className="mx-auto pb-12">
                            <div className="">
                                <div className='mb-6 lg:mb-8'>
                                    <GoBackButton />
                                </div>
                                <div className='flex flex-row flex-wrap'>
                                    <div className='w-full lg:w-6/12'>
                                        <ImageSection
                                            data={data}
                                        />
                                        <DescriptionSection
                                            data={data}
                                        />
                                        <AbilitiesSection
                                            data={data}
                                        />
                                    </div>
                                    <div className='flex-1 pl-0 md:pl-4 lg:pl-6'>
                                        <StatsSection data={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
            }
        </div>
    )
}

export default PokemonDetails