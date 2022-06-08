import { PriceFeed } from "./PriceFeed";

export const Home = () => {
    return (
        <div className='grid grid-cols-3 m-4 gap-4'>
            <PriceFeed />
        </div>
    )
}