import { useEffect, useRef, useState } from "react";
import favicon from "../assets/favicon.svg";
export const Navbar = () => {
  const getHash = () =>
    (typeof window !== "undefined" && window.location.hash.replace("#", "")) ||
    "projects";

  const [active, setActive] = useState(getHash());
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onHashChange = () => setActive(getHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const THRESHOLD = 8;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const delta = y - lastY.current;

      if (y <= 4) {
        setVisible(true);
      } else {
        if (delta > THRESHOLD) setVisible(false);
        else if (delta < -THRESHOLD) setVisible(true);
      }
      lastY.current = y;
    };

    let ticking = false;
    const onScrollRaf = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScrollRaf, { passive: true });
    return () => window.removeEventListener("scroll", onScrollRaf);
  }, []);

  const linkBase =
    "relative z-10 px-3 py-1 rounded-full text-sm font-medium transition-colors";
  const isActive = (key) => active === key;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 左侧 Logo */}
          <div className="flex items-center space-x-2">
            <img className="w-8 h-8" src={favicon} alt="" />
            <span className="font-semibold text-lg text-gray-900">Wang Ye</span>
          </div>

          {/* 右侧 胶囊型导航 */}
          <div className="flex items-center">
            <div className="flex bg-gray-100 rounded-full px-2 py-1 space-x-6">
              <a
                href="#projects"
                className="px-3 py-1 rounded-full text-gray-600 font-medium hover:text-black transition-colors active:bg-white active:shadow"
              >
                Work
              </a>
              <a
                href="#about"
                className="px-3 py-1 rounded-full text-gray-600 font-medium hover:text-black transition-colors active:bg-white active:shadow"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
