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


    <div className="mx-8 mt-10">
      <div className="grid lg:grid-cols-4 grid-cols-1  gap-10 justify-center p-4 ">

        {featuredCourses.map(course => (
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full ">
              <div className="flex flex-col text-center item-center  py-0 ">
                <h1 className="text-lg sm:text-2xl mb-4 mt-2 text-black dark:text-neutral-200 font-semibold">
                  {course.title}
                </h1>
                <p className="text-lg sm:text-base mb-4 mt-2 text-black dark:text-gray-300  ">
                  {course.description}
                </p>
                <div className="w-full mt-3 ml-2 ">
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
      </div>



      <div className="text-center">
        <Link href={"/"}>


          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-neutral-600 hover:border-blue-300  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-12 shadow-2xl">
            Learn About More Courses 
          </button>



        </Link>
      </div>
    </div>
  );
}
