import Link from 'next/link'
const Midbar = () => {
    return (
        <div className="bg-white sticky top-0 z-20">
            <div className="justify-center max-w-screen-2xl mx-auto px-3 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 left-0 border-b border-gray-200 dark:border-gray-600 grid grid-cols-3 gap-3 place-content-center text-center">
                    <div className='justify-center'><a href="tel:+8801616101090" className=" bg-[#000000] w-[53%] text-white flex items-center border-2 rounded-xl  px-2.5 py-2">
                        <img
                            src="../../ppcn.png"
                            className="h-2 m-1 sm:h-6"
                            alt="Hometex Bangladesh"
                        />
                        <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white ">
                            CUSTOMER CARE: 01616101090
                        </span>
                    </a></div>

                    <div
                        className="items-center justify-center hidden w-full md:flex"
                        id="navbar-sticky"
                    >
                        <Link href="/" className=" flex items-center ">
                            <img
                                src="../../hometex-logo.png"
                                alt="Hometex Bangladesh"
                            />
                        </Link>
                    </div>


                    <div>
                        <div><button
                            type="button"
                            className="justify-center text-white bg-[#009688] hover:bg-[#86efac] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>

                        </button>
                            <button
                                type="button"
                                className="ml-3 text-white bg-[#009688] hover:bg-[#86efac] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0 dark:bg-[#15803d] dark:hover:bg-[#15803d] dark:focus:ring-green-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>


                            </button>

                        </div>

                    </div>
                </div>
            </div>
    )
}

export default Midbar