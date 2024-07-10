import React from 'react'

const Body = () => {
  return (
    <div className='mx-80 my-20'>
      <h1 className='font-bold text-6xl mb-8'>CONTACT US</h1>
      <h2 className='font-semibold text-lg text-slate-500'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </h2>
      <div className='flex justify-between'>
        <form className="flex flex-col space-y-4 mt-10">
            <label htmlFor="name" className=" text-lg font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-72 block border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          
            <label htmlFor="email" className=" text-lg font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </form>
        <img src='IMAGES/Service 24_7-pana 1.svg'/>
      </div>
    </div>
  )
}

export default Body
