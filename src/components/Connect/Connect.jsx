import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUserPlus, faComments } from '@fortawesome/free-solid-svg-icons';

const Connect = () => {
    return (
        <div className='bg-slate-200'>
            <div className='flex justify-center m-4 md:m-20 '>
                <h1 className='text-3xl md:text-xl lg:text-4xl text-red-400'>Find your Special Someone</h1>
            </div>
            <div className='flex justify-evenly flex-wrap'>
                <div className="flex flex-col items-center mb-8">
                    <div className="h-32 w-32 bg-cyan-400 rounded-full flex justify-center items-center hover:bg-cyan-600 transition duration-300">
                        <FontAwesomeIcon className='h-10 text-white' icon={faPenToSquare} />
                    </div>
                    <h3 className='mt-5 text-2xl text-cyan-400'>Sign Up</h3>
                    <span className='text-gray-500'>Register for free & put up your Matrimony Profile</span>
                </div>
                <div className="flex flex-col items-center mb-8">
                    <div className="h-32 w-32 bg-cyan-400 rounded-full flex justify-center items-center hover:bg-cyan-600 transition duration-300">
                        <FontAwesomeIcon className='h-10 text-white' icon={faUserPlus} />
                    </div>
                    <h3 className='mt-5 text-2xl text-cyan-400'>Connect</h3>
                    <span className='text-gray-500'>Register for free & put up your Matrimony Profile</span>
                </div>
                <div className="flex flex-col items-center mb-8">
                    <div className="h-32 w-32 bg-cyan-400 rounded-full flex justify-center items-center hover:bg-cyan-600 transition duration-300">
                        <FontAwesomeIcon className='h-10 text-white' icon={faComments} />
                    </div>
                    <h3 className='mt-5 text-2xl text-cyan-400'>Interact</h3>
                    <span className='text-gray-500'>Register for free & put up your Matrimony Profile</span>
                </div>
            </div>
        </div>
    )
}

export default Connect;
