import React from 'react'
import SkillSphere from './SkillSphere'

export default function About() {
  return (
    <section id ='about' className='min-h-screen'>
      <div className='flex items-center'>
        <h2 className='font-semibold text-4xl'>About</h2>
        <div className='line'></div>
      </div>
      <p className='mt-4 text-base'>
        I'm a software developer who loves problem-solving and learning new skills. I transitioned to coding when I realised how much I enjoyed the programming aspect of my psychology research.
        <br />
        <br />
        With my background in psychology and people-focused job experiences, I’m a natural team player who cares about my peers and performs well in collaborative teams.
        <br />
        <br />
        I'm currently seeking a role that will take advantage of my problem-solving skills, my team-player mentality, and my passion for coding.
        </p>
      <SkillSphere />
    </section>
  )
}
