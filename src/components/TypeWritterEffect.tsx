"use client"
import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'

function TypeWritterEffect() {
    const words  = [
        {
          text: "MASTER",
        },
        {
          text: "THE",
        },
        {
          text: "ART",
        },
        {
          text: "OF",
        },
        {
          text: "MUSIC !",
          className: "text-teal-500 dark:text-teal-500",
        },
      ];
  return (

    <TypewriterEffectSmooth words={words} className=' text-xl sm:text-4xl' />
  )
}

export default TypeWritterEffect