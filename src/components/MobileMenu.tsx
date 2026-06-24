import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  navItems: NavItem[];
  currentPath: string;
}

export default function MobileMenu({ navItems, currentPath }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-forest hover:bg-sage rounded-[var(--radius-btn)] transition-colors"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={24} /> : <List size={24} />}
      </button>

      {open && (
        <div className="absolute top-[68px] left-0 right-0 bg-bone border-b border-border shadow-lg">
          <ul className="max-w-[1200px] mx-auto px-5 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive =
                currentPath === item.href ||
                (item.href !== "/" && currentPath.startsWith(item.href));
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-[var(--radius-btn)] transition-colors ${
                      isActive
                        ? "text-forest bg-sage"
                        : "text-muted hover:text-forest hover:bg-sage/60"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
