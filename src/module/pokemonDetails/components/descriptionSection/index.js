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

const CategoryCard = ({ name }) => {
    return <div className={`text-white bg-secondary px-3 py-2 rounded-lg text-xs`}>
        <span className=' text-sm'>#{name}</span>
    </div>
}

const DescriptionSection = ({data}) => {
    return (
        <div className='mt-6 px-6 pt-6 pb-8 rounded-3xl border shadow-[0_4px_15px_0px_rgba(0,0,0,0.05)]'>
            <h3 className="text-lg md:text:xl lg:text-2xl xl:text-3xl font-bold leading-6 text-primary">
                {capitalizeFirstLetter(data?.name)}
            </h3>

            <div className='mt-8 flex flex-wrap flex-row gap-2'>
                {data?.types?.map(type => <CategoryCard
                    key={type}
                    name={type?.type.name}
                />)}

            </div>

            <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-4'>
                <Card
                    name={"Weight"}
                    value={data?.weight + "lbs"}
                    textColor={"text-[#18c172]"}
                />
                <Card
                    name={"Height"}
                    value={data?.height + "m"}
                    textColor={"text-[#F14D41]"}
                />
                <Card
                    name={"Order"}
                    value={data?.order}
                    textColor={"text-[#6E44FF]"}
                />
                <Card
                    name={"Base Experience"}
                    value={data?.base_experience}
                    textColor={"text-[#FF8450]"}
                />
            </div>
        </div>
    )
}

export default DescriptionSection