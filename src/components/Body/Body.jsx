import React from 'react'
import VipBox from '../VipBox/VipBox'
import Connect from '../Connect/Connect'
import Stories from '../Stories/Stories'
import Footer from '../Footer/Footer'

const Body = () => {
  return (
    <div className='h-96 bg-slate-200'>
        <VipBox/>
        <Connect/>
        <Stories/>
        <Footer/>
    </div>
  )
}

export default Body