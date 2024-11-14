"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Megaphone, TrendingUp, Users, Smile, Smartphone, Globe, Mic, MessageSquare, Share } from 'lucide-react'
import BookCallModal from "./BookCallModal"

export default function Component() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const initialServices = [
        {
            title: "Branding / Personal Branding",
            description: "Transform your identity into a powerful brand! We help you stand out in a crowded market by crafting a unique brand persona that captures your essence and resonates with your audience.",
            icon: Palette,
            link: "/services/branding"
        },
        {
            title: "Press Release (PR)",
            description: "Get the spotlight your brand deserves! Our PR experts connect you with top media outlets to boost your public image and credibility.",
            icon: Megaphone,
            link: "/services/press-release"
        },
        {
            title: "Performance Marketing",
            description: "Results you can measure, growth you can see! Drive conversions like never before with data-driven marketing strategies.",
            icon: TrendingUp,
            link: "/services/performance-marketing"
        },
        {
            title: "Influencer Marketing",
            description: "Leverage influence, build trust! Partner with influential voices that align with your brand.",
            icon: Users,
            link: "/services/influencer-marketing"
        },
        {
            title: "MEME Marketing",
            description: "Go viral with humor and relatability! Our meme marketing is designed to make your brand culturally relevant, relatable, and irresistibly shareable.",
            icon: Smile,
            link: "/services/meme-marketing"
        },
        {
            title: "WhatsApp Marketing",
            description: "Direct engagement, personal touch! Reach your customers instantly and effectively through WhatsApp.",
            icon: Smartphone,
            link: "/services/whatsapp-marketing"
        }
    ]

    const additionalServices = [
        {
            title: "Web Development",
            description: "Your website is your brand's digital home! We build high-performance websites that reflect your brand's personality.",
            icon: Globe,
            link: "/services/web-development"
        },
        {
            title: "PR Podcasts",
            description: "Your voice, their ears, your brand's impact! Stand out as an industry leader with engaging PR podcasts.",
            icon: Mic,
            link: "/services/pr-podcasts"
        },
        {
            title: "Social Media Marketing",
            description: "Build a loyal community, boost brand awareness! Let us handle your social media presence and foster a community that connects with your brand.",
            icon: MessageSquare,
            link: "/services/social-media-marketing"
        },
        {
            title: "Content Distribution Management (Viral CDM)",
            description: "Amplify your message, make an impact! We help spread your message far and wide for maximum visibility and engagement.",
            icon: Share,
            link: "/services/content-distribution"
        }
    ]

    const [showMore, setShowMore] = useState(false)

    return (
        <section className="py-12 bg-white" aria-labelledby="services-title">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 id="services-title" className="text-3xl font-bold text-center mb-8 text-gray-900">Our Services</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[...initialServices, ...(showMore ? additionalServices : [])].map((service, index) => (
                        <Card key={index} className="flex flex-col bg-gray-50 border-gray-200">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-purple-600" />
                                </div>
                                <CardTitle className="text-gray-900">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">{service.description}</p>
                            </CardContent>
                            <CardFooter className="mt-auto pt-4">
                                <Button onClick={openModal} className="w-full bg-purple-600 text-white hover:bg-purple-700">
                                    Book a Call
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button
                        onClick={() => setShowMore(!showMore)}
                        size="lg"
                        className="bg-purple-600 text-white hover:bg-purple-700"
                    >
                        {showMore ? "Hide" : "View All Services"}
                    </Button>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} closeModal={closeModal} />
        </section>
    )
}