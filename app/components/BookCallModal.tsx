"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface BookCallModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

interface FormData {
    name: string;
    number: string;
    city: string;
    businessName: string;
    email: string;
    helpWith: string;
}

export default function BookCallModal({ isOpen, closeModal }: BookCallModalProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        number: '',
        city: '',
        businessName: '',
        email: '',
        helpWith: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        closeModal();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
                <div className="flex justify-end p-4">
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Book a Call</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>GrowDigital</p>
                            <p>123 Digital Ave, Tech City, 12345</p>
                            <p>Phone: +1 (555) 123-4567</p>
                            <p>Email: info@growdigital.com</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Number</label>
                            <input
                                type="tel"
                                id="number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                            <input
                                type="text"
                                id="businessName"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="helpWith" className="block text-sm font-medium text-gray-700 mb-1">What can we help you with?</label>
                            <textarea
                                id="helpWith"
                                name="helpWith"
                                value={formData.helpWith}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-purple-500 outline-none py-2 resize-none"
                                rows={3}
                            ></textarea>
                        </div>
                        <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700">
                            Book Your Call
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
