import React from 'react'
import signin from "../../assets/signin.svg"
import { GrUserManager } from 'react-icons/gr'

const Signin = () => {
  return (
    <div>
      <div className='bg-red-400'>
      <img src={signin} alt="Not Found" className='h-52 w-full mx-auto border ' />
      </div>
      <div className='mt-10 mx-[8%]'>
      <form action="">
        <div>
            <label htmlFor="" className=''>{<GrUserManager className='inline font-semibold text-base'/>}</label>
            <input type="text" placeholder='Enter your name' className='py-2 px-1 w-[80%] outline-none text-sm border-b border-blue-500' />
        </div>
      </form>
      </div>
    </div>
  )
}

export default Signin


