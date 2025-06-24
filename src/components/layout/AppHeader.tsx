import { HelpCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AppHeader() {
  return (
    <header className="h-14 bg-[#6182DC] flex items-center justify-between px-6 text-white">
      {/* Left section - Company name (optional, can be removed) */}
      <div className="flex-1">{/* Reserved for future use */}</div>

      {/* Center section - Logo */}
      <div className="flex-1 flex justify-center">
        <img src="/logo.svg" alt="Rinsed Logo" className="w-24" />
      </div>

      {/* Right section - Help and User */}
      <div className="flex-1 flex items-center justify-end gap-4"></div>
    </header>
  );
}
