import React from 'react'

const PaginationSection = ({
    hasPrevious,
    hasNext,
    handlePaginatePrevious,
    handlePaginateNext
}) => {
    return (
        <div className="mt-6 flex justify-end">
            <button
                disabled={!hasPrevious}
                type='button'
                onClick={handlePaginatePrevious}
                className="flex items-center justify-center px-3 h-8 text-sm-15 lg:text-base disabled:text-gray-400 font-medium text-primary hover:text-secondary rounded-l ">
                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
                Prev
            </button>
            <button
                disabled={!hasNext}
                type='button'
                onClick={handlePaginateNext}
                className="flex items-center justify-center px-3 h-8 text-sm-15 lg:text-base disabled:text-gray-400 font-medium text-primary hover:text-secondary border-0 border-l rounded-r ">
                Next
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
    )
}

export default PaginationSection