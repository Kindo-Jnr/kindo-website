import PageTransition from '@components/PageTransition'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Linkedin, Mail, MapPin, Send, Github, Globe, MessageCircle } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    'Website Development',
    'Frontend Development',
    'React/Next.js Development',
    'UI/UX Design',
    'Performance Optimization',
    'Responsive Design',
    'Animation & Interactions',
    'Technical Consultation',
    'Other'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    const submitPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData.name && formData.email) {
          resolve()
        } else {
          reject(new Error('Please fill in all required fields'))
        }
      }, 1500)
    })

    toast.promise(
      submitPromise,
      {
        loading: 'Sending your message...',
        success: () => {
          // Reset form on success
          setFormData({
            name: '',
            email: '',
            service: '',
            message: '',
            timeline: ''
          })
          return 'Message sent successfully! I\'ll get back to you within 24 hours.'
        },
        error: (err) => err.message || 'Something went wrong. Please try again.'
      },
      {
        style: {
          background: 'var(--card-bg)',
          color: 'var(--text-color)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '16px',
          fontSize: '14px',
          maxWidth: '400px'
        },
        success: {
          duration: 5000,
          icon: '✅',
        },
        error: {
          duration: 4000,
          icon: '❌',
        },
      }
    ).finally(() => {
      setIsSubmitting(false)
    })
  }

  return (
  <>
    <Toaster 
      position="top-right"
      toastOptions={{
        style: {
          background: 'var(--card-bg)',
          color: 'var(--text-color)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '16px',
          fontSize: '14px',
          maxWidth: '400px'
        },
        success: {
          duration: 5000,
          icon: '✅',
        },
        error: {
          duration: 4000,
          icon: '❌',
        },
      }}
    />

    <main 
      className="min-h-screen -mt-24"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-20">
            
            {/* Left: Profile Image & Contact Info - Takes 1/3 */}
            <motion.div
              className="lg:w-1/3 flex flex-col items-center lg:items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Image */}
              <div className="relative w-56 h-56 lg:w-72 lg:h-72 mb-8">
                <img
                  src="/images/kindo-profile2.PNG"
                  alt="Abubakari Abdulai Kindo"
                  className="w-full h-full object-cover rounded-xl shadow-2xl border-4"
                  style={{
                    borderColor: "var(--border-color)",
                  }}
                />
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-500 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br-lg" />
              </div>

              {/* Contact Information */}
              <div className="text-center lg:text-left w-full">
                <motion.h2 
                  className="text-2xl lg:text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Let's <span className="text-blue-500">Build</span> Together
                </motion.h2>

                {/* Social Links */}
                <motion.div 
                  className="flex flex-col gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md  hover:text-blue-400"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Linkedin size={20} className="text-blue-500" />
                    <span className="font-medium">LinkedIn</span>
                    <span className="text-xs opacity-60 ml-auto">Professional Profile</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:text-gray-400"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Github size={20} />
                    <span className="font-medium">GitHub</span>
                    <span className="text-xs opacity-60 ml-auto">View My Code</span>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/yourphonenumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:text-green-400"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <MessageCircle size={20} className="text-green-500" />
                    <span className="font-medium">WhatsApp</span>
                    <span className="text-xs opacity-60 ml-auto">Quick Chat</span>
                  </motion.a>

                  <motion.a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:text-red-400"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Mail size={20} className="text-red-500" />
                    <div className="text-left">
                      <div className="font-medium">Email Me</div>
                      <div className="text-sm opacity-70">your.email@example.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://yourportfolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:text-purple-400"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Globe size={20} className="text-purple-500" />
                    <div className="text-left">
                      <div className="font-medium">Portfolio</div>
                      <div className="text-sm opacity-70">View My Work</div>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <MapPin size={20} className="text-blue-500" />
                    <div className="text-left">
                      <div className="font-medium">Location</div>
                      <div className="text-sm opacity-70">Available for remote and on site work worldwide</div>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </motion.div>

            {/* Right: Contact Form - Takes 2/3 */}
            <motion.div 
              className="lg:w-2/3 w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                className="rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <motion.h2 
                  className="text-2xl lg:text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Start Your <span className="text-blue-500">Project</span>
                </motion.h2>
                
                <motion.p 
                  className="mb-6 opacity-80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Have a web development project in mind? Let's discuss how I can help bring your ideas to life with modern technologies and clean code.
                </motion.p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm transition-all duration-300"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--border-color)",
                          color: "var(--text-color)",
                        }}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm transition-all duration-300"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--border-color)",
                          color: "var(--text-color)",
                        }}
                        placeholder="john@doe.com"
                      />
                    </div>
                  </motion.div>

                  {/* Service Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm transition-all duration-300 appearance-none"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-color)",
                      }}
                    >
                      <option value="">What type of project?</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm transition-all duration-300 resize-none"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-color)",
                      }}
                      placeholder="Hello Kindo, can you help me with..."
                    />
                  </motion.div>

                  {/* Budget/Timeframe */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.6 }}
                  >
                    <div className="text-sm font-medium mb-2">Project Timeline</div>
                    <div className="flex flex-wrap gap-3">
                      {['ASAP', '1-2 weeks', '1 month', '1-3 months', '3+ months', 'Flexible'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`px-3 py-2 text-sm rounded-lg border transition-all duration-300 ${
                            formData.timeline === time
                              ? 'border-blue-500 bg-blue-500 text-white'
                              : ''
                          }`}
                          style={{
                            border: formData.timeline === time ? '' : '1px solid var(--border-color)',
                            backgroundColor: formData.timeline === time ? '' : 'var(--card-bg)',
                            color: formData.timeline === time ? '' : 'var(--text-color)',
                          }}
                          onClick={() => setFormData({...formData, timeline: time})}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Submit Button with Loading State */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Response Time Note */}
                <motion.div 
                  className="mt-6 text-center text-sm opacity-70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <p>I typically respond within 24 hours. Looking forward to discussing your project!</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
   </>
  )
}