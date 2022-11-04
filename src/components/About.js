import React from 'react'
import SkillSphere from './SkillSphere'

export default function About() {
  return (
    <section id ='about' className='p-[calc(8px+1.5625vw)] lg:px-48 lg:py-20 anchor min-h-fit'>
      <div className='flex justify-center mt-11 text-lg gap-32'>
        <p className='mt-4 w-96 text-2xl'>
          "Lorem ipsum dolor sit amet, consectetur <span className='text-lime text-3xl'>adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <span className='text-lime text-3xl'>nostrud</span> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, quis nostrud exercitation ullamco nisi, ut aliquip ex ea commodo consequat.“
        </p>
        <div className='flex flex-col mt-4 w-96'>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, quis nostrud exercitation ullamco nisi, ut aliquip ex ea commodo consequat.
          </p>
          <div className='mt-4 ml-4'>
            <SkillSphere />
          </div>
        </div>
      </div>
    </section>
  )
}
