"use client"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import BookCallModal from "./BookCallModal"

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-purple-400">GrowDigital</h2>
                        <p className="text-gray-300">Empowering businesses to thrive in the digital landscape.</p>
                        <Button onClick={openModal} className="bg-purple-600 text-white hover:bg-purple-700">
                            Book a Call
                        </Button>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Case Studies</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-300">
                                <Phone size={18} className="text-purple-400" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <Mail size={18} className="text-purple-400" />
                                <span>info@growdigital.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <MapPin size={18} className="text-purple-400" />
                                <span>123 Digital Ave, Tech City, 12345</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-400">Stay Connected</h3>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors"><Facebook size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors"><Twitter size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors"><Instagram size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors"><Linkedin size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                    <p>&copy; 2023 GrowDigital. All rights reserved.</p>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} closeModal={closeModal} />
        </footer>
    )
}