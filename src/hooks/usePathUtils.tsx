import { SidebarItem } from "@/types";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export const usePathUtils = () => {
  const pathname = usePathname();

  const normalizePath = useCallback(
    (path: string) => path.replace(/\/+$/, ""),
    [],
  );

  const isActivePath = useCallback(
    (href: string): boolean => {
      if (href === "/student" || href === "/admin") {
        return pathname === href;
      }
      const current = normalizePath(pathname);
      const target = normalizePath(href);
      return current === target;
    },
    [pathname, normalizePath],
  );

  const findActiveItem = useCallback(
    (menuItems: SidebarItem[]) => {
      for (const item of menuItems) {
        if (item.submenu) {
          const activeSubmenuItem = item.submenu.find((sub) =>
            isActivePath(sub.href),
          );
          if (activeSubmenuItem)
            return { item, submenuItem: activeSubmenuItem };
        }
        if (isActivePath(item.href)) return { item };
      }
      return null;
    },
    [isActivePath],
  );

  return { isActivePath, findActiveItem };
};
