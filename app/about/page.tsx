"use client"

import { motion } from "framer-motion"
import { Users, Target, Lightbulb, Heart, Code, Globe, FileEdit } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
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

  const values = [
    {
      icon: Target,
      title: "Learning & Growing",
      description: "We're always learning new things and improving our skills to serve you better.",
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "We think outside the box to find simple solutions for your digital needs.",
    },
    {
      icon: Heart,
      title: "Genuine Care",
      description: "We truly care about your success and put our heart into every project.",
    },
    {
      icon: Users,
      title: "Friendly Support",
      description: "We're here to help and guide you through every step of your project.",
    },
  ]

  const team = [
    {
      name: "MHamza Zai",
      role: "Python Developer & Designer",
      description:
        "Specializes in Python programming, web development, and creating beautiful designs that work perfectly for your business needs.",
      skills: ["Python Development", "Web Development", "UI/UX Design"],
      icon: Code,
      fieldImage: "/images/python-development.png", // Python development image
    },
    {
      name: "MSaim Kamran",
      role: "WordPress Specialist",
      description:
        "Expert in creating WordPress websites, stunning landing pages, and professional portfolios that help you stand out online.",
      skills: ["WordPress Development", "Landing Pages", "Portfolio Websites"],
      icon: Globe,
      fieldImage: "/images/wordpress-development.png", // WordPress image
    },
    {
      name: "MHunain",
      role: "Content & Media Specialist",
      description:
        "Handles resume creation, MS Office work, and all your video and photo editing needs with professional quality and attention to detail.",
      skills: ["Resume Creation", "MS Office", "Video & Photo Editing"],
      icon: FileEdit,
      fieldImage: "/images/media-editing.png", // Media editing image
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
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Our Team
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We're a small team of passionate beginners who love helping people bring their digital ideas to life.
              While we're just starting out, our enthusiasm and dedication make up for our experience!
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We started this journey as friends who wanted to help others succeed online. Even though we're
                beginners, we believe that everyone deserves access to quality digital services without breaking the
                bank.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our mission is simple: provide honest, affordable, and friendly digital services while we learn and grow
                together. We promise to give our best effort to every project, no matter how big or small.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="relative">
              <div className="w-full max-w-xs mx-auto aspect-square sm:max-w-sm md:max-w-md lg:max-w-lg bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl p-4 sm:p-6 md:p-8 text-white">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">3</div>
                    <div className="text-sm sm:text-base md:text-lg">Team Members</div>
                    <div className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-90">Ready to help you succeed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Believe In</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These values guide how we work and interact with our clients
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4"
                    >
                      <value.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Three friends working together to help you succeed
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    {/* Photo/Icon container with hover effect - NO BLUE RING */}
                    <motion.div whileHover={{ scale: 1.1 }} className="relative w-24 h-24 mx-auto mb-4 group">
                      {/* Default icon background */}
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                        <member.icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Field-specific image - shows on hover - NO BORDER/RING */}
                      <div className="absolute inset-0 w-24 h-24 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <Image
                          src={member.fieldImage || "/placeholder.svg"}
                          alt={`${member.role} illustration`}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{member.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-auto">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
