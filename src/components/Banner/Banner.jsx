import React from 'react';

const Banner = () => {
  return (
    <div className='w-full h-[600px] overflow-hidden md:h-[600px] sm:h-[300px]'>
      <img 
        src="https://img2.shaadi.com/assests/2023/images/shaadi-desktop-banner-v1.webp" 
        alt="Banner Image" 
        className='w-full h-full object-cover'
      />
    </div>
  );
}

export default Banner;

