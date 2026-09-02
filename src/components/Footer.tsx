export default function Footer() {
  return (
    <footer className="w-full py-4 mt-auto border-t border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-[#e35d5b] font-medium tracking-wide">
          © {new Date().getFullYear()} Harshit Singh
        </p>
      </div>
    </footer>
  );
}
