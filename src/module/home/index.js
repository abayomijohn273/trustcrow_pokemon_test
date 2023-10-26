"use client"
import React, { useEffect, useState } from 'react'
import TopSection from './components/topSection'
import { getPokemonCategories } from '@/services/api'
import ResultListingSection from './components/resultListingSection'
import LoadingSpinner from '@/components/blocks/loadingSpinner'
import EmptySection from '@/components/blocks/emptySection'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])

    const fetchData = async () => {
        setLoading(true)
        const data = await getPokemonCategories();
        setResults(data);
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <TopSection />

            {
                loading ? <div className='pt-24 lg:pt-36 pb-32 lg:pb-64 mx-auto flex justify-center items-center'>
                    <LoadingSpinner />
                </div> :
                    results?.length > 0 ?
                        <ResultListingSection
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

export default Home