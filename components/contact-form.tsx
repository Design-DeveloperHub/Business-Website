"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// List of services (removed "Other" option)
const services = [
  "Python Development",
  "Web Development",
  "UI/UX Design",
  "WordPress Websites",
  "Landing Pages",
  "Portfolio Websites",
  "Resume Creation",
  "MS Office Services",
  "Media Editing",
]

interface ContactFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface FormData {
  name: string
  email: string
  country: string
  service: string
  description: string
}

interface FormErrors {
  name?: string
  email?: string
  country?: string
  service?: string
  description?: string
}

export default function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [message, setMessage] = useState("")

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    service: "",
    description: "",
  })

  // Validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required"
    }

    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required"
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      setMessage("Please fill in all required fields correctly.")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    try {
      console.log("Submitting form data:", formData) // Debug log

      // Send form data using API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recipient: "designdeveloph@gmail.com",
        }),
      })

      console.log("Response status:", response.status) // Debug log

      const responseData = await response.json()
      console.log("Response data:", responseData) // Debug log

      if (!response.ok) {
        throw new Error(responseData.details || responseData.error || "Failed to send message")
      }

      // Show success state
      setIsSuccess(true)
      setMessage("Message sent successfully! We'll get back to you soon.")

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          country: "",
          service: "",
          description: "",
        })
        setErrors({})
        setIsSuccess(false)
        setMessage("")
        onOpenChange(false)
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error) // Debug log

      // Show more specific error message
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong. Please try again or contact us directly."
      setMessage(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset form when modal closes
  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      country: "",
      service: "",
      description: "",
    })
    setErrors({})
    setMessage("")
    setIsSuccess(false)
    onOpenChange(false)
  }

  // Prevent closing on outside click - only allow closing via close button
  const handleOpenChange = (newOpen: boolean) => {
    // Don't allow closing by clicking outside - only via close button
    return
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[600px] lg:max-w-[700px] p-0 overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl rounded-b-lg [&>button]:hidden">
        {/* Enhanced Header with better colors for both modes */}
        <DialogHeader className="p-4 sm:p-6 pb-3 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 dark:from-blue-600 dark:via-purple-600 dark:to-purple-700 text-white relative rounded-t-2xl">
          {/* Close button - only one now */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/30 hover:bg-white/50 dark:bg-white/20 dark:hover:bg-white/30 transition-colors duration-200 group backdrop-blur-sm border border-white/20"
            disabled={isSubmitting}
            aria-label="Close dialog"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:scale-110 transition-transform duration-200 drop-shadow-sm" />
          </button>

          <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">Contact Us</DialogTitle>
          <DialogDescription className="text-blue-50 dark:text-purple-100 text-center font-medium text-sm sm:text-base mt-2">
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center min-h-[300px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-4 sm:mb-6"
              >
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3"
              >
                Message Sent Successfully!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-md"
              >
                Thank you for reaching out to us. We've received your message and will get back to you as soon as
                possible.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-800/50"
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`h-11 sm:h-12 bg-white dark:bg-gray-700 text-black dark:text-white border-2 transition-all duration-200 ${
                        errors.name ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-600"
                      }`}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 dark:text-red-400 text-xs mt-1 font-medium"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`h-11 sm:h-12 bg-white dark:bg-gray-700 text-black dark:text-white border-2 transition-all duration-200 ${
                        errors.email ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-600"
                      }`}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 dark:text-red-400 text-xs mt-1 font-medium"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Country and Service Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                    >
                      Country *
                    </label>
                    <Input
                      id="country"
                      type="text"
                      placeholder="Your country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      className={`h-11 sm:h-12 bg-white dark:bg-gray-700 text-black dark:text-white border-2 transition-all duration-200 ${
                        errors.country ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-600"
                      }`}
                    />
                    {errors.country && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 dark:text-red-400 text-xs mt-1 font-medium"
                      >
                        {errors.country}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                    >
                      Service *
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => handleInputChange("service", e.target.value)}
                      className={`w-full h-11 sm:h-12 px-3 py-2 border-2 rounded-md shadow-sm focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 ${
                        errors.service ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-600"
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 dark:text-red-400 text-xs mt-1 font-medium"
                      >
                        {errors.service}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Project Description *
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your project, requirements, timeline, and any specific details..."
                    className={`min-h-[120px] sm:min-h-[140px] bg-white dark:bg-gray-700 text-black dark:text-white border-2 transition-all duration-200 resize-none ${
                      errors.description ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-600"
                    }`}
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                  {errors.description && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 dark:text-red-400 text-xs mt-1 font-medium"
                    >
                      {errors.description}
                    </motion.p>
                  )}
                </div>

                {/* Message display */}
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 sm:p-4 rounded-lg text-sm font-medium ${
                      isSuccess
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700"
                        : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700"
                    }`}
                  >
                    {message}
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="order-2 sm:order-1 h-11 sm:h-12 px-6 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-800 bg-gray-400 dark:hover:bg-gray-800 text-gray-200 hover:text-white dark:text-gray-100"
                    disabled={isSubmitting}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="order-1 sm:order-2 h-11 sm:h-12 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:from-blue-600 dark:to-purple-700 dark:hover:from-blue-700 dark:hover:to-purple-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
