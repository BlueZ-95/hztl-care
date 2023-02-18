import Image from "next/image"
import { useState } from "react"

export default function CampaignLists() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header>
        <div className="bg-theme-bg-1">
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
              <ul className="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-dark transition-colors duration-200 hover:theme-01"
                  >
                    Link 01
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium text-gray-dark tracking-wide transition-colors duration-200 hover:theme-01"
                  >
                    Link 02
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-gray-dark transition-colors duration-200 hover:theme-01"
                  >
                    Link 03
                  </a>
                </li>
              </ul>
              <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center lg:mx-auto"
              >
                <Image
                  priority
                  src="hcare-logo.svg"
                  height={120}
                  width={120}
                  alt="Horizontal Care"
                />
                <span className="ml-2 text-xl font-bold tracking-wide text-theme-01 uppercase hidden">
                  Horizontal Care
                </span>
              </a>
              <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
                <li>
                  <a
                    href="/"
                    aria-label="Sign in"
                    title="Sign in"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none"
                  >
                    Sign in
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
              <div className="ml-auto lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
                  <div className="absolute top-0 left-0 w-full">
                    <div className="p-5 bg-white border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                            <Image
                              priority
                              src="horizontal-care.svg"
                              height={32}
                              width={32}
                              alt="Horizontal Care"
                            />
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                              Horizontal Care
                            </span>
                          </a>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-4">
                          <li>
                            <a
                              href="/"
                              aria-label="Our product"
                              title="Our product"
                              className="font-medium tracking-wide text-gray-dark transition-colors duration-200 hover:theme-01"
                            >
                              Link 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              aria-label="Our product"
                              title="Our product"
                              className="font-medium tracking-wide text-gray-dark transition-colors duration-200 hover:theme-01"
                            >
                              Link 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              aria-label="Product pricing"
                              title="Product pricing"
                              className="font-medium tracking-wide text-gray-dark transition-colors duration-200 hover:theme-01"
                            >
                              Link 3
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              aria-label="Sign in"
                              title="Sign in"
                              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none"
                            >
                              Sign in
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Sign up
                            </a>
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
      </header>
      <main>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <section class="container px-4 mx-auto">
            <div class="flex flex-col">
              <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead class="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <div class="flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />
                              <button class="flex items-center gap-x-2">
                                <span>Id</span>

                                <svg
                                  class="h-3"
                                  viewBox="0 0 10 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                    fill="currentColor"
                                    stroke="#ffffff"
                                    stroke-width="0.1"
                                  />
                                  <path
                                    d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                    fill="currentColor"
                                    stroke="#ffffff"
                                    stroke-width="0.1"
                                  />
                                  <path
                                    d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                    fill="currentColor"
                                    stroke="#ffffff"
                                    stroke-width="0.3"
                                  />
                                </svg>
                              </button>
                            </div>
                          </th>

                          <th
                            scope="col"
                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Date
                          </th>

                          <th
                            scope="col"
                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Status
                          </th>

                          <th
                            scope="col"
                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Customer
                          </th>

                          <th
                            scope="col"
                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Campaign Name
                          </th>

                          <th scope="col" class="relative py-3.5 px-4">
                            <span class="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        <tr>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />

                              <span>#3066</span>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Jan 6, 2022
                          </td>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-theme-02 dark:bg-gray-800">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="#ffffff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>

                              <h2 class="text-sm font-normal">Approved</h2>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                              />
                              <div>
                                <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                                  Arthur Melo
                                </h2>
                                <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                                  authurmelo@example.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Campaign Name 1
                          </td>
                          <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center gap-x-6">
                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none">
                                Approve
                              </button>

                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-01 focus:shadow-outline focus:outline-none">
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />

                              <span>#3065</span>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Jan 5, 2022
                          </td>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-theme-01 dark:bg-gray-800">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 3L3 9M3 3L9 9"
                                  stroke="#ffffff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>

                              <h2 class="text-sm font-normal">Rejected</h2>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                alt=""
                              />
                              <div>
                                <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                                  Andi Lane
                                </h2>
                                <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                                  andi@example.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Campaign Name 2
                          </td>
                          <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center gap-x-6">
                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none">
                                Approve
                              </button>

                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-01 focus:shadow-outline focus:outline-none">
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />

                              <span>#3064</span>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Jan 5, 2022
                          </td>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-theme-02 dark:bg-gray-800">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="#ffffff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>

                              <h2 class="text-sm font-normal">Approved</h2>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                                alt=""
                              />
                              <div>
                                <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                                  Kate Morrison
                                </h2>
                                <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                                  kate@example.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Campaign Name 3
                          </td>
                          <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center gap-x-6">
                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none">
                                Approve
                              </button>

                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-01 focus:shadow-outline focus:outline-none">
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />

                              <span>#3063</span>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Jan 4, 2022
                          </td>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-theme-02 dark:bg-gray-800">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="#ffffff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>

                              <h2 class="text-sm font-normal">Approved</h2>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80"
                                alt=""
                              />
                              <div>
                                <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                                  Candice Wu
                                </h2>
                                <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                                  candice@example.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Campaign Name 4
                          </td>
                          <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center gap-x-6">
                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none">
                                Approve
                              </button>

                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-01 focus:shadow-outline focus:outline-none">
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />

                              <span>#3062</span>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Jan 4, 2022
                          </td>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-theme-01 dark:bg-gray-800">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
                                  stroke="#ffffff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>

                              <h2 class="text-sm font-normal">Rejected</h2>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"
                                alt=""
                              />
                              <div>
                                <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                                  Orlando Diggs
                                </h2>
                                <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                                  orlando@example.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            Campaign Name 5
                          </td>
                          <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center gap-x-6">
                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none">
                                Approve
                              </button>

                              <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-01 focus:shadow-outline focus:outline-none">
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-theme-02">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                <Image
                  priority
                  src="horizontal-care.svg"
                  height={32}
                  width={32}
                  alt="Horizontal Care"
                />
              </a>
              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-800">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam.
                </p>
                <p className="mt-4 text-sm text-gray-800">
                  Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
              <div className="flex">
                <p className="mr-1 text-gray-800">Phone:</p>
                <a
                  href="tel:850-123-5021"
                  aria-label="Our phone"
                  title="Our phone"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  850-123-5021
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a
                  href="mailto:info@lorem.mail"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  info@lorem.mail
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Address:</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  312 Lovely Street, NY
                </a>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-theme-02"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-theme-02"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-theme-02"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-600">
              © Copyright 2020 Lorem Inc. All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-theme-02"
                >
                  F.A.Q
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-theme-02"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-theme-02"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
