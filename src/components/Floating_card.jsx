"use client"
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
export default function Floating_card() {
   
  return (
    <div className="px-8 bg-gray-900 min-w-full">
        <div className="text-center py-12 ">
            <h1 className="text-teal-600 text-semibold tracking-wide text-xl uppercase">FEATURED COURSES</h1>
            <p className="mt-6 text-2xl text-white md:text-3xl tracking-tight font-extrabold leading-8 uppercase">
                LEARN WITH THE BEST
            </p>
        </div>
        <div>2</div>
        <div className="text-center">
            <Link href={""}>
                
       
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-12">
          Learn More
        </button>
  

       
            </Link>
        </div>
    </div>
  );
}

