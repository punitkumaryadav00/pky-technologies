"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  if (subscribed) {
    return (
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold max-w-md mx-auto flex items-center justify-center gap-2">
        <CheckCircle2 size={18} />
        <span>You are subscribed to the PKY Architecture Brief!</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your business email"
        className="w-full sm:w-80 px-4 py-3 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-white text-sm focus:outline-none focus:border-cyan-500 placeholder:text-[var(--pky-text-muted)]"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white font-semibold text-sm hover:opacity-95 shadow-md shadow-cyan-500/25 transition-all cursor-pointer shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
