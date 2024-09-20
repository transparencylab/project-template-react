import clsx from 'clsx';
import { useState } from 'react';

const TestTailwind = () => {
    const [isColorText, setIsColorText] = useState(true);

    return (
        <div className="container mx-auto flex min-h-screen flex-col items-center bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 text-base text-gray-700">
            <h1 className="py-3 text-2xl">Test Tailwind</h1>
            <div className={clsx('w-full', { 'text-orange-500': isColorText })}>Hello</div>
        </div>
    );
};
export default TestTailwind;
