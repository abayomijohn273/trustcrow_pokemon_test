import Image from 'next/image'
import React from 'react'

const ImageSection = ({ data }) => {
    return (
        <div className='h-[20rem] flex justify-center items-center rounded-3xl bg-[#082AC8] shadow-[0_4px_15px_0px_rgba(0,0,0,0.05)] p-6'>
            <Image
                src={data?.sprites?.front_shiny || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png"}
                alt={name || "Pokemon"}
                width={100}
                height={100}
                className='h-44 w-44  rounded-full'
            />
        </div>
    )
}

export default ImageSection