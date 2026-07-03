/* eslint-disable no-unused-vars */
"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut,
  ChevronDown,
  ChevronLeftCircle,
  ChevronRightCircle,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { LoginUserState, SidebarItem, SubMenuItem } from "@/types";
import { ADMIN_MENU_ITEMS, STUDENT_MENU_ITEMS } from "@/data";
import { usePathUtils } from "@/hooks/usePathUtils";
import { useMain } from "@/context/MainContext";
// import { useSimMotion } from "@/hooks/useSimulateTranslateMotion";

const getMenuItems = (accountType: LoginUserState): SidebarItem[] =>
  accountType === "admin" ? ADMIN_MENU_ITEMS : STUDENT_MENU_ITEMS;

// ─── Loading Skeleton ─────────────────────────────────────────────────────────

const LoadingSkeleton: React.FC = () => (
  <div className="w-[230px] min-h-screen bg-[#0D1629] border-r border-slate-800 flex flex-col pt-6">
    <div className="px-5 py-5">
      <div className="h-8 w-36 bg-slate-800 rounded-lg animate-pulse" />
    </div>
    <div className="flex-1 px-3 py-4 space-y-2">
      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
        <div key={n} className="h-11 bg-slate-800 rounded-xl animate-pulse" />
      ))}
    </div>
    <div className="p-3 border-t border-slate-800">
      <div className="h-11 bg-slate-800 rounded-xl animate-pulse" />
    </div>
  </div>
);

// ─── Sub Menu ─────────────────────────────────────────────────────────────────

interface SubMenuProps {
  items: SubMenuItem[];
  isOpen: boolean;
  onItemClick: (item: SubMenuItem) => void;
  isActivePath: (href: string) => boolean;
}

