"use client";

import React, { useState } from "react";
import BookCallModal from "./BookCallModal";
import Image from "next/image";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="relative min-h-screen">
            <div className="relative min-h-screen flex items-center justify-center px-4 bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-24 grid gap-8 md:gap-16 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                            Digital Growth Agency
                        </h1>
                        <p className="mb-6 text-base sm:text-lg text-gray-700">
                            Transforming Businesses in the Digital Age. We drive digital growth with strategic solutions to take your brand to new heights.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button onClick={openModal} className="rounded-full bg-purple-600 px-6 py-3 text-white transition-transform hover:scale-105 hover:bg-purple-700">
                                Book a Call
                            </button>
                            <button
                                onClick={openModal}
                                className="rounded-full border-2 border-purple-600 px-6 py-3 text-purple-600 transition-transform hover:scale-105 hover:bg-purple-600 hover:text-white"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <Image
                            src="https://www.digitalsilk.com/wp-content/uploads/2024/06/solutions.png.webp"
                            alt="Hero Image"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
}