import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import Link from 'next/link'
import React from 'react'

const Card = ({ id, name }) => {
    const color = `rgba(${id * 10}, ${id * 2}, ${id * 20}, 1)`
    return <Link
        href={"/" + name}
        className={`rounded-2xl bg-[rgba(${id + 1},1,1,0)] 
        shadow-[0_4px_5px_0px_rgba(0,0,0,0.05)] py-4 px-6 
        hover:scale-[1.03] text-white 
        transition-all ease-in-out duration-200 flex flex-col justify-center items-center text-center`}
        style={{
            background: `${color}`
        }}
    >
        <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.92188 4.78125C-0.637493 7.34062 -0.637493 11.4844 1.90313 14.0437C3.28126 10.8562 5.7375 8.19375 8.80313 6.60937C6.20625 8.80312 4.3875 11.8687 3.75 15.3469C6.1875 16.5 9.1875 16.0781 11.2031 14.0625C14.4656 10.8 15 0.984375 15 0.984375C15 0.984375 5.18438 1.51875 1.92188 4.78125Z" fill={`${color}`} />
            </svg>

        </div>
        <div className='mt-4 text-lg font-semibold '>
            {capitalizeFirstLetter(name)}
        </div>
    </Link>
}

const ResultListingSection = ({ results }) => {
    return (
        <div className="mt-8 lg:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {
                results?.map((result, index) => <Card
                    key={index}
                    id={index + 1}
                    name={result.name}
                />)
            }
        </div>
    )
}

export default ResultListingSection