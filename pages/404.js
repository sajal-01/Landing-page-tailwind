/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-2 gap-1">
      <div class="xl:pt-24 w-full xl:w-1/3 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <h1 class="my-2 text-gray-800 font-bold text-2xl">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p class="my-2 text-gray-800">
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
            <Link href="/">
              <button class="sm:w-full lg:w-auto my-2  rounded md text-3xl py-4 px-2 text-center text-indigo-700  hover:bg-indigo-200 ">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/FFFFFF/external-arrow-arrows-vitaliy-gorbachev-blue-vitaly-gorbachev-3.png" />
                Go Back
              </button>
            </Link>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" />
      </div>
    </div>
  );
}

{
  /* <img
      className="h-full "
      src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
    /> */
}
