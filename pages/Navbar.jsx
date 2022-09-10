/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import React, { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="bg-gray-900">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <Link href="/">
            <a
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <svg
                class="w-8 text-teal-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Company
              </span>
            </a>
          </Link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link href="/">
                <a
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Product
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Blog">
                <a
                  aria-label="Blog"
                  title="Blog"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Blogs
                </a>
              </Link>
            </li>
            <li>
              <Link href="#pricing">
                <a
                  aria-label="Product pricing"
                  title="Product pricing"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Pricing
                </a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a
                  aria-label="About us"
                  title="About us"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/FAQ">
                <a
                  aria-label="FAQ"
                  title="FAQ"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  FAQs
                </a>
              </Link>
            </li>
          </ul>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link href="/Login">
                <a
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Login
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Signup">
                <a
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-600 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </a>
              </Link>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute z-20  top-0 left-0 right-0 w-full h-screen">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/">
                        <a
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <svg
                            class="w-8 text-purple-700"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Company
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="flex-col flex justify-center items-center space-y-6">
                      <li>
                        <Link href="/">
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-700"
                          >
                            Product
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/Blog">
                          <a
                            href="/"
                            aria-label="Blogs"
                            title="Blogs"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-700"
                          >
                            Blogs
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#pricing">
                          <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-700"
                          >
                            Pricing
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#about">
                          <a
                            aria-label="About us"
                            title="About us"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-700"
                          >
                            About us
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/FAQ">
                          <a
                            aria-label="FAQ"
                            title="FAQ"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-700"
                          >
                            FAQs
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/Login">
                          <a
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
                            aria-label="Login"
                            title="Login"
                          >
                            Login
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/Signup">
                          <a
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-600 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
