"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div className='h-auto  md:h-[40rem]  w-full flex  flex-col justify-center items-center relative mx-auto py-10'>
      {/* h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 */}
      <Spotlight />
      <div className=' p-4 w-full relative text-center '>
        <h1 className="text-4xl font-bold ">
          Master the art of music
        </h1 >
        <p className=' mt-10 mx-auto max-w-lg text-base text-normal  '>
          Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
      </div>
      <div>
        <Link href={"/courses"}>
        <Button borderRadius='1.75rem'>
          Explore courses
        </Button>
 
        </Link>
      </div>
    </div>
  )
}

export default HeroSection