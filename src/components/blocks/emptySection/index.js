import React from 'react'

const EmptySection = ({ loading, results }) => {
    return (
        <div>
            {results?.length === 0 && !loading && <div className='pt-24 pb-32'>
            <p className='text-center text-2xl font-bold'>No record returned.</p>
        </div>}
        </div>
    )
}

export default EmptySection