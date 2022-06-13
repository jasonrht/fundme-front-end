import { useState, useEffect } from 'react'
import homeIcon from '../assets/home.png'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export const Navigation = () => {
    const [toggle, setToggle] = useState(false)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!toggle && windowDimensions.width <= 400) {
        return (
            <div className='flex flex-row-reverse w-full h-20 bg-green-700'>
                <button className='mr-4 my-auto' onClick={() => setToggle(!toggle)}>
                    <div className='w-10 h-1 bg-black mt-2'></div>
                    <div className='w-10 h-1 bg-black mt-2'></div>
                    <div className='w-10 h-1 bg-black mt-2'></div>
                </button>
            </div>
        )
    }

    const buttonDisabled = windowDimensions.width <= 400 ? false : true

    return (
        <div className='h-full w-full bg-green-700 border-r-2 border-black'>
            <button className='absolute top-2 right-4' onClick={() => setToggle(!toggle)} disabled={buttonDisabled}>
                <div className='text-black font-extrabold text-4xl '>{windowDimensions.width <= 400 ? '^' : ''}</div>
            </button>
            <ul className='mx-2 sm:m-4 text-black text-center'>
                <li className='mb-14 mt-8'>
                    <a href='/' className='py-2 px-10 rounded-full border-2 border-black bg-gray-200 transition duration-100 ease-in-out hover:opacity-[80%]'>
                        Home
                    </a>
                </li>
                <li className='my-6'>
                    <a href='/' className='py-2 px-10 rounded-full border-2 border-black bg-gray-200 transition duration-100 ease-in-out hover:opacity-[80%]'>Projects</a>
                </li>
                <li className='my-6'>
                    <a href='/donate' className='py-2 px-10 rounded-full border-2 border-black bg-gray-200 transition duration-100 ease-in-out hover:opacity-[80%]'>Donate</a>
                </li>
                <li className='my-6'>
                    <a href='/' className='py-2 px-10 h-fit rounded-full border-2 border-black bg-gray-200 transition duration-100 ease-in-out hover:opacity-[80%]'>Wallet Info</a>
                </li>
            </ul>
        </div>
    )
}