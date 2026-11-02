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
  const [waUrl, setWaUrl] = useState<string>("");
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
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      alert("Please enter either your email address or phone number.");
      return;
    }
    setStatus("submitting");

    // Format all inquiry details into a professional WhatsApp message
    const messageLines = [
      "🚀 *New Strategy Call & Project Inquiry*",
      "*PKY Technologies Client Portal*",
      "",
      `👤 *Client Name:* ${formData.name.trim()}`,
      `📞 *Phone / WhatsApp:* ${formData.phone.trim() || "Not provided"}`,
      `📧 *Email:* ${formData.email.trim() || "Not provided"}`,
      formData.company.trim() ? `🏢 *Company:* ${formData.company.trim()}` : null,
      formData.website.trim() ? `🌐 *Website:* ${formData.website.trim()}` : null,
      "",
      "🛠 *Selected Services:*",
      selectedServices.length > 0
        ? selectedServices.map((s) => `• ${s}`).join("\n")
        : "• General Strategy Consultation",
      "",
      `💰 *Budget Range:* ${selectedBudget || "Flexible / Need Consultation"}`,
      `⏳ *Timeline:* ${selectedTimeline || "Flexible"}`,
      "",
      "💬 *Project Overview / Message:*",
      formData.message.trim() ||
        "I would like to schedule a strategy call to discuss digital growth and technical architecture.",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const targetUrl = `https://api.whatsapp.com/send?phone=917419161235&text=${encodeURIComponent(messageLines)}`;
    setWaUrl(targetUrl);
    setStatus("success");

    // Directly open WhatsApp on mobile or desktop without popup blocker issues
    window.location.href = targetUrl;
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
              Redirecting to WhatsApp...
            </h3>
            <p className="text-[var(--pky-text-secondary)] max-w-lg mx-auto mb-6 leading-relaxed text-sm">
              Your inquiry has been packaged. If WhatsApp does not open automatically, click the button below to send your details directly to Founder <strong className="text-emerald-400">Punit Kumar Yadav (+91 74191 61235)</strong>.
            </p>

            {waUrl && (
              <div className="mb-6 flex justify-center">
                <a
                  href={waUrl}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.65)] hover:scale-105 transition-all"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 2c-5.506 0-9.986 4.471-9.986 9.974 0 1.764.464 3.489 1.344 5.013l-1.427 5.212 5.344-1.402c1.468.802 3.125 1.226 4.725 1.226h.005c5.505 0 9.985-4.472 9.985-9.976 0-2.666-1.039-5.174-2.927-7.061-1.888-1.887-4.398-2.926-7.063-2.926zm0 18.257c-1.503 0-2.977-.404-4.264-1.168l-.306-.182-3.172.832.847-3.093-.2-.317a8.23 8.23 0 01-1.261-4.354c0-4.57 3.72-8.29 8.297-8.29 2.215 0 4.298.863 5.864 2.43 1.566 1.567 2.428 3.65 2.427 5.866-.002 4.572-3.722 8.276-8.228 8.276zm4.538-6.195c-.249-.125-1.472-.726-1.7-.809-.228-.083-.394-.125-.56.125-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.125-1.052-.388-2.003-1.237-.741-.661-1.241-1.477-1.387-1.726-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.872.851-.872 2.075 0 1.224.892 2.407 1.017 2.573.125.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.597.19 1.14.163 1.569.099.479-.072 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
                  </svg>
                  <span>Open WhatsApp & Send Message</span>
                </a>
              </div>
            )}

            <div className="p-4 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] max-w-md mx-auto mb-8 text-left space-y-2 text-xs text-[var(--pky-text-muted)]">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-cyan-400 shrink-0" />
                <span>Founder Direct: Punit Kumar Yadav personally reviews every scope</span>
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-white hover:border-cyan-500/50 transition-colors text-sm font-semibold cursor-pointer"
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
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2.5 group cursor-pointer disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Opening WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.031 2c-5.506 0-9.986 4.471-9.986 9.974 0 1.764.464 3.489 1.344 5.013l-1.427 5.212 5.344-1.402c1.468.802 3.125 1.226 4.725 1.226h.005c5.505 0 9.985-4.472 9.985-9.976 0-2.666-1.039-5.174-2.927-7.061-1.888-1.887-4.398-2.926-7.063-2.926zm0 18.257c-1.503 0-2.977-.404-4.264-1.168l-.306-.182-3.172.832.847-3.093-.2-.317a8.23 8.23 0 01-1.261-4.354c0-4.57 3.72-8.29 8.297-8.29 2.215 0 4.298.863 5.864 2.43 1.566 1.567 2.428 3.65 2.427 5.866-.002 4.572-3.722 8.276-8.228 8.276zm4.538-6.195c-.249-.125-1.472-.726-1.7-.809-.228-.083-.394-.125-.56.125-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.125-1.052-.388-2.003-1.237-.741-.661-1.241-1.477-1.387-1.726-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.872.851-.872 2.075 0 1.224.892 2.407 1.017 2.573.125.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.597.19 1.14.163 1.569.099.479-.072 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
                    </svg>
                    <span>Send Inquiry on WhatsApp</span>
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
