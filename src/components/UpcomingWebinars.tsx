"use client"
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'

function UpcomingWebinars() {
  return (
    <div className="px-8 bg-gray-950 min-w-full  ">
    <div className="text-center py-12 ">
      <h1 className="text-teal-600 text-semibold tracking-wide text-xl uppercase">FEATURED WEBINARS</h1>
      <p className="mt-6 text-2xl text-white md:text-3xl tracking-tight font-extrabold leading-8 uppercase">
        ENHANCE YOUR MUSICAL JOURNEY WITH US 
      </p>
    </div>

    <div className='mt-10'>
        <HoverEffect items={featuredWebinars.map(webinar => (
            {
                title : webinar.title , 
                description : webinar.description , 
                link : webinar.slug
            }
        ))}/>
    </div>

    <div className="text-center mt-16">
        <Link href={"/"}>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-neutral-600 hover:border-blue-300  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-12 shadow-2xl">
            View all webinars
          </button>
        </Link>
      </div>

    </div>
  )
}

export default UpcomingWebinars



const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];