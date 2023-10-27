"use client";
import React, { useEffect, useState } from 'react'
import TopSection from './topSection'
import LoadingSpinner from '@/components/blocks/loadingSpinner'
import EmptySection from '@/components/blocks/emptySection'
import PokemonListingSection from './pokemonListingSection'
import { getPokemonByCategoryId } from '@/services/api';
import { useParams } from 'next/navigation';
import SearchFormSection from './searchFormSection';
import PaginationSection from './paginationSection';
import GoBackButton from '@/components/blocks/goBackButton';

const Pokemon = () => {
    const params = useParams();
    const pokemonType = params?.pokemonType
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState([])
    const [results, setResults] = useState([])
    const [search, setSearch] = useState("");

    const [limit, setLimit] = useState(25)
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [hasPrevious, setHasPrevious] = useState(false)
    const [hasNext, setHasNext] = useState(false)


    const fetchData = async () => {
        setLoading(true)
        const data = await getPokemonByCategoryId(pokemonType);
        const pokemon = data?.pokemon;

        setTotalResults(pokemon);
        setResults(pokemon?.slice(0, limit));
        setHasNext(pokemon?.length > limit);
        setTotalPages(Math.ceil(pokemon?.length / limit))
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleChangeSearchValue = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = (e) => {
        if (search?.length > 0) {
            const data = totalResults?.filter(a => a?.pokemon?.name?.includes(search?.toLowerCase()));
            const sliceData = data?.slice(0, limit)
            setResults(sliceData)
            setCurrentPage(1);
            setHasPrevious(false);
            setHasNext(data?.length > limit);
            setTotalPages(Math.ceil(data?.length / limit))
        } else {
            fetchData();
        }
    }

    const handlePaginatePrevious = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 400);

        const index = currentPage > 1 ? currentPage - 1 : 1
        const currentIndex = (limit * (index - 1));

        setResults(totalResults?.slice(currentIndex, currentIndex + limit));
        setCurrentPage(index);
        setHasPrevious(currentPage - 1 > 1);
        setHasNext(currentPage < totalPages);
    }

    const handlePaginateNext = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 400);

        const currentIndex = (limit * currentPage);
        setResults(totalResults?.slice(currentIndex, currentIndex + limit));
        setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
        setHasPrevious(currentPage > 0);
        setHasNext(currentPage + 1 < totalPages);
    }


    return (
        <div>
            <div className='mb-6'>
                <GoBackButton />
            </div>
            <TopSection pokemonType={pokemonType} />
            <div className="mt-8 w-full md:w-6/12 lg:w-5/12">
                <SearchFormSection
                    search={search}
                    handleChangeSearchValue={handleChangeSearchValue}
                    handleSearch={handleSearch}
                />
            </div>
            {
                loading ? <div className='pt-24 lg:pt-36 pb-32 lg:pb-64 mx-auto flex justify-center items-center'>
                    <LoadingSpinner />
                </div> :
                    results?.length > 0 ?
                        <>
                            <PokemonListingSection
                                pokemonType={pokemonType}
                                results={results}
                            />
                            <PaginationSection
                                hasPrevious={hasPrevious}
                                hasNext={hasNext}
                                handlePaginatePrevious={handlePaginatePrevious}
                                handlePaginateNext={handlePaginateNext}
                            />
                        </>
                        : <EmptySection
                            results={results}
                            loading={loading}
                        />
            }
        </div>
    )
}

export default Pokemon