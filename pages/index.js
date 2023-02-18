import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <img src="care_banner.jpg" />

          <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
            <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
              <a href="/" aria-label="Item" className="mr-3">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                  <Image
                    priority
                    src="horizontal-care.svg"
                    height={30}
                    width={30}
                    alt="Horizontal Care"
                  />
                </div>
              </a>
              <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl border-t-2">
                <span className="inline-block mb-2">Care</span>
                <div className="h-1 ml-auto duration-300 origin-left transform bg-theme-01 scale-x-30 group-hover:scale-x-100" />
              </h2>
            </div>
            <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
              "Sed ut perspiciatis unde omnis iste natus error sit iste
              voluptatem accusantium doloremque rem aperiam, ipsa eaque quae.
              Sed ut perspiciatis unde omnis iste."
            </p>
          </div>
          <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            <div>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Galaxies Orion
              </p>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Tunguska event
              </p>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Yolo ipsum dolor
              </p>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Curabitur mattis
              </p>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Leverage agile
              </p>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Organically grow
              </p>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-theme-01"
            >
              See more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start shadow-lg w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
              <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Join
                    <br className="hidden md:block" />
                    Horizontal Care{" "}
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae. explicabo.
                  </p>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
              <Image
                priority
                src="/hcare-01.jpeg"
                objectFit="contain"
                fill
                alt="Horizontal Care"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
