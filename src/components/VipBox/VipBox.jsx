import React from 'react';

const VipBox = () => {
    return (
        <div className='flex justify-center px-4 bg-slate-200'>
            <div className='bg-[#201530] mt-20 h-auto md:w-3/4 sm:w-full rounded-2xl flex flex-col items-center p-5 md:flex-row md:justify-around'>
                <div className='text-center md:text-left border-r-0 md:border-r-2 border-r-amber-400 md:pr-10 py-3'>
                    <h1 className='text-2xl md:text-4xl pt-2 md:pt-1 px-5 md:px-0 text-yellow-400 font-playfair'>
                        Exclusive & Personalised Matchmaking by Shaadi.com
                    </h1>
                    <p className='text-white px-5 md:px-0 pt-3 md:pt-5'>
                        Top Rated Consultants | 5 times higher success rates | 100% Privacy
                    </p>
                </div>
                <div className='flex flex-col items-center md:items-start mt-5 md:mt-0'>
                    <img 
                        src="https://img2.shaadi.com/assests/2023/images/homepage/vipshaadi/vip_logo.webp" 
                        alt="VIP Logo" 
                        className='h-12 w-44 md:w-[350px] my-4 md:my-10' 
                    />
                    <button className='btn bg-yellow-200 rounded-lg h-10 w-80 md:w-[350px] mx-2 md:mx-0'>
                        Get Invited
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VipBox;
