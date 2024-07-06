import React from 'react'
const Body = () => {
    return (
        <div className='space-y-8 lg:flex'>
            <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
                <img src="./assets/Blue-Shape.svg" alt="first" className='-rotate-45 h-64 md:h-72 lg:h-[400px]' />
                <img src="./assets/Pink-Shape.svg" alt="second" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]' />
                <img src="./assets/Purple-Shape.svg" alt="third" className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]' />
                <img src="./assets/Hero-Model.png" alt="hero" className='absolute h-64 md:h-72 lg:h-[400px]' />
            </div>
            <div className='lg:flex-1 lg:order-1'>
                <h1 className='text-5xl font-bold font-playfair leading-tight lg:text-7xl'>Host your website in less than 5 minutes</h1><br></br>
                <p className='text-gray-500 font-lato lg:text-l'>With Hosterr, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online</p>
                <form action="" className='flex flex-col gap-4 md:flex-row'>
                    <input className='rounded-md px-4 py-3 placeholder:text-gray-500' type="email" placeholder='Enter e-mail address' />
                    <button className='rounded-md bg-blue-400 hover:bg-blue-600 text-white px-7 py-3 font-semibold'>Join Waitlist</button>
                </form>
                <div className='flex gap-2'>
                    <img src="./assets/Checkmark.svg" alt="check" />
                    <p className='font-lato text-gray-500'>No spam, ever . Unsubscribe anytime</p>
                </div>
            </div>
        </div>
    )
}
export default Body