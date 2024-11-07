"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import BookCallModal from "./BookCallModal"
import { useState } from 'react'

export default function Component() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <section className="py-12 bg-white" aria-labelledby="what-is-it-title">
            <div className="mx-28 p-18">
                <h2 id="what-is-it-title" className="text-3xl font-bold text-center mb-12 text-gray-900">What is It?</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2 bg-gray-50 rounded-lg shadow-md p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Purpose</h3>
                        <p className="text-gray-600">
                            We are a creative agency dedicated to transforming ideas into impactful digital experiences. Our team of experts collaborates to deliver innovative solutions that drive growth and engagement for our clients. We believe in pushing boundaries and creating memorable brand interactions that resonate with your target audience.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden aspect-square">
                        <Image
                            src="/placeholder.svg?height=400&width=400"
                            alt="Team collaboration"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden aspect-square order-2 md:order-1">
                        <Image
                            src="/placeholder.svg?height=400&width=400"
                            alt="Creative process"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="md:col-span-2 bg-gray-50 rounded-lg shadow-md p-6 flex flex-col justify-center order-1 md:order-2">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Approach</h3>
                        <p className="text-gray-600">
                            We believe in a human-centered approach to design and development. By combining creativity with data-driven insights, we craft tailored solutions that resonate with your audience and achieve measurable results. Our iterative process ensures that we&apos;re always refining and improving our work to meet and exceed your expectations. From concept to execution, we&apos;re committed to delivering excellence at every step.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <Button onClick={openModal} className="bg-purple-600 text-white hover:bg-purple-700">
                        Book a Call
                    </Button>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} closeModal={closeModal} />
        </section>
    )
}
