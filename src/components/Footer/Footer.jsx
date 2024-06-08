import React from 'react';

const Footer = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl'>India's No.1 Matrimony App</h1>
      </div>
      <div className='flex justify-around mt-10'>
        <div className="border-b-2 w-96 flex justify-center items-center p-5 text-black">Mother Tongue</div>
        <div className="border-b-2 w-96 flex justify-center items-center p-5 text-black">Religion</div>
        <div className="border-b-2 w-96 flex justify-center items-center p-5 text-black" >Community</div>
      </div>
      <div className='flex justify-around mt-4'>
        <div className="w-96 flex items-center justify-center">
          Bengali | Gujarati | Kannada | Malayalam | Marathi | Odia | Punjabi | Tamil | Telugu
        </div>
        <div className="w-96 flex items-center justify-center">
          Buddhist | Christian | Jain | Muslim | Parsi | Sikh
        </div>
        <div className="w-96 flex items-center justify-center">
          Brahmin | Ezhava | Kamma | Kapu | Maratha | Nadar | Nair | Rajput | Reddy
        </div>
      </div>

      <div className='w-full flex justify-center mt-20'>
        <img src="https://img2.shaadi.com/assests/2016/images/home-page-layer-logo.png" alt="" className='h-20 w-20' />
      </div>
      <div className="mt-20 flex flex-col text-ellipsis px-4 md:px-24 lg:px-48 xl:px-96">
        <p className="mb-4 text-xs md:text-sm">
          Shaadi.com, India’s No.1 Matchmaking and Matrimony Service*, was founded with a simple objective - to help people find happiness. Shaadi.com is a leader in what is sometimes known as the matrimony category, we have touched more than 50 million lives.
        </p>
        <p className="mb-4 text-xs md:text-sm">
          Shaadi.com - a trusted matrimonial & matchmaking service, has always differentiated itself from other matrimonials through its innovation-led approach by redefining the way Indian brides and grooms meet for marriage.
        </p>
        <p className="mb-4 text-xs md:text-sm">
          We have also created trusted and renowned community specific matrimony platforms such as TamilShaadi.com, TeluguShaadi.com, MalayaleeShaadi.com, KannadaShaadi.com, BengaliShaadi.com, GujaratiShaadi.com, MarathiShaadi.com, PunjabiShaadi.com and more that has changed the way of finding a life partner.
        </p>
        <p className="text-xs md:text-sm">
          Shaadi.com (sometimes mis-spelt as Shadi.com, Shadhi.com or Sadi.com) is a social networking site specialising in matchmaking and not just a matrimonial service.
        </p>
      </div>

      <div className='flex justify-center mt-10'>
        <p className='text-cyan-400 '>India | USA | Canada | UK | Singapore | Australia | UAE | NRI Matrimonials</p>
      </div>

      <div className='flex flex-col md:flex-row justify-around mt-20 space-y-10 md:space-y-0 text-black'>
        <div>
          <h3 className='border-b-2 text-center pb-6 mb-6'>Need Help?</h3>
          <div className='space-y-2 flex flex-col justify-center items-center text-center text-sm'>
            <p>Member Login</p>
            <p>Sign Up</p>
            <p>Partner Search</p>
            <p>How to Use Shaadi.com</p>
            <p>Customer Support</p>
            <p>Site Map</p>
            <p>Premium Memberships</p>
          </div>
        </div>
        <div>
          <h3 className='border-b-2 text-center pb-6 mb-6'>Company</h3>
          <div className='space-y-2 flex flex-col justify-center items-center text-center text-sm'>
            <p>About Us</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
        <div>
          <h3 className='border-b-2 text-center pb-6 mb-6'>Privacy & You</h3>
          <div className='space-y-2 flex flex-col justify-center items-center text-center text-sm'>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Security Tips</p>
            <p>Report Abuse</p>
            <p>Data Protection</p>
          </div>
        </div>
        <div>
          <h3 className='border-b-2 text-center pb-6 mb-6'>More</h3>
          <div className="space-y-2 flex flex-col justify-center items-center text-center text-sm">
            <p>Success Stories</p>
            <p>FAQs</p>
            <p>Shaadi Blog</p>
            <p>Events</p>
            <p>Affiliate Program</p>
          </div>

        </div>
      </div>
      <div className='h-16 bg-gray-200 mt-10'></div>

    </div>
  );
}

export default Footer;
