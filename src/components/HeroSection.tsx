"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import TypeWritterEffect from './TypeWritterEffect';

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-10'>
      {/* h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 */}
      <Spotlight />
      <div className=' p-4 w-full relative text-center '>
        <div className="flex justify-center items-center">
          <TypeWritterEffect/>
        </div >
        <p className=' mt-10 mx-auto max-w-lg text-base   '>
          Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
      </div>
      <div className='mt-6'>
        <Link href={"/courses"} >
        <Button 
        borderRadius='1.75rem'
        className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'
        >
          Explore courses
        </Button>
 
        </Link>
      </div>
    </div>
  )
}

export default HeroSection