"use client"

import { cn } from "@/lib/utils"; // Ensure that `cn` is correctly imported
import Image from "next/image";
import Link from "next/link";

interface CardDetails {
  id: number;
  title: string;
  description: string;
  slug: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  image: string

}

interface CardProps {
  cardDetails: CardDetails; // Define prop interface
}

function Card({ cardDetails }: CardProps) {
  console.log(cardDetails.image);

  return (
    <div className="max-w-xs w-full group/card ">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        )}
        style={{
          backgroundImage: `url(${cardDetails.image || "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={cardDetails.image}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {cardDetails.instructor}
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {cardDetails.title}
          </h1>
          <p className="font-normal text-sm  text-gray-300 relative z-10 my-4">
            {cardDetails.description}
          </p>
          <Link href={`/course:/${cardDetails.slug}`}>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
