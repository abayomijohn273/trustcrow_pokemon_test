import React from 'react'

const SearchFormSection = ({ search, handleChangeSearchValue, handleSearch }) => {
    return (
        <div>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-textColor sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="search"
                    name="search"
                    value={search}
                    onChange={handleChangeSearchValue}
                    onKeyUp={handleSearch}
                    className="block w-full px-4 py-4 pl-10 text-sm-15 md:text-base text-textColor placeholder:text-textColor border border-secondary rounded-2xl bg-white focus:ring-secondary focus:outline-none"
                    placeholder="Search by pokemon name..."
                    required
                />
            </div>
        </div>
    )
}

export default SearchFormSection