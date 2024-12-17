"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  return (
    <header className="bg-gray-50 fixed w-full z-30">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 lg:px-8 relative">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/mainlogo.webp"
            height={150}
            width={200}
            alt="Doctor"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="lg:hidden text-gray-950 absolute right-4 top-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {/* Hamburger Icon */}
          <Image src="/hamburger.svg" alt="Menu" width={28} height={24} />
        </button>

        {/* Center Section - Menu Links */}
        <div className={`space-x-8 max-lg:hidden `}>
          <Link
            href="#features"
            className="block lg:inline text-lg font-sans text-gray-950 py-2 lg:py-0"
          >
            Features
          </Link>
          <Link
            href="#marketplace"
            className="block lg:inline text-lg font-sans text-gray-950 py-2 lg:py-0"
          >
            Marketplace
          </Link>
          <Link
            href="#company"
            className="block lg:inline text-lg font-sans text-gray-950 py-2 lg:py-0"
          >
            Company
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-sm font-sans text-gray-950 bg-gray-100 px-5 py-2 rounded-full shadow-md"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm text-white font-sans bg-blue-600 px-5 py-2 rounded-full shadow-2xl hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Right Section for Small Screens */}
        {isMenuOpen && (
          <div className="flex bg-gray-100 absolute p-4 lg:hidden top-[5rem] left-0  w-full justify-between  ">
            <div>
              <Link
                href="#features"
                className="block lg:inline text-lg font-sans text-gray-950 py-1 lg:py-0"
              >
                Features
              </Link>
              <Link
                href="#marketplace"
                className="block lg:inline text-lg font-sans text-gray-950 py-1 lg:py-0"
              >
                Marketplace
              </Link>
              <Link
                href="#company"
                className="block lg:inline text-lg font-sans text-gray-950 py-1 lg:py-0"
              >
                Company
              </Link>
            </div>
            <div className="space-y-4">
              <Link
                href="/login"
                className="text-sm font-sans text-gray-950 bg-gray-100 px-5 py-2 rounded-full shadow-md block"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="text-sm text-white font-sans bg-blue-600 px-5 py-2 rounded-full shadow-2xl hover:bg-blue-700 block"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
