
export default function Hero() {
    return (
    <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
        <h1 class="text-5xl font-extrabold tracking-tight text-left text-gray-900 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span class="inline md:block">Start Planning</span> <span class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">your dailies</span></h1>
        <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Simplifying the creation of tasks, promodoros & time tracking and much more!</div>
        <div class="flex flex-col items-center mt-12 text-center">
            <span class="relative inline-flex w-full rounded-full shadow-sm md:w-auto">
                <button type="button" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                    Purchase Now
                </button>
                <span class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">only $3/mo</span>
            </span>
            <a href="#" class="mt-3 text-sm text-teal-500">Learn More</a>
        </div>
    </div> 
    )   
}