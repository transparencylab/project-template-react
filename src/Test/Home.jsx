import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import clsx from 'clsx';
import { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-purple-500 to-pink-500">
            <h1 className="mb-12 mt-20 text-4xl font-bold uppercase text-white">Project Template - React</h1>
            <div className="shadow-blackA4 my-8 w-96 overflow-hidden rounded-md bg-white shadow-[0_2px_10px]">
                <AspectRatio.Root ratio={16 / 9}>
                    <button onClick={() => setCount(count + 1)}>
                        <img src="https://picsum.photos/400/300" alt="Photo placeholder" />
                    </button>
                </AspectRatio.Root>
            </div>
            <span className={clsx('text-white', count >= 10 ? 'text-xl' : 'text-md')}>Count: {count}</span>
        </div>
    );
};

export default Home;
