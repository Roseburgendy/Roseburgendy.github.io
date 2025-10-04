import favicon from "../assets/favicon.svg";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-6 md:px-16 py-16 md:py-20 gap-16 md:gap-20 bg-[var(--bg)] border-t border-[var(--border)] text-[var(--text)]">
      {/* 顶部行 */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="w-[75px] h-[55px] flex items-center justify-center">
            <img src={favicon} alt="Logo" className="w-10 h-10" />
          </div>
        </div>

        {/* 导航链接（改为 <a>） */}
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 text-sm md:text-base font-semibold tracking-[2px] text-[var(--text)]">
          <a
            href="#projects"
            className="hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            PROJECTS
          </a>
          <a
            href="#about"
            className="hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            ABOUT
          </a>
          <a
            href="/resume.pdf"
            className="hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            RESUME
          </a>
        </div>

        {/* 社交图标 */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <FaYoutube size={22} />
          </a>
        </div>
      </div>

      {/* 底部credit */}
      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-full h-px bg-[var(--border)]" />
        <p className="text-xs md:text-sm text-[var(--muted)] text-center font-open-sans">
          ©2025 Designed and Developed with ❤️ by Ye Wang
        </p>
      </div>
    </footer>
  );
};