const SubMenu: React.FC<SubMenuProps> = ({
  items,
  isOpen,
  onItemClick,
  isActivePath,
}) => (
  <div
    className={`overflow-hidden transition-all duration-1000 ease-in-out ${
      isOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0 mt-0"
    }`}
  >
    <ul className="py-1 space-y-0.5 ml-4">
      {items.map((subItem) => {
        const isSubActive = isActivePath(subItem.href);
        return (
          <li key={subItem.name}>
            <div
              onClick={() => onItemClick(subItem)}
              className={`
                flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm
                cursor-pointer transition-all duration-1000
                ${
                  isSubActive
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20"
                    : "text-slate-500 hover:bg-slate-800 hover:text-slate-300"
                }
              `}
            >
              <subItem.icon className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs font-medium">{subItem.name}</span>
              {isSubActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

// ─── Menu Item ────────────────────────────────────────────────────────────────

interface MenuItemProps {
  item: SidebarItem;
  isActive: boolean;
  isSubmenuActive: boolean;
  isSubmenuOpen: boolean;
  onItemClick: (item: SidebarItem) => void;
  onSubmenuItemClick: (item: SubMenuItem) => void;
  onToggleSubmenu: () => void;
  isActivePath: (href: string) => boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isActive,
  isSubmenuActive,
  isSubmenuOpen,
  onItemClick,
  onSubmenuItemClick,
  onToggleSubmenu,
  isActivePath,
}) => {
  const hasSubmenu = Boolean(item.submenu?.length);
  const isItemActive = isActive || isSubmenuActive;

  return (
    <li>
      <div
        className={`
          flex items-center gap-3 px-3 py-2.5 rounded-xl
          cursor-pointer transition-all duration-1000 group
          ${
            isItemActive
              ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20"
              : "text-slate-400 hover:bg-slate-800 hover:text-white border border-transparent"
          }
        `}
      >
        {/* Icon + label — navigates */}
        <div
          className="flex items-center gap-3 flex-1 min-w-0"
          onClick={() => {
            if (hasSubmenu) {
              onToggleSubmenu();
            } else {
              onItemClick(item);
            }
          }}
        >
          <item.icon
            className={`w-4.5 h-4.5 flex-shrink-0 transition-transform duration-1000 group-hover:scale-110 ${
              isItemActive ? "text-cyan-400" : ""
            }`}
          />
          <span className="text-sm font-medium truncate">{item.name}</span>
        </div>

        {/* Active dot (no submenu) */}
        {isActive && !hasSubmenu && (
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
        )}

        {/* Chevron (with submenu) */}
        {hasSubmenu && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSubmenu();
            }}
            className={`ml-auto flex-shrink-0 transition-transform duration-1000 ease-in-out ${
              isSubmenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDown
              className={`w-4 h-4 ${
                isItemActive ? "text-cyan-400" : "text-slate-600"
              }`}
            />
          </button>
        )}
      </div>

      {hasSubmenu && item.submenu && (
        <SubMenu
          items={item.submenu}
          isOpen={isSubmenuOpen}
          onItemClick={onSubmenuItemClick}
          isActivePath={isActivePath}
        />
      )}
    </li>
  );
};

// ─── Logout Button ────────────────────────────────────────────────────────────

const LogoutButton: React.FC<{ onLogout: () => void }> = ({ onLogout }) => (
  <div className="p-3 border-t border-slate-800">
    <button
      onClick={onLogout}
      className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl
        border border-red-500/20 bg-red-500/10 text-red-400
        hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/40
        text-sm font-semibold transition-all duration-1000"
    >
      <LogOut className="w-4 h-4" />
      Log Out
    </button>
  </div>
);

// ─── Sidebar Shell ────────────────────────────────────────────────────────────

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ open = false, onClose }: SidebarProps) {
  const router = useRouter();
  const { user, loading, logout, accountType } = useAuth();
  const { isSidebarOpen, setIsSidebarOpen } = useMain();
  // const resultDim = useSimMotion({
  //   isLeftToRight: isSidebarOpen,
  //   numberOfBreaks: 4,
  //   duration: 1000,
  //   maxDim: 256,
  //   minDim: 24,
  // });
  // console.log("Current User", user);
  const { isActivePath, findActiveItem } = usePathUtils();
  const menuItems = getMenuItems(accountType);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());

  // Auto-open submenu that contains the active route
  useEffect(() => {
    const activeResult = findActiveItem(menuItems);
    if (activeResult?.item.submenu && activeResult.submenuItem) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpenSubmenus((prev) => new Set(prev).add(activeResult.item.name));
    }
  }, [menuItems, findActiveItem]);

  const handleLogout = useCallback(async () => {
    await logout();
    router.push("/");
  }, [logout, router]);

  const handleItemClick = useCallback(
    (item: SidebarItem) => {
      router.push(item.href);
      onClose?.();
    },
    [router, onClose],
  );

  const handleSubmenuItemClick = useCallback(
    (item: SubMenuItem) => {
      router.push(item.href);
      onClose?.();
    },
    [router, onClose],
  );

  const handleToggleSubmenu = useCallback((itemName: string) => {
    setOpenSubmenus((prev) => {
      const next = new Set(prev);
      next.has(itemName) ? next.delete(itemName) : next.add(itemName);
      return next;
    });
  }, []);

  if (loading) return <LoadingSkeleton />;

  return (
    <>
      {/* Mobile overlay */}
      {open && onClose && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className={`w-68 h-screen flex items-center justify-end 
        cursor-pointer transition-transform duration-1000 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-[95%]"}`}
      >
        {isSidebarOpen ? (
          <ChevronLeftCircle className="opacity-70 w-6 h-6 text-cyan-500" />
        ) : (
          <ChevronRightCircle />
        )}
      </button> */}
      {/* ${isSidebarOpen ? "translate-x-0" : "-translate-x-[90%]"} */}
      <aside
        // style={{ width: resultDim }}
        className={`h-full bg-[#0D1629] border-r border-slate-800
          flex flex-col justify-start transition-transform duration-1000 
          ${isSidebarOpen ? "w-[230px]" : "w-6"}
        `}
      >
        <div className="flex items-center justify-end min-h-screen">
          <div className="flex flex-col min-h-screen">
            {/* Nav */}
            <nav className="flex-1 overflow-y-auto px-3 py-4 mt-20">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const activeResult = findActiveItem([item]);
                  const isActive = Boolean(
                    activeResult?.item && !activeResult.submenuItem,
                  );
                  const isSubmenuActive = Boolean(activeResult?.submenuItem);
                  const isSubmenuOpen = openSubmenus.has(item.name);

                  return (
                    <MenuItem
                      key={item.name}
                      item={item}
                      isActive={isActive}
                      isSubmenuActive={isSubmenuActive}
                      isSubmenuOpen={isSubmenuOpen}
                      onItemClick={handleItemClick}
                      onSubmenuItemClick={handleSubmenuItemClick}
                      onToggleSubmenu={() => handleToggleSubmenu(item.name)}
                      isActivePath={isActivePath}
                    />
                  );
                })}
              </ul>
            </nav>

            {/* User identity block */}
            {user && (
              <div className="px-3 pb-3 flex-shrink-0">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                    {(user?.fullName || "Shosan Boggs")
                      ?.split(" ")
                      .map((n: string) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase() ?? "??"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">
                      {/* {user?.fullName ?? "Student"} */}
                      {user?.fullName ?? "Shosan Boggs"}
                    </p>
                    <p className="text-xs text-slate-500 capitalize">
                      {accountType}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <LogoutButton onLogout={handleLogout} />
          </div>

          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className={`w-8 h-auto flex items-center justify-end 
            cursor-pointer transition-transform duration-1000`}
          >
            {isSidebarOpen ? (
              <ChevronLeftCircle className="opacity-70 w-6 h-6 text-cyan-500" />
            ) : (
              <ChevronRightCircle className="opacity-90 w-6 h-6 text-blue-500" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
