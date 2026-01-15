"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {

    const router = useRouter();
    const handleBtn = () => {
        const password = prompt('Enter your password');
        if(password == '1234'){
            router.push('/dashboard')
        }
    }

    return (
        <div className="py-20 lg:py-32 bg-linear-to-r from-blue-100 to-purple-100 text-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Build Your Skills with Real Practice
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Learn by doing. Create real projects, improve faster, and level up your development journey.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button onClick={handleBtn} className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition cursor-pointer">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
