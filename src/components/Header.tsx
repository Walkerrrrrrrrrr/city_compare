import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="py-8 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <h1 className="text-center">
          <div className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transform hover:scale-105 transition-transform duration-300">
            在不同城市要过上同样的生活
          </div>
          <div className="text-3xl md:text-4xl font-black text-red-600 dark:text-red-400 mt-3 animate-pulse">
            我<span className="text-yellow-500 dark:text-yellow-400 px-1">TM</span>到底要赚多少钱？!
          </div>
        </h1>
        
        {/* 联系方式 - 同一行 */}
  
        {/* 访问计数 - 下一行 */}
        <div className="flex justify-center items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="visit-counter">
            <Image 
              src="https://hits.sh/city-compare.vercel.app.svg?label=visitors&color=1677ff" 
              alt="访问计数" 
              width={100}
              height={20}
              unoptimized
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 