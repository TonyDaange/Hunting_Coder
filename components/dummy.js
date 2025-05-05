import React from 'react'

const Dummy = () => {
    return (
        <>
            <style jsx >
                {`
                .dummy{
                    background: blue;
                }
                `}
            </style>
            <div className='dummy'>
                This is Dummy
            </div>
        </>
    )
}

export default Dummy