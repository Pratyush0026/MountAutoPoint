"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  ChevronRight,
  MapPin,
  Clock,
  Shield,
  Star,
  Facebook,
  Youtube,
  Menu,
  X,
  Bike,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  Mountain,
  Map,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const featuresRef = useRef(null)
  const isFeaturesInView = useInView(featuresRef, { once: true })

  const testimonialsRef = useRef(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true })

  const pricingRef = useRef(null)
  const isPricingInView = useInView(pricingRef, { once: true })

  const contactRef = useRef(null)
  const isContactInView = useInView(contactRef, { once: true })

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // In a real application, you would send the form data to a server here
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 bg-gradient-to-br from-sky-500 to-yellow-400 rounded-lg flex items-center justify-center">
              <Bike className="text-white h-6 w-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-yellow-500 bg-clip-text text-transparent">
              Mount Auto Point
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-sky-600 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-sky-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-sky-600 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-sky-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="tel:+918077686758"
              className="px-4 py-2 text-sky-600 font-medium hover:text-sky-700 transition-colors flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span>080776 86758</span>
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2 bg-gradient-to-r from-sky-500 to-yellow-400 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#"
                className="text-gray-700 py-2 hover:text-sky-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#features"
                className="text-gray-700 py-2 hover:text-sky-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 py-2 hover:text-sky-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-gray-700 py-2 hover:text-sky-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 py-2 hover:text-sky-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link
                  href="tel:+918077686758"
                  className="py-2 text-sky-600 font-medium hover:text-sky-700 transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>080776 86758</span>
                </Link>
                <Link
                  href="#contact"
                  className="py-2 px-4 bg-gradient-to-r from-sky-500 to-yellow-400 text-white font-medium rounded-full text-center hover:opacity-90 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" ref={heroRef}>
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-sky-100 to-transparent"></div>
          <div className="h-full w-full bg-[url('/placeholder.svg?height=1080&width=1920&text=Mountains')] bg-cover bg-center"></div>
        </motion.div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-block py-1 px-3 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
                  #1 Bike & Scooter Rental in Kotdwar
                </span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Explore Uttarakhand on{" "}
                <span className="bg-gradient-to-r from-sky-600 to-yellow-500 bg-clip-text text-transparent">
                  two wheels
                </span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 md:pr-10">
                Discover the beauty of Kotdwar, Lansdowne, Pauri and beyond with our premium bike and scooter rental
                service. Affordable, convenient, and reliable.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href="#pricing"
                  className="px-8 py-3 bg-gradient-to-r from-sky-500 to-yellow-400 text-white font-medium rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-sky-200"
                >
                  View Rental Options
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#features"
                  className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full border border-gray-200 hover:border-sky-300 transition-colors flex items-center justify-center gap-2"
                >
                  Learn More
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=User${i}`}
                        alt={`User ${i}`}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">4.9/5</span> from 200+ happy travelers
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-yellow-100 rounded-3xl transform rotate-3 scale-95 opacity-50 blur-xl"></div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8c6306a7-bb24-467e-a0e6-3adf6c05cff9.jpg-a3aXi81b0XP8vsu2ACveeiOvgiBJDm.jpeg"
                  alt="Mount Auto Point Logo"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-xl"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center">
                      <Mountain className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Perfect for</p>
                      <p className="font-medium">Mountain Adventures</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Located in</p>
                      <p className="font-medium">Kotdwar, Uttarakhand</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Why choose{" "}
              <span className="bg-gradient-to-r from-sky-600 to-yellow-500 bg-clip-text text-transparent">
                Mount Auto Point
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              We offer the best rental experience with well-maintained vehicles, flexible plans, and exceptional
              service.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Bike className="h-8 w-8 text-white" />,
                title: "Premium Vehicles",
                description:
                  "Our fleet includes top-quality bikes and scooters that are regularly maintained for your safety and comfort.",
                gradient: "from-sky-500 to-sky-600",
              },
              {
                icon: <Map className="h-8 w-8 text-white" />,
                title: "Explore Uttarakhand",
                description:
                  "Perfect for exploring Kotdwar, Lansdowne, Pauri and other beautiful destinations in Uttarakhand.",
                gradient: "from-yellow-400 to-yellow-500",
              },
              {
                icon: <Clock className="h-8 w-8 text-white" />,
                title: "Flexible Rental Plans",
                description: "Hourly, daily, or weekly rental options to suit your travel needs and budget.",
                gradient: "from-sky-400 to-yellow-400",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 group"
              >
                <div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-20"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-sky-50 to-yellow-50 rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Discover the beauty of Uttarakhand</h3>
                  <p className="text-gray-600 mb-6">
                    Rent a bike or scooter from Mount Auto Point and explore the breathtaking landscapes of Uttarakhand
                    at your own pace. From the serene hills of Lansdowne to the spiritual vibes of Pauri, our vehicles
                    are your perfect companions.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Easy access to Lansdowne (40 km from Kotdwar)",
                      "Visit Pauri and enjoy panoramic Himalayan views",
                      "Explore local attractions around Kotdwar",
                      "Perfect for both short trips and extended journeys",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-sky-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="https://youtube.com/shorts/jFIRjcLufC8?si=xg0KcDUDXpFHPp9k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-sky-500 to-yellow-400 text-white font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                    >
                      <Youtube className="h-5 w-5" />
                      Watch Video Tour
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-yellow-100 rounded-3xl transform -rotate-3 scale-95 opacity-50 blur-md"></div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/jFIRjcLufC8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video rounded-2xl shadow-lg relative z-10"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Our premium vehicles
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Choose from our wide range of high-quality bikes and scooters for your adventure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Royal Enfield Classic 350",
                image: "/placeholder.svg?height=300&width=400&text=Royal+Enfield",
                price: "₹1200",
                type: "Cruiser Bike",
                features: ["Perfect for mountain roads", "Comfortable for long rides"],
              },
              {
                name: "Honda Activa",
                image: "/placeholder.svg?height=300&width=400&text=Honda+Activa",
                price: "₹600",
                type: "Scooter",
                features: ["Fuel efficient", "Easy to ride"],
              },
              {
                name: "Bajaj Pulsar",
                image: "/placeholder.svg?height=300&width=400&text=Bajaj+Pulsar",
                price: "₹800",
                type: "Sports Bike",
                features: ["Powerful engine", "Sporty handling"],
              },
              {
                name: "TVS Jupiter",
                image: "/placeholder.svg?height=300&width=400&text=TVS+Jupiter",
                price: "₹550",
                type: "Scooter",
                features: ["Comfortable seating", "Good mileage"],
              },
              {
                name: "Hero Splendor",
                image: "/placeholder.svg?height=300&width=400&text=Hero+Splendor",
                price: "₹500",
                type: "Commuter Bike",
                features: ["Highly reliable", "Excellent fuel efficiency"],
              },
              {
                name: "Yamaha FZ",
                image: "/placeholder.svg?height=300&width=400&text=Yamaha+FZ",
                price: "₹900",
                type: "Sports Bike",
                features: ["Stylish design", "Smooth performance"],
              },
            ].map((vehicle, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full py-1 px-3 shadow-md">
                    <span className="font-medium text-sky-600">{vehicle.price}/day</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-sky-100 text-sky-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {vehicle.type}
                    </span>
                  </div>
                  <ul className="mb-4 space-y-2">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-sky-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className="w-full py-3 bg-gradient-to-r from-sky-500 to-yellow-400 text-white font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Book Now
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-sky-50" ref={testimonialsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              What our customers say
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Don't just take our word for it. Here's what travelers have to say about their Mount Auto Point
              experience.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Rahul Sharma",
                image: "/placeholder.svg?height=80&width=80&text=RS",
                location: "Delhi",
                quote:
                  "Mount Auto Point made my trip to Lansdowne amazing! The Royal Enfield was in perfect condition, and the pickup process was quick and easy.",
              },
              {
                name: "Priya Patel",
                image: "/placeholder.svg?height=80&width=80&text=PP",
                location: "Mumbai",
                quote:
                  "Rented a scooter for exploring Kotdwar and nearby areas. The service was excellent, and the staff was very helpful with route suggestions.",
              },
              {
                name: "Amit Singh",
                image: "/placeholder.svg?height=80&width=80&text=AS",
                location: "Dehradun",
                quote:
                  "As a frequent visitor to Uttarakhand, I always rent from Mount Auto Point. Their vehicles are well-maintained and prices are reasonable.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white" ref={pricingRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isPricingInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Choose the plan that works best for your adventure. No hidden fees or complicated pricing structures.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isPricingInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Daily",
                description: "Perfect for day trips around Kotdwar",
                price: "₹500-1200",
                period: "per day",
                features: [
                  "All types of bikes and scooters",
                  "Helmet included",
                  "24/7 roadside assistance",
                  "Fuel not included",
                  "Valid ID required",
                ],
                popular: false,
                buttonText: "Book for a day",
              },
              {
                name: "Weekend Package",
                description: "Ideal for weekend getaways to Lansdowne",
                price: "₹1200-3000",
                period: "for 2 days",
                features: [
                  "All types of bikes and scooters",
                  "Helmet included",
                  "24/7 roadside assistance",
                  "10% discount on regular daily rates",
                  "Free basic maintenance",
                  "Valid ID required",
                ],
                popular: true,
                buttonText: "Book weekend package",
              },
              {
                name: "Weekly",
                description: "Best value for extended exploration",
                price: "₹3000-7000",
                period: "per week",
                features: [
                  "All types of bikes and scooters",
                  "Helmet included",
                  "24/7 roadside assistance",
                  "15% discount on regular daily rates",
                  "Free maintenance",
                  "Route map included",
                  "Valid ID required",
                ],
                popular: false,
                buttonText: "Book for a week",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-sky-500 to-yellow-400 text-white shadow-xl shadow-sky-200"
                    : "bg-white border border-gray-100 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="bg-white text-sky-600 text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : ""}`}>{plan.name}</h3>
                <p className={`mb-6 ${plan.popular ? "text-white/80" : "text-gray-600"}`}>{plan.description}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : ""}`}>{plan.price}</span>
                  <span className={`${plan.popular ? "text-white/80" : "text-gray-600"}`}> {plan.period}</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Shield className={`h-5 w-5 ${plan.popular ? "text-white" : "text-sky-500"}`} />
                      <span className={`${plan.popular ? "text-white/80" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`w-full py-3 font-medium rounded-xl flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-white text-sky-600 hover:bg-gray-100 transition-colors"
                      : "bg-gradient-to-r from-sky-500 to-yellow-400 text-white hover:opacity-90 transition-opacity"
                  }`}
                >
                  {plan.buttonText}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-yellow-400 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start your adventure?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-white/80 mb-8">
              Contact us now to book your bike or scooter and explore the beautiful landscapes of Uttarakhand.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+918077686758"
                className="px-8 py-3 bg-white text-sky-600 font-medium rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </Link>
              <Link
                href="https://wa.me/c/918077686758"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp Catalogue
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white" ref={contactRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Get in touch
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Have questions or ready to book? Reach out to us and we'll get back to you as soon as possible.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-sky-50 to-yellow-50 rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Address</h4>
                      <p className="text-gray-600">
                        Najibabad Road, Near Janki Nagar,
                        <br />
                        Kotdwara, Uttarakhand
                      </p>
                      <Link
                        href="https://g.co/kgs/n6SkT62"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 hover:underline inline-flex items-center gap-1 mt-2"
                      >
                        View on Google Maps
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Phone</h4>
                      <Link href="tel:+918077686758" className="text-gray-600 hover:text-sky-600 transition-colors">
                        080776 86758
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">WhatsApp</h4>
                      <Link
                        href="https://wa.me/c/918077686758"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-sky-600 transition-colors"
                      >
                        WhatsApp Catalogue
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Youtube className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">YouTube</h4>
                      <Link
                        href="https://youtube.com/shorts/jFIRjcLufC8?si=xg0KcDUDXpFHPp9k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-sky-600 transition-colors"
                      >
                        Watch our video tour
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13782.036147237144!2d78.51693915!3d29.74537865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb0ffff0c0001%3A0x9b9fc06e7e7e4a6!2sKotdwara%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1653047219182!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl mt-4"
                  ></iframe>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h4>
                    <p className="text-green-700">
                      Thank you for your message. Mount bike scooty rental service will respond as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input id="phone" placeholder="Your phone number" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your rental needs..."
                        rows={4}
                        className="resize-none"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-sky-500 to-yellow-400 hover:opacity-90 transition-opacity"
                    >
                      Send Message
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="relative h-10 w-10 bg-gradient-to-br from-sky-500 to-yellow-400 rounded-lg flex items-center justify-center">
                  <Bike className="text-white h-6 w-6" />
                </div>
                <span className="text-xl font-bold text-white">Mount Auto Point</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Explore Uttarakhand on two wheels with our premium bike and scooter rental service in Kotdwar.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://youtube.com/shorts/jFIRjcLufC8?si=xg0KcDUDXpFHPp9k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="https://wa.me/c/918077686758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Explore</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Kotdwar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Lansdowne
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Pauri
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Uttarakhand Tourism
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky-400 mt-0.5" />
                  <span className="text-gray-400">
                    Najibabad Road, Near Janki Nagar,
                    <br />
                    Kotdwara, Uttarakhand
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sky-400" />
                  <Link href="tel:+918077686758" className="text-gray-400 hover:text-white transition-colors">
                    080776 86758
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-sky-400" />
                  <Link
                    href="https://wa.me/c/918077686758"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    WhatsApp Catalogue
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-center">
              © {new Date().getFullYear()} Mount Auto Point. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
