"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import schooLcontent from "../data/whyToChoose-content.json"


const content = schooLcontent.content

export function StickyScrollComponent() {
  return (
    <div className="mt-10">
      <StickyScroll content={content} />
    </div>
  );
}
