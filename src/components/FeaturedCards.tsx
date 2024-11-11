"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import coursesData from '../data/music-courses.json'
import Link from "next/link";
import { Interface } from "readline";


interface Course {
  id: number;
  title: string;
  description: string;
  slug: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  image: string
}


export default function FeaturedCards() {

  const featuredCourses = coursesData.courses.filter((course: Course) => course.isFeatured)

  return (
    <div className="px-8 bg-gray-900 min-w-full  ">
      <div className="text-center py-12 ">
        <h1 className="text-teal-600 text-semibold tracking-wide text-xl uppercase">FEATURED COURSES</h1>
        <p className="mt-6 text-2xl text-white md:text-3xl tracking-tight font-extrabold leading-8 uppercase">
          LEARN WITH THE BEST
        </p>
      </div>


      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 justify-center p-4">

        {featuredCourses.map(course => (
          <div key={course.id}>
            <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900 min-h-80">
              <div className="flex flex-col justify-center items-center flex-grow">
                <h1 className="text-lg sm:text-xl mb-4 mt-2 text-black dark:text-neutral-200 font-semibold">
                  {course.title}
                </h1>
                <p className="text-lg sm:text-xl mb-4 mt-2 text-black dark:text-neutral-200 ">
                  {course.description}
                </p>
                <div className="w-full mt-3 absolute bottom-8 ml-10">
                <Link
                  href={`/course/:${course.slug}`}
                  className="bg-blue-400 text-black rounded-lg p-2 mt-4"
                  >
                  See More
                </Link>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}

      </div>



      <div className="text-center">
        <Link href={"/"}>


          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-12">
            Learn More
          </button>



        </Link>
      </div>
    </div>
  );
}
