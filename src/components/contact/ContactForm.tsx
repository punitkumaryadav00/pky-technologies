"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Sparkles,
  Clock,
  ShieldCheck,
  Building,
  Mail,
  User,
  Phone,
  MessageSquare,
  DollarSign,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const servicesList = [
  "Custom Website / Web App",
  "SEO & Search Domination",
  "AI Chatbot & Automation",
  "Brand Identity & Design",
  "E-Commerce Platform",
  "Full Digital Transformation",
];

const budgetRanges = [
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹3,00,000",
  "₹3,00,000 – ₹6,00,000",
  "₹6,00,000+",
  "Flexible / Need Consultation",
];

const timelineOptions = [
  "Urgent (Within 2–3 Weeks)",
  "Standard (1–2 Months)",
  "Strategic (2–3 Months)",
  "Exploring / Planning Phase",
];

export function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email address.");
      return;
    }
    setStatus("submitting");

    // Simulate swift server processing
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="relative rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] p-6 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={42} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Proposal Request Received!
            </h3>
            <p className="text-[var(--pky-text-secondary)] max-w-lg mx-auto mb-6 leading-relaxed">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. Our technical architecture team is reviewing your project parameters. You will receive an initial project blueprint and timeline estimate within <strong className="text-cyan-400">2 to 4 business hours</strong>.
            </p>

            <div className="p-4 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] max-w-md mx-auto mb-8 text-left space-y-2 text-sm text-[var(--pky-text-muted)]">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-cyan-400 shrink-0" />
                <span>Next Step: Discovery review & custom architecture brief</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span>Strict Non-Disclosure Guarantee: Your project IP is protected</span>
              </div>
            </div>

            <button
              onClick={() => {
                setStatus("idle");
                setSelectedServices([]);
                setSelectedBudget("");
                setSelectedTimeline("");
                setFormData({ name: "", email: "", phone: "", company: "", website: "", message: "" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-white hover:border-cyan-500/50 transition-colors text-sm font-semibold"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form key="form" onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {/* Step 1: Services Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={16} className="text-cyan-400" />
                  1. Which Services Do You Require?
                </label>
                <span className="text-xs text-[var(--pky-text-muted)]">Select all that apply</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {servicesList.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-medium border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border-cyan-500/60 text-white shadow-sm shadow-cyan-500/20"
                          : "bg-[var(--pky-bg-surface)] border-[var(--pky-border)] text-[var(--pky-text-secondary)] hover:text-white hover:border-[var(--pky-border-hover)]"
                      }`}
                    >
                      <span>{service}</span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                          isSelected
                            ? "bg-cyan-500 border-cyan-400 text-black font-bold text-[10px]"
                            : "border-[var(--pky-border)]"
                        }`}
                      >
                        {isSelected && "✓"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget */}
              <div>
                <label className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                  <DollarSign size={16} className="text-cyan-400" />
                  2. Anticipated Budget Range
                </label>
                <div className="space-y-2">
                  {budgetRanges.map((range) => {
                    const isSelected = selectedBudget === range;
                    return (
                      <button
                        type="button"
                        key={range}
                        onClick={() => setSelectedBudget(range)}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-cyan-500/15 border-cyan-500/60 text-white"
                            : "bg-[var(--pky-bg-surface)] border-[var(--pky-border)] text-[var(--pky-text-secondary)] hover:text-white hover:border-[var(--pky-border-hover)]"
                        }`}
                      >
                        <span>{range}</span>
                        <div
                          className={`w-3.5 h-3.5 rounded-full border ${
                            isSelected
                              ? "bg-cyan-400 border-cyan-400"
                              : "border-[var(--pky-border)]"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-cyan-400" />
                  3. Target Launch Timeline
                </label>
                <div className="space-y-2">
                  {timelineOptions.map((time) => {
                    const isSelected = selectedTimeline === time;
                    return (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTimeline(time)}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-cyan-500/15 border-cyan-500/60 text-white"
                            : "bg-[var(--pky-bg-surface)] border-[var(--pky-border)] text-[var(--pky-text-secondary)] hover:text-white hover:border-[var(--pky-border-hover)]"
                        }`}
                      >
                        <span>{time}</span>
                        <div
                          className={`w-3.5 h-3.5 rounded-full border ${
                            isSelected
                              ? "bg-cyan-400 border-cyan-400"
                              : "border-[var(--pky-border)]"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Contact & Company Details */}
            <div>
              <label className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                <Briefcase size={16} className="text-cyan-400" />
                4. Your Contact & Company Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[var(--pky-text-muted)] mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--pky-text-muted)]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-[var(--pky-text-muted)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[var(--pky-text-muted)] mb-1.5">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--pky-text-muted)]" />
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-[var(--pky-text-muted)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[var(--pky-text-muted)] mb-1.5">
                    Direct Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--pky-text-muted)]" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-[var(--pky-text-muted)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[var(--pky-text-muted)] mb-1.5">
                    Company Name & Existing Website
                  </label>
                  <div className="relative">
                    <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--pky-text-muted)]" />
                    <input
                      type="text"
                      placeholder="Acme Corp / acme.com"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-[var(--pky-text-muted)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Project Vision */}
            <div>
              <label className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                <MessageSquare size={16} className="text-cyan-400" />
                5. Tell Us About Your Project & Objectives
              </label>
              <textarea
                rows={4}
                placeholder="Describe your current bottleneck, target launch vision, key features needed, or business goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-[var(--pky-text-muted)]"
              />
            </div>

            {/* Submission & Trust Badges */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-[var(--pky-text-muted)]">
                <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
                <span>NDA Protected • 100% Confidential • Zero Spam Guarantee</span>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Architecture Brief...</span>
                  </>
                ) : (
                  <>
                    <span>Request Proposal & Architecture Blueprint</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
