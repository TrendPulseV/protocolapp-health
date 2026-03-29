import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/icon.png" alt="Protocol" width={28} height={28} className="rounded-lg" />
            <span className="text-white font-bold tracking-wide">PROTOCOL</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <a href="mailto:support@protocolapp.health" className="text-slate-400 hover:text-white text-sm transition-colors">
              Support
            </a>
            <a href="#download" className="text-slate-400 hover:text-white text-sm transition-colors">
              Download
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Protocol. All rights reserved.
          </p>
        </div>

        <p className="text-slate-700 text-xs text-center mt-8 max-w-2xl mx-auto">
          Protocol is an information and logging tool only. It does not provide medical advice.
          Consult a qualified healthcare provider before beginning any peptide or supplementation protocol.
        </p>
      </div>
    </footer>
  );
}
