import React from 'react'
import SkillSphere from './SkillSphere'

export default function About() {
  return (
    <section id ='about' className='p-[calc(8px+1.5625vw)] lg:px-48 lg:py-20 anchor min-h-fit'>
      <div className="flex justify-between items-center my-4 lg:mb-8">
        <div className='line'></div>
        <h2 className='font-semibold text-3xl text-center'>About</h2>
        <div className="line"></div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center lg:mt-11 text-lg gap-2 lg:gap-32'>
        <p className='mt-4 lg:w-96 lg:text-2xl'>
          "Lorem ipsum dolor sit amet, consectetur <span className='text-lime lg:text-3xl'>adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <span className='text-lime lg:text-3xl'>nostrud</span> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, quis nostrud exercitation ullamco nisi, ut aliquip ex ea commodo consequat.“
        </p>
        <div className='flex flex-col mt-4 lg:w-96'>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, quis nostrud exercitation ullamco nisi, ut aliquip ex ea commodo consequat.
          </p>
          <div className='lg:mt-4 lg:ml-4 overflow-hidden'>
            <SkillSphere />
          </div>
        </div>
      </div>
    </section>
  )
}
