import React from 'react'
const Header = () => {
  return (
    <div className='flex justify-between my-7 px-20 border-b-2'>
      <img src='/IMAGES/Frame 2 1.png'/>
      <div className='flex gap-10 m-4 font-bold text-lg'>
        <h1>Home</h1>
        <h1>Contact Us</h1>
        <h1>About</h1>
      </div>
    </div>
  )
}

export default Header
