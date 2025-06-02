"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { FaComputer } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
// import {NavLinks} from "@/constant/constant"
import { HiBars3BottomRight } from "react-icons/hi2";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-gradient-to-r from-purple-600 to-blue-500 w-full text-white transition-all duration-200
      h-[12vh] z-[100] flex justify-between items-center mx-auto">
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl bg-purple-300 rounded-full p-2"><FaComputer/></span>
          <div>
            <p className="font-bold text-2xl">কম্পিউটার পয়েন্ট</p>
            <p className="text-base text-xl">01731647688/01859732189</p>
          </div>
        </div>
        <div className="hidden md:flex gap-10 font-semibold text-xl">
          <Link href="#">Home</Link >
          <Link href="#Service">Services</Link >
          <Link href="#reviews">Review</Link >
          <Link href="#">Contact</Link >
        </div>
        </div>
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <HiBars3BottomRight size={28} />
        </button>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-20 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-r text-purple-300 from-purple-600 to-blue-500 shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <p className="font-bold text-lg text-gray-800"></p>
          <button onClick={() => setIsOpen(false)} className="text-purple-300">
            <TiDelete size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4 text-gray-300 font-medium">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#" onClick={() => setIsOpen(false)}>Location</a>
          <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
}