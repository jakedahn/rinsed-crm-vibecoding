import {
  Users,
  ShoppingCart,
  BarChart3,
  Sliders,
  type LucideIcon,
  MessagesSquare,
  Bot,
  Inbox,
  Megaphone,
  Settings2,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  logo?: boolean;
  isNew?: boolean;
  isExpandable?: boolean;
  isActive?: boolean;
  href?: string;
  children?: Omit<NavItem, "icon" | "children">[];
}

export const navigationItems: NavItem[] = [
  {
    id: "tickets",
    icon: Inbox,
    label: "Tickets",
    isExpandable: true,
    children: [
      { id: "my-tickets", label: "My Tickets (0)", href: "/tickets/my" },
      {
        id: "open-tickets",
        label: "Open Tickets (703)",
        href: "/tickets/open",
      },
      {
        id: "incomplete-tickets",
        label: "Incomplete Tickets (20)",
        href: "/tickets/incomplete",
      },
      {
        id: "pause-tickets",
        label: "Pause Tickets (4)",
        href: "/tickets/pause",
      },
      { id: "all-tickets", label: "All Tickets", href: "/tickets/all" },
      {
        id: "pause-cancel-reasons",
        label: "Pause/Cancel Reasons",
        href: "/tickets/reasons",
      },
      {
        id: "ticket-resolutions",
        label: "Ticket Resolutions",
        href: "/tickets/resolutions",
      },
    ],
  },
  {
    id: "support-agent",
    icon: Bot,
    label: "Support Agent",
    isExpandable: true,
    children: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: "/support-agent/dashboard",
        isActive: true,
      },
      {
        id: "conversations",
        label: "Conversations",
        href: "/support-agent/conversations",
      },
      { id: "simulator", label: "Simulator", href: "/support-agent/simulator" },
      {
        id: "configuration",
        label: "Configuration",
        href: "/support-agent/configuration",
      },
    ],
  },
  {
    id: "customer-management",
    icon: Users,
    label: "Customer Management",
    isExpandable: true,
    children: [
      { id: "members", label: "Members", href: "/customers/members" },
      {
        id: "family-plan-members",
        label: "Family Plan Members",
        href: "/customers/family-plans",
      },
      {
        id: "member-forms",
        label: "Member Management Forms",
        href: "/customers/forms",
      },
      {
        id: "customer-portal",
        label: "Customer Portal",
        href: "/customers/portal",
      },
      { id: "downsells", label: "Downsells", href: "/customers/downsells" },
      {
        id: "cancellation-flow",
        label: "Cancellation Flow",
        href: "/customers/cancellation",
      },
      {
        id: "switch-plans",
        label: "Switch Plans",
        href: "/customers/switch-plans",
      },
      {
        id: "family-plans",
        label: "Family Plans",
        href: "/customers/family-plans-config",
      },
      {
        id: "fleet-programs",
        label: "Fleet Programs",
        isNew: true,
        href: "/customers/fleet-programs",
      },
      {
        id: "fleet-plans",
        label: "Fleet Plans",
        isNew: true,
        href: "/customers/fleet-plans",
      },
      {
        id: "email-templates",
        label: "Email Templates",
        href: "/customers/email-templates",
      },
    ],
  },
  {
    id: "rinsed-inbox",
    icon: MessagesSquare,
    label: "Rinsed Inbox",
    href: "/inbox",
  },
  {
    id: "checkouts",
    icon: ShoppingCart,
    label: "Checkouts",
    isExpandable: true,
    children: [
      {
        id: "purchase-orders",
        label: "Purchase Orders",
        href: "/checkouts/orders",
      },
      {
        id: "checkout-forms",
        label: "Checkout Forms",
        href: "/checkouts/forms",
      },
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    label: "Marketing",
    isExpandable: true,
    children: [
      { id: "audiences", label: "Audiences", href: "/marketing/audiences" },
      {
        id: "contact-lists",
        label: "Contact Lists",
        href: "/marketing/contacts",
      },
      {
        id: "campaign-messages",
        label: "Campaign Messages",
        href: "/marketing/campaigns",
      },
      {
        id: "scheduled-messages",
        label: "Scheduled Messages",
        href: "/marketing/scheduled",
      },
      {
        id: "member-offers",
        label: "Member Offers",
        href: "/marketing/offers",
      },
      {
        id: "member-offers-legacy",
        label: "Member Offers (Legacy)",
        href: "/marketing/offers-legacy",
      },
      {
        id: "reward-loyalty",
        label: "Reward Loyalty Program",
        isNew: true,
        href: "/marketing/loyalty",
      },
      {
        id: "reward-accounts",
        label: "Reward Loyalty Program Accounts",
        href: "/marketing/loyalty-accounts",
      },
      { id: "vouchers", label: "Vouchers", href: "/marketing/vouchers" },
      {
        id: "base-email-template",
        label: "Base Email Template",
        href: "/marketing/email-template",
      },
      { id: "sms-opt", label: "SMS Opt In/Out", href: "/marketing/sms-opt" },
      {
        id: "email-opt",
        label: "Email Opt In/Out",
        href: "/marketing/email-opt",
      },
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    isExpandable: true,
    children: [
      {
        id: "overview-old",
        label: "Overview (Old)",
        href: "/analytics/overview-old",
      },
      { id: "daily-old", label: "Daily (old)", href: "/analytics/daily-old" },
      {
        id: "subscribers",
        label: "Subscribers",
        href: "/analytics/subscribers",
      },
      {
        id: "online-sales",
        label: "Online Sales",
        href: "/analytics/online-sales",
      },
      {
        id: "member-engagement",
        label: "Member Engagement",
        href: "/analytics/engagement",
      },
      {
        id: "downsells-analytics",
        label: "Downsells",
        href: "/analytics/downsells",
      },
      { id: "retail", label: "Retail", href: "/analytics/retail" },
      {
        id: "type-1-decline",
        label: "Type 1 Decline",
        href: "/analytics/type-1-decline",
      },
      {
        id: "spot-ai",
        label: "Spot AI Integration",
        href: "/analytics/spot-ai",
      },
      { id: "tickets-analytics", label: "Tickets", href: "/analytics/tickets" },
      {
        id: "member-info",
        label: "Member Info Collection",
        href: "/analytics/member-info",
      },
      {
        id: "contact-lists-analytics",
        label: "Contact Lists",
        href: "/analytics/contact-lists",
      },
      {
        id: "marketing-roi",
        label: "Marketing ROI",
        href: "/analytics/marketing-roi",
      },
      {
        id: "retail-loyalty",
        label: "Retail Loyalty",
        href: "/analytics/retail-loyalty",
      },
      {
        id: "family-plans-analytics",
        label: "Family Plans",
        href: "/analytics/family-plans",
      },
      {
        id: "member-offers-analytics",
        label: "Member Offers",
        href: "/analytics/member-offers",
      },
      {
        id: "benchmarking",
        label: "Benchmarking",
        href: "/analytics/benchmarking",
      },
      {
        id: "customer-portal-analytics",
        label: "Customer Portal",
        href: "/analytics/customer-portal",
      },
      {
        id: "support-agent-analytics",
        label: "Support Agent",
        href: "/analytics/support-agent",
      },
      {
        id: "active-members",
        label: "Active Members",
        href: "/analytics/active-members",
      },
      { id: "daily", label: "Daily", href: "/analytics/daily" },
      { id: "overview", label: "Overview", href: "/analytics/overview" },
      {
        id: "customer-app",
        label: "Customer App",
        href: "/analytics/customer-app",
      },
    ],
  },
  {
    id: "settings",
    icon: Settings2,
    label: "Settings",
    isExpandable: true,
    children: [
      { id: "users", label: "Users", href: "/settings/users" },
      { id: "locations", label: "Locations", href: "/settings/locations" },
      {
        id: "location-groups",
        label: "Location Groups",
        href: "/settings/location-groups",
      },
      {
        id: "email-templates-settings",
        label: "Email Templates",
        href: "/settings/email-templates",
      },
      { id: "roles", label: "Roles", href: "/settings/roles" },
      {
        id: "text-templates",
        label: "Text Message Templates",
        href: "/settings/text-templates",
      },
      {
        id: "twilio-registration",
        label: "Twilio Registration",
        href: "/settings/twilio-registration",
      },
      {
        id: "twilio-phone",
        label: "Twilio Phone Numbers",
        href: "/settings/twilio-phone",
      },
      {
        id: "email-dns",
        label: "Email DNS Configuration",
        href: "/settings/email-dns",
      },
      {
        id: "copy-customizations",
        label: "Copy Customizations",
        href: "/settings/copy-customizations",
      },
    ],
  },
  {
    id: "super-admin",
    icon: Sliders,
    label: "Super Admin",
    isExpandable: true,
    children: [
      {
        id: "analytics-dashboards",
        label: "Analytics Dashboards",
        href: "/admin/analytics-dashboards",
      },
      {
        id: "analytics-emails",
        label: "Analytics Emails",
        href: "/admin/analytics-emails",
      },
      { id: "customers-admin", label: "Customers", href: "/admin/customers" },
      {
        id: "external-data",
        label: "External Data Sources",
        href: "/admin/external-data",
      },
      {
        id: "location-groups-admin",
        label: "Location Groups",
        href: "/admin/location-groups",
      },
      { id: "memberships", label: "Memberships", href: "/admin/memberships" },
      {
        id: "payment-processors",
        label: "Payment Processors",
        href: "/admin/payment-processors",
      },
      { id: "plan-types", label: "Plan Types", href: "/admin/plan-types" },
      { id: "regions", label: "Regions", href: "/admin/regions" },
      {
        id: "replication-groups",
        label: "Replication Groups",
        href: "/admin/replication-groups",
      },
      {
        id: "support-phones",
        label: "Support Agent Phones",
        href: "/admin/support-phones",
      },
      {
        id: "knowledge-bases",
        label: "Support Agent Knowledge Bases",
        href: "/admin/knowledge-bases",
      },
      {
        id: "twilio-keywords",
        label: "Twilio Keywords",
        href: "/admin/twilio-keywords",
      },
      {
        id: "twilio-short-codes",
        label: "Twilio Short Codes",
        href: "/admin/twilio-short-codes",
      },
      {
        id: "marketing-settings",
        label: "Marketing Settings",
        href: "/admin/marketing-settings",
      },
      {
        id: "rerun-automations",
        label: "Rerun Ticket Automations",
        href: "/admin/rerun-automations",
      },
      {
        id: "bulk-decouple",
        label: "Bulk Decouple Memberships",
        href: "/admin/bulk-decouple",
      },
      {
        id: "plan-switch-batches",
        label: "Plan Switch Batches",
        href: "/admin/plan-switch-batches",
      },
    ],
  },
];
