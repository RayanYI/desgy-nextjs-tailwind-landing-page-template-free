"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive = path === item.href;

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        onClick={(e) => {
          if (item.href.includes('#')) {
            const id = item.href.replace(/^.*#/, '');
            const element = document.getElementById(id);
            if (element) {
              e.preventDefault();
              element.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', item.href);
            }
          }
        }}
        className={`relative text-base font-medium flex items-center gap-1 py-2 transition-colors duration-300 ${isActive
          ? "text-blue-600 dark:text-blue-400"
          : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}

        {/* Animated underline */}
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
        />
      </Link>

      {/* Premium submenu dropdown */}
      {submenuOpen && item.submenu && (
        <div
          className="absolute py-2 left-0 mt-2 w-64 bg-white dark:bg-gray-900 shadow-xl rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={(e) => {
                if (subItem.href.includes('#')) {
                  const id = subItem.href.replace(/^.*#/, '');
                  const element = document.getElementById(id);
                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', subItem.href);
                  }
                }
              }}
              className={`relative block px-5 py-3 text-sm font-medium transition-all duration-200 ${path === subItem.href
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;

