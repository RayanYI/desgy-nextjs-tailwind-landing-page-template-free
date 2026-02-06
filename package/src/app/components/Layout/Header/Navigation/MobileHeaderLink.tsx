import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = motion.div as any;

const MobileHeaderLink: React.FC<{ item: HeaderItem; closeMenu: () => void }> = ({ item, closeMenu }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleClick = () => {
    if (item.submenu) {
      handleToggle();
    } else {
      closeMenu();
    }
  };

  return (
    <div className="w-full">
      <Link
        href={item.href}
        onClick={handleClick}
        className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
      >
        <span>{item.label}</span>
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''} text-gray-400`}
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
      </Link>
      <AnimatePresence>
        {submenuOpen && item.submenu && (
          <MotionDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4"
          >
            <div className="pl-4 border-l border-gray-100 dark:border-gray-800 py-2 space-y-1">
              {item.submenu.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  onClick={closeMenu}
                  className="block px-4 py-2 text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded-lg transition-colors"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeaderLink;
