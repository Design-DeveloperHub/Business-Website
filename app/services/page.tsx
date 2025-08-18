"use client"

import { motion } from "framer-motion"
import { Code, Globe, FileEdit, Video, FileText, User, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
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

  const services = [
    {
      icon: Code,
      title: "Python Development",
      description: "Custom Python scripts and applications to automate your tasks and solve specific problems.",
      features: ["Custom Scripts", "Data Processing", "Automation Tools", "Simple Applications"],
      provider: "MHamza Zai",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies to showcase your business online.",
      features: ["Responsive Design", "Modern Frameworks", "Fast Loading", "Mobile Friendly"],
      provider: "MHamza Zai",
    },
    {
      icon: Zap,
      title: "UI/UX Design",
      description: "Beautiful and user-friendly designs that make your website or app easy and enjoyable to use.",
      features: ["User Interface Design", "User Experience", "Wireframing", "Prototyping"],
      provider: "MHamza Zai",
    },
    {
      icon: Globe,
      title: "WordPress Websites",
      description: "Professional WordPress websites that are easy to manage and update yourself.",
      features: ["Custom Themes", "Plugin Integration", "Easy Management", "SEO Friendly"],
      provider: "MSaim Kamran",
    },
    {
      icon: Zap,
      title: "Landing Pages",
      description: "High-converting landing pages designed to turn visitors into customers or leads.",
      features: ["Conversion Focused", "Fast Loading", "Mobile Optimized", "Call-to-Action"],
      provider: "MSaim Kamran",
    },
    {
      icon: User,
      title: "Portfolio Websites",
      description: "Showcase your work and skills with a professional portfolio website that stands out.",
      features: ["Professional Design", "Project Showcase", "Contact Forms", "Responsive Layout"],
      provider: "MSaim Kamran",
    },
    {
      icon: FileEdit,
      title: "Resume Creation",
      description: "Professional resumes that help you to stand out in the market and land your dream job.",
      features: ["Professional Templates", "ATS Friendly", "Multiple Formats", "Cover Letters"],
      provider: "MHunain",
    },
    {
      icon: FileText,
      title: "MS Office Services",
      description: "Help with Word documents, Excel spreadsheets, PowerPoint presentations, and more.",
      features: ["Document Formatting", "Excel Analysis", "Presentation Design", "Data Entry"],
      provider: "MHunain",
    },
    {
      icon: Video,
      title: "Media Editing",
      description: "Professional video and photo editing for your content, whether it's for social media or business.",
      features: ["Video Editing", "Photo Retouching", "Color Correction", "Social Media Ready"],
      provider: "MHunain",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a comprehensive strategy and project roadmap.",
    },
    {
      step: "03",
      title: "Design",
      description: "Our designers create beautiful, user-centered designs.",
    },
    {
      step: "04",
      title: "Development",
      description: "We bring the designs to life with clean, efficient code.",
    },
    {
      step: "05",
      title: "Launch",
      description: "We deploy your project and ensure everything works perfectly.",
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance and support to keep your project running smoothly.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
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
              className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We offer a range of digital services to help you succeed online. From websites to editing, we're here to
              bring your ideas to life with care and dedication.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">by {service.provider}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">What's included:</p>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="https://www.fiverr.com/sellers/designdevhub/edit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        target="_blank"
                        rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our simple process that ensures successful project delivery every time
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                      viewport={{ once: true }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg mb-4"
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
