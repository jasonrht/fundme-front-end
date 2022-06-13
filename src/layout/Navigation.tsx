export const Navigation = () => {
    return (
        <div className='h-full w-full bg-green-700 border-r-2 border-black'>
            <ul className='mx-2 sm:m-4 text-black text-center'>
                <li className='mb-8 p-2 rounded-full border-2 border-black bg-gray-200 transition duration-100 ease-in-out hover:scale-[1.01] hover:translate-x-2 hover:opacity-[80%]'>
                    <a href='/'>Home</a>
                </li>
                <li className='my-4 p-2 rounded-full border-2 border-black bg-gray-200 transition duration-100 ease-in-out hover:scale-[1.01] hover:translate-x-2 hover:opacity-[80%]'>
                    <a href='/'>Projects</a>
                </li>
                <li className='my-4 p-2 rounded-full border-2 border-black bg-gray-200 transition duration-100 ease-in-out hover:scale-[1.01] hover:translate-x-2 hover:opacity-[80%]'>
                    <a href='/donate'>Donate</a>
                </li>
                <li className='my-4 p-2 rounded-full border-2 border-black bg-gray-200 transition duration-100 ease-in-out hover:scale-[1.01] hover:translate-x-2 hover:opacity-[80%]'>
                    <a href='/'>Wallet Info</a>
                </li>
            </ul>
        </div>
    )
}