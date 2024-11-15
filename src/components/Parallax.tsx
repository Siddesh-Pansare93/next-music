"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return (
    <div className="mb-20">
      <HeroParallax products={products} />
    </div>
  )
}
export const products = [
  {
    title: "Guitar Mastery",
    link: "https://guitarmastery.com",
    thumbnail: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Piano Prodigy",
    link: "https://pianoprodigy.com",
    thumbnail: "https://images.pexels.com/photos/258805/pexels-photo-258805.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Drum Academy",
    link: "https://thedrumacademy.com",
    thumbnail: "https://images.pexels.com/photos/237464/pexels-photo-237464.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Vocal Harmony",
    link: "https://vocalharmony.com",
    thumbnail: "https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Music Theory Mastery",
    link: "https://musictheorymastery.com",
    thumbnail: "https://images.pexels.com/photos/10252580/pexels-photo-10252580.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Sound Engineering Essentials",
    link: "https://soundengineering.com",
    thumbnail: "https://images.pexels.com/photos/18653022/pexels-photo-18653022/free-photo-of-microphone-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "DJ Academy",
    link: "https://djacademy.com",
    thumbnail: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Orchestra Training",
    link: "https://orchestratraining.com",
    thumbnail: "https://images.pexels.com/photos/26158986/pexels-photo-26158986/free-photo-of-orchestra-on-a-stage.png?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Music Production Hub",
    link: "https://musicproductionhub.com",
    thumbnail: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Singing Masterclass",
    link: "https://singingmasterclass.com",
    thumbnail: "https://images.pexels.com/photos/9001997/pexels-photo-9001997.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "The Band Academy",
    link: "https://thebandacademy.com",
    thumbnail: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Jazz Studies",
    link: "https://jazzstudies.com",
    thumbnail: "https://images.pexels.com/photos/13847666/pexels-photo-13847666.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Songwriting School",
    link: "https://songwritingschool.com",
    thumbnail: "https://images.pexels.com/photos/29356662/pexels-photo-29356662/free-photo-of-black-and-white-piano-keyboard-with-music-sheet.png?auto=compress&cs=tinysrgb&w=600",
  },
]

