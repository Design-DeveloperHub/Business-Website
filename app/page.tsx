"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Clock,
  MessageSquare,
  ThumbsUp,
  Globe,
  Palette,
  Video,
  Camera,
  FileText,
  Code,
  WorkflowIcon as Wordpress,
  User,
  FileEdit,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const features = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect your time and always deliver projects as promised",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "We keep you updated throughout the entire process",
    },
    {
      icon: ThumbsUp,
      title: "Quality Focus",
      description: "We put our heart into every project, no matter how small",
    },
  ]

  const services = [
    { name: "Web Development", icon: Globe },
    { name: "Web Design", icon: Palette },
    { name: "Video Editing", icon: Video },
    { name: "Photo Editing", icon: Camera },
    { name: "MS Office", icon: FileText },
    { name: "Python Scripts", icon: Code },
    { name: "WordPress", icon: Wordpress },
    { name: "Portfolio Sites", icon: User },
    { name: "Resume Creation", icon: FileEdit },
    { name: "Landing Pages", icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Bringing Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Ideas
              </span>{" "}
              to Life
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              {
                "We're a friendly team of beginners passionate about helping you succeed online. From websites to editing, we're here to turn your vision into reality with care and dedication."
              }
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => setContactOpen(true)}
                >
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Welcome to Our Digital Workshop
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {
                  "We're just starting our journey, but our enthusiasm and dedication make up for what we lack in years. We offer a range of digital services designed to help individuals and small businesses establish their online presence."
                }
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                While we may be beginners, we promise to put our heart and soul into every project. We believe in honest
                communication, meeting deadlines, and providing the best support we can offer.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/team-workspace.jpg"
                alt="Team working together on digital projects in a modern workspace"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 text-lg font-medium">Our workspace where ideas come to life</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A variety of digital services to help bring your ideas to life
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center 
                          hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-gray-500"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"
                >
                  <service.icon className="h-6 w-6 text-white" />
                </motion.div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">{service.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-8">
            <Link href="/services">
              <Button variant="link" className="text-blue-600 dark:text-blue-400">
                Learn more about our services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Promise To You</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What you can expect when working with us
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Can Create</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A glimpse of the possibilities</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Web Design",
                desc: "Clean, modern websites",
                image: "/images/web-design-example.jpg",
                alt: "Modern web design on laptop screen",
              },
              {
                title: "Content Creation",
                desc: "Engaging digital content",
                image: "/images/content-creation.jpg",
                alt: "Creative content creation workspace",
              },
              {
                title: "Digital Solutions",
                desc: "Tools that work for you",
                image: "/images/digital-solutions.jpg",
                alt: "Digital solutions and analytics dashboard",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg
                dark:hover:shadow-white hover:shadow-gray-600"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-200">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-blue-100 mb-8">
            {"Let's work together to bring your ideas to life. We're excited to help you succeed!"}
          </motion.p>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setContactOpen(true)}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />

      {/* Contact Form Modal */}
      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  )
}
