"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import schooLcontent from "../data/whyToChoose-content.json"


const content = schooLcontent.content

export function StickyScrollComponent() {
  return (
    <div className="mt-20">
      <h1 className="w-full text-center  md:text-4xl text-2xl mb-10 font-extrabold tracking-tighter ">WHY TO CHOOSE US</h1>
      <StickyScroll content={content} />
    </div>
  );
}
