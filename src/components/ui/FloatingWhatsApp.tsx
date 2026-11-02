"use client";

export function FloatingWhatsApp() {
  const founderWhatsAppUrl =
    "https://wa.me/917419161235?text=Hello%20Punit,%20I%20would%20like%20to%20discuss%20a%20project%20with%20PKY%20Technologies.";

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 select-none"
    >
      <a
        href={founderWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Founder on WhatsApp (+91 74191 61235)"
        title="Chat with Founder on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_4px_24px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
      >
        {/* Pulsing online presence ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-slate-950" />
        </span>

        {/* WhatsApp SVG Icon only */}
        <svg
          className="w-7 h-7 fill-current drop-shadow-md"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2c-5.506 0-9.986 4.471-9.986 9.974 0 1.764.464 3.489 1.344 5.013l-1.427 5.212 5.344-1.402c1.468.802 3.125 1.226 4.725 1.226h.005c5.505 0 9.985-4.472 9.985-9.976 0-2.666-1.039-5.174-2.927-7.061-1.888-1.887-4.398-2.926-7.063-2.926zm0 18.257c-1.503 0-2.977-.404-4.264-1.168l-.306-.182-3.172.832.847-3.093-.2-.317a8.23 8.23 0 01-1.261-4.354c0-4.57 3.72-8.29 8.297-8.29 2.215 0 4.298.863 5.864 2.43 1.566 1.567 2.428 3.65 2.427 5.866-.002 4.572-3.722 8.276-8.228 8.276zm4.538-6.195c-.249-.125-1.472-.726-1.7-.809-.228-.083-.394-.125-.56.125-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.125-1.052-.388-2.003-1.237-.741-.661-1.241-1.477-1.387-1.726-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.872.851-.872 2.075 0 1.224.892 2.407 1.017 2.573.125.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.597.19 1.14.163 1.569.099.479-.072 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
        </svg>
      </a>
    </aside>
  );
}
