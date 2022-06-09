export const Navigation = () => {
    return (
        <div className='h-full w-full bg-green-700 border-r-2 border-black'>
            <ul className='m-2 sm:m-4 text-white'>
                <li className='mb-8 transition duration-100 ease-in-out hover:scale-[1.01] hover:translate-x-2 hover:opacity-[50%]'>
                    <a href='/'>Home</a>
                </li>
                <li className='my-4 transition duration-100 ease-in-out hover:scale-[1.01] hover:translate-x-2 hover:opacity-[50%]'>
                    <a href='/'>Projects</a>
                </li>
                <li className='my-4 transition duration-100 ease-in-out hover:scale-[1.01] hover:translate-x-2 hover:opacity-[50%]'>
                    <a href='/'>Donate</a>
                </li>
                <li className='my-4 transition duration-100 ease-in-out hover:scale-[1.01] hover:translate-x-2 hover:opacity-[50%]'>
                    <a href='/'>Wallet Info</a>
                </li>
            </ul>
        </div>
    )
}