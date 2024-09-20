import clsx from 'clsx';

const Home = () => {
    const isColorText = true;

    return (
        <div className="container mx-auto flex min-h-screen flex-col items-center bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 text-base text-gray-700">
            <h1 className="m-5 p-3 py-3 text-3xl font-bold first-letter:text-red-500">Test Tailwind</h1>
            <div className={clsx('w-full', { 'text-orange-500': isColorText })}>Hello</div>
        </div>
    );
};
export default Home;
