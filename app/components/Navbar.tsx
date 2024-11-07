// Import necessary types from React
import { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, ChevronRight, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import BookCallModal from "./BookCallModal"

// Define types for props
interface NavLinkProps {
    href: string
    children: ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link
            href={href}
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-purple-100 transition-colors duration-300"
        >
            {children}
        </Link>
    )
}

interface MobileNavLinkProps {
    href: string
    children: ReactNode
}

function MobileNavLink({ href, children }: MobileNavLinkProps) {
    return (
        <Link href={href} className="flex items-center text-gray-800 hover:text-purple-600 transition-colors duration-300">
            <ChevronRight className="h-4 w-4 mr-2" />
            <span>{children}</span>
        </Link>
    )
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <BarChart className="h-8 w-8 text-purple-600" />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink href="/services">Services</NavLink>
                            <NavLink href="/case-studies">Case Studies</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Button onClick={openModal} className="bg-purple-600 hover:bg-purple-700 text-white">Book a Call</Button>
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className={isScrolled ? 'text-gray-900' : 'text-white'}>
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-white">
                                <div className="flex flex-col space-y-4 mt-4">
                                    <MobileNavLink href="/services">Services</MobileNavLink>
                                    <MobileNavLink href="/case-studies">Case Studies</MobileNavLink>
                                    <MobileNavLink href="/about">About</MobileNavLink>
                                    <MobileNavLink href="/contact">Contact</MobileNavLink>
                                    <Button onClick={openModal} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">Book a Call</Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} closeModal={closeModal} />
        </nav>
    )
}
