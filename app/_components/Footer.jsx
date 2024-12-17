import React from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900">
      {/* Footer Content */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="lg:pl-0 md:pl-0 sm:pl-0 pl-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/mainlogo.webp"
              width={250}
              height={150}
              alt="Logo"
              className="object-contain cursor-pointer"
            />
          </div>
          <p className="mt-4 py-3 text-md leading-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
            nobis excepturi. Accusantium non, voluptas similique obcaecati
            molestias perferendis, sint doloribus eaque dolor illo iure placeat
            hic laudantium fuga eveniet ipsum!
          </p>
        </div>

        {/* Company Section */}
        <div className="pl-4 lg:pl-12 sm:pl-0">
          <h3 className="text-2xl mb-4 w-fit">
            Company
            <div className="h-1 bg-blue-600 mt-2"></div>
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Blog Section */}
        <div className="lg:pl-0 md:pl-0 sm:pl-0 pl-4">
          <h3 className="text-2xl mb-4 w-fit">
            Blog
            <div className="h-1 bg-blue-600 mt-2"></div>
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">
              Getting Started With HTML and CSS
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              What Is Flex And When to Use It?
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              How TailwindCSS Can Help Your Productivity?
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              5 Tips to Make Responsive Website
            </li>
            <li className="hover:text-blue-600 cursor-pointer">See More</li>
          </ul>
        </div>

        {/* Connect With Us Section */}
        <div className="pl-4 md:pl-8">
          <h3 className="text-2xl mb-4 w-fit">
            Connect With Us
            <div className="h-1 bg-blue-600 mt-2"></div>
          </h3>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook">
              <div className="text-blue-600 border-2 border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition duration-300">
                <FaFacebook size={20} />
              </div>
            </Link>
            <Link href="#" aria-label="Twitter">
              <div className="text-blue-600 border-2 border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition duration-300">
                <FaTwitter size={20} />
              </div>
            </Link>
            <Link href="#" aria-label="Instagram">
              <div className="text-blue-600 border-2 border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition duration-300">
                <FaInstagram size={20} />
              </div>
            </Link>
            <Link href="#" aria-label="YouTube">
              <div className="text-blue-600 border-2 border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition duration-300">
                <FaYoutube size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-600 text-white text-center py-4 text-sm">
        <p>
          Copyright &copy; 2024 -{" "}
          <span className="font-semibold">Shams U Rahman</span>. All Rights
          Reserved.
        </p>
        <p>
          Made with <span className="text-red-500">&hearts;</span> by Shams U
          Rahman
        </p>
      </div>
    </footer>
  );
};

export default Footer;
