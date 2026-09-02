"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, MapPin, Mail, Send, Loader2 } from "lucide-react";

export default function ContactSection({ id }: { id?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred.");
    }
  };

  return (
    <section id={id || "contact"} className="min-h-[calc(100vh-64px)] bg-[#050508] relative overflow-hidden flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Motifs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#e35d5b]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#9333ea]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[1200px] bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <div className="flex flex-col lg:flex-row">

          {/* LEFT SIDE - Info */}
          <div className="w-full lg:w-5/12 p-10 lg:p-16 bg-[#12121c]/80 flex flex-col justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold mb-4 text-white tracking-tight"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-[#e35d5b] font-medium text-lg mb-12"
              >
                Contact me and ask your queries!!
              </motion.p>

              <div className="space-y-8">
                {/* Info Row 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-[#e35d5b]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Name</p>
                    <p className="text-lg text-white font-medium">Harshit Singh</p>
                  </div>
                </motion.div>

                {/* Info Row 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#e35d5b]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-lg text-white font-medium">Bangalore, India</p>
                  </div>
                </motion.div>

                {/* Info Row 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#e35d5b]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-lg text-white font-medium break-all">harshitsingh.vtu@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Subtle accent blob in background of left panel */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#e35d5b]/10 blur-[80px] rounded-full" />
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="w-full lg:w-7/12 p-10 lg:p-16">
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-white mb-8"
            >
              Message me
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#e35d5b]/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(227,93,91,0.2)] transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#e35d5b]/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(227,93,91,0.2)] transition-all duration-300"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#e35d5b]/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(227,93,91,0.2)] transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#e35d5b]/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(227,93,91,0.2)] transition-all duration-300 resize-none custom-scrollbar"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center justify-between"
              >
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#e35d5b] hover:bg-[#d44d4b] text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(227,93,91,0.4)] active:scale-95"
                >
                  {status === "loading" ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <span className="text-green-400 font-medium">Message sent successfully!</span>
                )}
                {status === "error" && (
                  <span className="text-red-400 font-medium">{errorMessage}</span>
                )}
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
