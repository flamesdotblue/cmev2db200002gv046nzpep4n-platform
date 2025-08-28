import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2">
          <div className="relative">
            <span className="absolute inset-0 -z-10 rounded-md bg-fuchsia-500 blur-md opacity-30 group-hover:opacity-50 transition" />
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-500 font-bold">EL</div>
          </div>
          <span className="text-lg font-semibold tracking-wide">EchoLab Studio</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Docs</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="rounded-md px-4 py-2 text-sm text-white/80 hover:text-white">Sign in</a>
          <a href="#pricing" className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">Start free trial</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden rounded-md p-2 text-white/80 hover:text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-3 py-3 text-sm text-white/80">
            <a onClick={() => setOpen(false)} href="#features" className="hover:text-white">Features</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="hover:text-white">Pricing</a>
            <a onClick={() => setOpen(false)} href="#" className="hover:text-white">Docs</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-md px-4 py-2 text-sm text-white/80 hover:text-white">Sign in</a>
            <a href="#pricing" className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">Start free trial</a>
          </div>
        </div>
      )}
    </header>
  );
}
