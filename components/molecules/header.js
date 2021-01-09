import { useState } from "react"
import Link from "next/link"

export default function Header() {
    const [showMenu, setShowMenu] = useState('showMenu', false)
    return (
    <nav class="relative z-50 h-24" x-data="{ showMenu: false }">
    <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 sm:px-4 md:px-2">
        <a href="#_" class="w-1/4 py-4 pr-4 md:py-0">
            <span class="text-xl font-black leading-none text-gray-900 select-none logo">Daily<span class="text-indigo-600">.</span></span>
        </a>
        <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:w-3/4 md:absolute lg:text-base md:h-auto md:bg-transparent md:p-0 md:relative md:flex" class="{'flex fixed': showMenu, 'hidden': !showMenu }">
            <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                <a href="#_" class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 select-none md:hidden">Daily<span class="text-indigo-600">.</span></a>
                <div class="flex flex-col items-start justify-center w-full text-center md:w-2/3 md:mt-0 md:flex-row md:items-center">
                    <Link href="/" exact>
                        <a className="inline-block w-full px-6 py-2 mx-0 font-medium text-left hover:text-indigo-600 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                    </Link>
                    <a href="#" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Features</a>
                    <a href="#" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Pricing</a>
                    <Link href="/blog">
                        <a  class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Blog</a>
                    </Link>
                    <a href="#" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Contact</a>
                </div>
                <div class="flex flex-col items-start justify-end w-full pt-4 ml-10 md:items-center md:w-1/3 md:flex-row md:py-0">
                    <a href="https://daily.icservice-soft.com/login" class="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 md:mr-4 lg:mr-5 md:w-auto">Sign In</a>
                    <span class="inline-flex w-full shadow-sm md:rounded-full md:w-auto">
                        <a href="https://daily.icservice-soft.com/register">
                            <button class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-transparent bg-indigo-600 border border-transparent md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">Sign Up</button>
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <div onClick={() => {setShowMenu(!showMenu)}} class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 rounded-full cursor-pointer md:hidden hover:bg-gray-100">
            {!showMenu && <svg class="w-6 h-6 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
            }
            {showMenu && <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
            }
        </div>
    </div>
</nav>
    )   
}