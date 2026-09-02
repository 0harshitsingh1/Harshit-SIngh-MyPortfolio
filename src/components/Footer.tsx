export default function Footer() {
  return (
    <footer className="w-full py-4 mt-auto border-t border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-gray-400 font-medium tracking-wide text-sm flex items-center justify-center flex-wrap">
          <span>Designed & built by <span className="text-[#e35d5b] font-bold">Harshit Singh</span></span>
          <span className="hidden sm:inline-block mx-2 opacity-30">|</span>
          <span className="w-full sm:w-auto mt-2 sm:mt-0">© {new Date().getFullYear()} All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
