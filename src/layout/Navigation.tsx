import homeIcon from '../assets/home.png'

export const Navigation = () => {
    return (
        <div className='h-full w-full bg-green-700 border-r-2 border-black'>
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
                    <a href='/' className='py-2 px-10 rounded-full border-2 border-black bg-gray-200 transition duration-100 ease-in-out hover:opacity-[80%]'>Wallet Info</a>
                </li>
            </ul>
        </div>
    )
}