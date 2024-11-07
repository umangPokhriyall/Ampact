"use client";

import React, { useState } from "react";
import { TrendingUp, Users, MessageCircle, BarChart2 } from "lucide-react";
import BookCallModal from "./BookCallModal";
import Image from "next/image";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="relative min-h-screen">
            <div className="relative min-h-screen flex items-center justify-center px-4 bg-gray-100">
                <div className="mx-auto max-w-7xl px-10 py-24 grid gap-16 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-6 text-6xl font-bold text-gray-900">
                            Digital Growth Agency
                        </h1>
                        <p className="mb-6 text-lg text-gray-700">
                            Transforming Businesses in the Digital Age. We drive digital growth with strategic solutions to take your brand to new heights.
                        </p>
                        <div className="space-x-4">
                            <button onClick={openModal} className="rounded-full bg-purple-600 px-8 py-3 text-white transition-transform hover:scale-105 hover:bg-purple-700">
                                Book a Call
                            </button>
                            <button
                                onClick={openModal}
                                className="rounded-full border-2 border-purple-600 px-8 py-3 text-purple-600 transition-transform hover:scale-105 hover:bg-purple-600 hover:text-white"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="https://www.digitalsilk.com/wp-content/uploads/2024/06/solutions.png.webp"
                            alt="Hero Image"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
};