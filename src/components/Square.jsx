import React from 'react'

function Square({ value, onClick }) {
    return (
        <>
            <button className='bg-blue-300 w-20 h-20 m-2 duration-300 rounded text-3xl font-bold text-black hover:shadow-md hover:shadow-white' onClick={onClick}>
                {value}
            </button>
        </>
    )
}

export default Square
