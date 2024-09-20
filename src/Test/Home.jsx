import clsx from 'clsx';
import { useState } from 'react';

const Home = () => {
    const [activeTab, setActiveTab] = useState('setup');

    const tabs = [
        { id: 'setup', label: 'Setup' },
        { id: 'components', label: 'Components' },
        { id: 'styling', label: 'Styling' },
    ];

    const codeSnippets = {
        setup: `npx create-react-app my-app
cd my-app
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p`,
        components: `import React from 'react';

const Button = ({ children, onClick }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;`,
        styling: `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700;
  }
}`,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-cyan-100 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-900">
                    <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">React + Tailwind Starter</span>
                </h1>
                <div className="mb-6 flex justify-center">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={clsx(
                                'px-4 py-2 font-medium',
                                activeTab === tab.id ? 'rounded-t-lg bg-white text-indigo-600' : 'text-gray-600 hover:text-indigo-600',
                            )}
                            onClick={() => setActiveTab(tab.id)}>
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <h2 className="mb-4 text-2xl font-bold text-gray-800">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                    <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4">
                        <code className="text-sm">{codeSnippets[activeTab]}</code>
                    </pre>
                    <p className="mt-4 text-gray-600">Copy and paste the code above to get started with your React and Tailwind CSS project.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
