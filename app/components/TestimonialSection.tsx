"use client"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import BookCallModal from "./BookCallModal"

export default function TestimonialSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const testimonials = [
    {
      name: "Alex Johnson",
      company: "TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      statement: "The product exceeded our expectations. It's intuitive, powerful, and has significantly improved our workflow.",
    },
    {
      name: "Sarah Lee",
      company: "InnovateCo",
      image: "/placeholder.svg?height=100&width=100",
      statement: "Outstanding support and a robust feature set. This solution has been a game-changer for our team's productivity.",
    },
    {
      name: "Michael Chen",
      company: "FutureTech",
      image: "/placeholder.svg?height=100&width=100",
      statement: "We've seen a 40% increase in efficiency since implementing this tool. It's been an excellent investment for our company.",
    },
  ]

  return (
    <div className="relative bg-gray-100 min-h-screen">
      <div className="py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="flex justify-center space-x-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="flex-none w-[300px]">
                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md space-y-3">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={testimonial.image} alt={`${testimonial.name}'s profile picture`} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-purple-600 mb-2">{testimonial.company}</p>
                  <blockquote className="text-gray-600 text-sm">
                    "{testimonial.statement}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button onClick={openModal} className="bg-purple-600 text-white hover:bg-purple-700">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
      <BookCallModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}