import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import React from 'react'

const Card = ({ name, value, textColor }) => {
    return <div className={`${textColor}`}>
        <p className='text-sm-15 lg:text-sm'>
            {name}
        </p>
        <p className='mt-1 font-bold text-xl'>{value}</p>
    </div>
}

const StatsCard = ({ id, name, base_stat, effort }) => {
    const color = `rgba(${id * 50}, ${id * 20}, ${id * 80}, 1)`
    return <div
        className={`rounded-2xl bg-[rgba(${id + 1},1,1,0)] 
        shadow-[0_4px_5px_0px_rgba(0,0,0,0.05)] pt-6 pb-8 px-6 
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

        <hr className='border-[.5px] w-full mt-6 mb-6' />

        <div className='grid grid-cols-2 gap-2'>
               <Card 
                name={"Base Stat"}
                value={base_stat}
               />
               <Card 
                name={"Effort"}
                value={effort}
               />
        </div>
    </div>
}

const StatsSection = ({data}) => {
  return (
    <div className='mt-6 lg:mt-0 px-6 pt-6 pb-8 rounded-3xl border shadow-[0_4px_15px_0px_rgba(0,0,0,0.05)]'>
    <h3 className="text-lg md:text:lg lg:text-xl xl:text-2xl font-bold leading-6 text-secondary">
        Stats
    </h3>

    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
        {data?.stats?.map((stat, index) => <StatsCard
            key={stat?.stat?.name}
            id={index}
            name={stat?.stat?.name}
            base_stat={stat?.base_stat}
            effort={stat?.effort}
            textColor={"text-[#18c172]"}
        />)}
    </div>
</div>
  )
}

export default StatsSection