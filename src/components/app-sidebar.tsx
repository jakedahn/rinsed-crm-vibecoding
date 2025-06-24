import * as React from "react";
import { HelpCircle } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { navigationItems } from "@/lib/navigation-data";

// Convert navigation data to the format expected by NavMain
const navMainItems = navigationItems.map((item) => ({
  title: item.label,
  url: item.href || "#",
  icon: item.icon,
  isActive: item.id === "support-agent", // Support Agent is active by default
  items:
    item.children?.map((child) => ({
      title: child.label,
      url: child.href || "#",
      isActive: child.isActive,
    })) || [],
}));

const userData = {
  name: "John Smith",
  email: "m@example.com",
  avatar: "/avatars/user.jpg",
};

const teamData = [
  {
    name: "Music City Car Wash",
    plan: "Enterprise",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex justify-center mb-4 mt-5">
          <img
            src="/carwash-logo.jpeg"
            alt="Car Wash Logo"
            className="w-20 h-auto"
          />
        </div>
        <TeamSwitcher teams={teamData} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainItems} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2">
          <a
            href="/help"
            className="flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-[#f1f5fe] hover:text-sidebar-accent-foreground transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Help Center</span>
          </a>
        </div>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
