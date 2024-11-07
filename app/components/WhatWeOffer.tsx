"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote, Lightbulb, Target, Trophy, Zap } from "lucide-react"

export default function WhatWeOffer() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in")
                    }
                })
            },
            { threshold: 0.1 }
        )

        const cards = sectionRef.current?.querySelectorAll(".card-animate")
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-gray-100 relative overflow-hidden"
            aria-labelledby="why-it-exists-title"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent opacity-50"></div>
            <div className="mx-28 px-4 relative z-10">
                <h2
                    id="why-it-exists-title"
                    className="text-3xl font-bold text-center mb-12 flex items-center justify-center text-gray-900"
                >
                    <Zap className="w-8 h-8 mr-2 text-purple-600" />
                    Why We Exist
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="card-animate col-span-full bg-white border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                            <CardTitle className="text-gray-900 flex items-center">
                                <Lightbulb className="w-6 h-6 mr-2 text-purple-600" />
                                Our Unique Value
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700">
                            <p className="text-lg">
                                We exist to bridge the gap between creativity and technology. Unlike traditional agencies, we combine cutting-edge design with robust development to deliver holistic digital solutions that drive real business growth.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="card-animate bg-white border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                            <CardTitle className="text-gray-900 flex items-center">
                                <Target className="w-6 h-6 mr-2 text-purple-600" />
                                Our Methodology
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700">
                            <p>
                                Our agile, iterative approach ensures that we stay flexible and responsive to our clients' evolving needs. We believe in continuous improvement and always strive to push the boundaries of what's possible in digital experiences.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="card-animate bg-white border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                            <CardTitle className="text-gray-900 flex items-center">
                                <Trophy className="w-6 h-6 mr-2 text-purple-600" />
                                Client Success
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700">
                            <blockquote className="border-l-4 border-purple-600 pl-4 italic">
                                "Working with this agency transformed our online presence. They didn't just meet our expectations; they exceeded them at every turn."
                            </blockquote>
                            <p className="mt-2 text-right">- Sarah Johnson, CEO of TechInnovate</p>
                        </CardContent>
                    </Card>

                    <Card className="card-animate col-span-full bg-white border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader className="flex flex-row items-center space-x-4">
                            <Quote className="w-10 h-10 text-purple-600" />
                            <CardTitle className="text-gray-900">Founder's Vision</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700">
                            <p className="text-lg">
                                "We founded this agency with a simple yet powerful mission: to create digital experiences that not only look beautiful but also drive tangible results for our clients. Every project we undertake is a step towards realizing that vision."
                            </p>
                            <p className="mt-4 text-right font-semibold">- Alex Rivera, Founder & CEO</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}