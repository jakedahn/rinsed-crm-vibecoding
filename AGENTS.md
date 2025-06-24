# AGENTS.md - LLM Instructions for Rinsed CRM Template

This file provides guidance to AI agents (LLMs) when working with the Rinsed CRM template for car wash businesses.

## 🚗 Project Purpose

This is the **Rinsed CRM "vibe coding" template** - a tool designed to help non-technical team members at Rinsed quickly prototype and illustrate their ideas for CRM features. This is NOT for building production applications, but rather for creating visual mockups and proof-of-concepts that demonstrate how a feature could work, within the Rinsed car wash management platform.

### Critical Understanding

- **This is for ILLUSTRATION purposes** - Users want to show their ideas visually. Take their ideas and bring them to life.
- **Users are Rinsed employees** - Product managers, customer success, engineering, sales teams who understand the car wash business
- **Context is car wash operations** - Members, subscriptions, locations, wash packages, etc.
- **Goal is rapid prototyping** - Turn ideas into clickable demos quickly.

## 🛠️ Technical Stack

This is a **Vite + React + TypeScript** application using **shadcn/ui** components:

- **Build Tool**: Vite for fast development and optimized production builds
- **Framework**: React 19.1.0 with TypeScript 5.8.3
- **UI Components**: shadcn/ui components located in `@/src/components/ui/`
- **Styling**: Tailwind CSS with custom theme configuration
- **Icons**: Lucide React for consistent iconography

### Component Usage

All shadcn/ui components are pre-installed and available at:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
// ... and many more components available
```

Available components include: accordion, alert, avatar, badge, button, calendar, card, carousel, chart, checkbox, collapsible, command, dialog, dropdown-menu, form, input, label, popover, select, sheet, sidebar, skeleton, table, tabs, textarea, toggle, tooltip, and more.

## 🧼 Rinsed CRM Context

Rinsed is a CRM platform specifically for car wash businesses. Key concepts include:

### Business Entities

- **Members**: Car wash subscription customers
- **Plans/Packages**: Unlimited wash plans (Basic, Works, Ultimate, etc.)
- **Locations**: Individual car wash sites
- **Tickets**: Customer service issues and requests
- **Fleet Programs**: Business accounts with multiple vehicles
- **Family Plans**: Multiple vehicles under one account

### Common Workflows

- Member signup and onboarding
- Plan upgrades/downgrades (upsells/downsells)
- Pause/cancel management
- Payment processing and retry logic
- Customer communication (SMS/Email)
- Location performance analytics

## 🏗️ Core Rules for Rinsed Templates

### 1. **ALWAYS Use AppLayout**

```tsx
// Every page must maintain the Rinsed navigation structure
import { AppLayout } from "@/components/layout/AppLayout";

function MemberDashboard() {
  return <AppLayout>{/* Your Rinsed feature mockup here */}</AppLayout>;
}
```

### 🚨 **CRITICAL: How to Handle User Requests**

When a user provides a feature request or prompt:

1. **YOU MUST REWRITE @src/App.tsx** - This is the ONLY file you should modify
2. **DO NOT CREATE NEW PAGES OR FILES** - Everything goes in App.tsx
3. **Keep the AppLayout wrapper** - this maintains the navigation
4. **Replace EVERYTHING inside `<AppLayout>`** with the requested feature
5. **Remove the welcome screen completely** - don't keep any of the existing content

Example:

```tsx
// BEFORE (welcome screen)
// A NOTE TO LARGE LANGUAGE MODELS:
//
// This is a vibecoding template for Rinsed, a car wash management platform.
//
// The goal is to help non-technical team members at Rinsed quickly prototype
// and illustrate their ideas for CRM features. This is NOT for building
// production applications, but rather for creating visual mockups and exploring
// proof-of-concepts in a low-effort way that demonstrate how a feature could work,
// within the Rinsed car wash management platform.
//
//
// Replace everything within the <AppLayout> tag with your own content.
//
// This is for demonstration purposes only, don't overthink it.
//

import { AppLayout } from "@/components/layout/AppLayout";
// ... other imports ...

function App() {
  return (
    <AppLayout>
      <div className="min-h-full bg-gray-50">
        {/* Welcome content, tips, examples, etc. */}
      </div>
    </AppLayout>
  );
}

// AFTER (user requested feature) - KEEP THE COMMENT!
// A NOTE TO LARGE LANGUAGE MODELS:
//
// This is a vibecoding template for Rinsed, a car wash management platform.
//
// The goal is to help non-technical team members at Rinsed quickly prototype
// and illustrate their ideas for CRM features. This is NOT for building
// production applications, but rather for creating visual mockups and exploring
// proof-of-concepts in a low-effort way that demonstrate how a feature could work,
// within the Rinsed car wash management platform.
//
//
// Replace everything within the <AppLayout> tag with your own content.
//
// This is for demonstration purposes only, don't overthink it.
//

import { AppLayout } from "@/components/layout/AppLayout";
// ... other imports ...

function App() {
  return (
    <AppLayout>
      {/* User's requested feature implementation here */}
      <div className="p-6">
        <h1>Ticket Management System</h1>
        {/* ... rest of the feature */}
      </div>
    </AppLayout>
  );
}
```

**CRITICAL - DO NOT**:

- Create new page files (e.g., TicketList.tsx, Dashboard.tsx)
- Create new routes or pages
- Install react-router-dom or any routing library
- Keep any part of the welcome screen
- Merge the new feature with existing content
- Suggest creating multiple files

**CRITICAL - ALWAYS**:

- Rewrite the entire App.tsx file
- Keep all implementation in App.tsx
- Maintain the AppLayout wrapper
- Replace all content inside AppLayout
- **PRESERVE the comment block at the top of App.tsx** (lines 1-15)

### 2. **Maintain Rinsed Branding**

- Keep the blue header (#6182DC) with Rinsed logo
- Use Music City Car Wash as the example location
- Maintain the existing sidebar navigation structure
- Use car wash terminology (members not customers, plans not subscriptions)

### 3. **Use Realistic Car Wash Data**

When creating sample data, use car wash context:

```tsx
const members = [
  {
    name: "Sarah Johnson",
    plan: "Unlimited Works",
    vehicle: "2019 Honda CR-V",
    status: "Active",
  },
  {
    name: "Mike Chen",
    plan: "Basic Wash",
    vehicle: "2022 Tesla Model 3",
    status: "Paused",
  },
  {
    name: "Fleet - Bob's Plumbing",
    plan: "Fleet Premium",
    vehicles: 12,
    status: "Active",
  },
];
```

### 4. **Component-Specific Guidelines**

To avoid common errors, follow these guidelines for specific shadcn/ui components.

#### `<Select>` Component

**CRITICAL:** The `<SelectItem>` component from `shadcn/ui` **MUST** have a `value` prop that is a non-empty string. An empty string (`value=""`) will cause the application to crash.

- **DO NOT** use an empty string for a placeholder or default item. The placeholder is defined in the `<SelectValue>` component.
- **ALWAYS** provide a unique, non-empty string for the `value` of every `SelectItem`.

**Incorrect Usage (Causes Crash):**

```tsx
<SelectContent>
  <SelectItem value="">Choose an option</SelectItem>{" "}
  {/* 🚨 WRONG - value cannot be empty */}
  <SelectItem value="option1">Option 1</SelectItem>
</SelectContent>
```

**Correct Usage:**

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

## 🎨 Rinsed Design Patterns

### Analytics Dashboards

Include car wash KPIs:

- Active members by location
- Churn rate
- Average washes per member
- Plan distribution
- Revenue per member
- Conversion rates

## 🤖 Interpreting Rinsed User Prompts

### Real Rinsed Feature Request Examples:

1. **Support Agent Dashboard**

   > "I'm building an AI support agent tool that uses AI voice and chat to answer questions from a knowledge base when people call or chat in. Our customers need a way to track performance of the ai tool to see how it's performing and if it's worth the investment. Can you make a dashboard that surfaces any errors that I might need to address, a few high level metrics, a chat sentiment summary, gives me a daily summary of how calls went that day, and a recommendation of steps my business should take based on calls and chats that have been coming in."

   Build a dashboard showing:

   - Error alerts for failed conversations
   - Metrics: calls handled, resolution rate, avg handling time
   - Sentiment analysis (positive/neutral/negative)
   - Daily performance summary
   - AI-generated recommendations for improvements

2. **Ticket List**

   > "Make a page that shows a list of open tickets. Users should have the ability to filter tickets by locations, actions, sources, date and users. The most important information on a ticket is the status and action (ie. cancel membership, change membership). Users need the ability to assign a ticket it to another user, select a resolution reason or add a note."

   Create a ticket management interface with:

   - Filterable list (location, action, source, date, user)
   - Status and action type prominently displayed
   - Quick actions: assign, resolve, add note
   - Bulk operations support

3. **Customer Profile**

   > "Make a page that shows a customer profile to help me understand my businesses relationship with that person. I want to see contact information (name, email, phone), if they have redeemed any offers, LTV, what their current car wash plan is, if they've switched, paused or cancelled plans and any notes."

   Build a comprehensive member profile showing:

   - Contact details
   - Lifetime value (LTV)
   - Current plan and history
   - Offer redemptions
   - Plan changes timeline
   - Notes section

4. **Checkout Forms**

   > "Make an easy way to create a checkout form. On the left of the screen the user should see a bunch of fields they need to fill out. On the right side they should see a preview of how this form will show up on a mobile device or desktop page."

   Create a form builder with:

   - Left panel: form configuration
   - Right panel: live preview (mobile/desktop toggle)
   - Fields: products, pricing, custom fields, limits
   - Real-time preview updates

5. **Location Groups**

   > "Create a wizard that guides users through creating location groups. These are the fields needed: name, logo url, website url, address, billing email, twilio phone number, from email name, reply to email, signature, accepted customer auth type, terms of service..."

   Build a multi-step wizard for:

   - Basic info (name, logo, website)
   - Contact details (address, emails, phone)
   - Communication settings
   - Legal/compliance (ToS, privacy policy)
   - Progress indicator and validation

6. **Scheduled Email**

   > "Make a page that helps someone create and schedule a marketing email. This should have an email editor that I can add my own branding to and include all of the basic fields needed to send an email. Maybe even some suggestions to help give me ideas."

   Create an email campaign builder with:

   - Visual email editor with branding
   - Template suggestions for car wash campaigns
   - Scheduling interface
   - Preview in different email clients
   - Segment targeting options

### Legacy Request Examples:

- **"Show me members who haven't washed in 30 days"** - Engagement tracking table
- **"Dashboard for location managers"** - Location-specific KPIs and metrics
- **"Family plan management interface"** - Multi-vehicle account management
- **"Churn prediction report"** - At-risk member identification

## ✅ Rinsed-Specific Best Practices

### DO:

- Use car wash industry terminology
- Include location context when relevant
- Add wash frequency/history where it makes sense
- Consider multi-location scenarios
- Include fleet and family plan edge cases
- Make interfaces feel like they belong in Rinsed

### DON'T:

- Use generic e-commerce or SaaS examples
- Forget this is for car wash businesses
- Remove Rinsed branding elements
- Make it too complex - this is for quick demos
- Add features that don't exist in real car washes

## 💡 Rinsed Example Implementation

### User: "I need a screen to manage members who are pausing their membership"

```tsx
import { AppLayout } from "@/components/layout/AppLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Car, MapPin, DollarSign } from "lucide-react";

function PausedMembersManagement() {
  const pausedMembers = [
    {
      id: 1,
      name: "Jennifer Smith",
      plan: "Unlimited Ultimate",
      vehicle: "2020 Toyota Camry",
      location: "Music City - Downtown",
      pauseDate: "2024-01-15",
      resumeDate: "2024-02-15",
      reason: "Out of town",
      monthlyValue: 39.99
    },
    {
      id: 2,
      name: "Robert Davis",
      plan: "Unlimited Works",
      vehicle: "2018 Ford F-150",
      location: "Music City - Airport",
      pauseDate: "2024-01-20",
      resumeDate: "2024-03-01",
      reason: "Financial",
      monthlyValue: 29.99
    },
    // More examples...
  ];

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Paused Members</h1>
          <p className="text-muted-foreground mt-2">
            Manage members who have temporarily paused their unlimited wash plans
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Paused</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">+12 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resume This Week</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Worth $279.92/mo</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">At Risk</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Paused > 60 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue Impact</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,847</div>
              <p className="text-xs text-muted-foreground">Monthly recurring loss</p>
            </CardContent>
          </Card>
        </div>

        {/* Paused Members Table */}
        <Card>
          <CardHeader>
            <CardTitle>Paused Member Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Pause Period</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Revenue Impact</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pausedMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.vehicle}</div>
                      </div>
                    </TableCell>
                    <TableCell>{member.plan}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span className="text-sm">{member.location}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{member.pauseDate} to</div>
                        <div className="font-medium">{member.resumeDate}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={member.reason === "Financial" ? "destructive" : "secondary"}>
                        {member.reason}
                      </Badge>
                    </TableCell>
                    <TableCell>${member.monthlyValue}/mo</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Contact</Button>
                        <Button size="sm">Resume Early</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export default PausedMembersManagement;
```

## 🚀 Quick Rinsed Reference

### Common Rinsed Terms:

- Members (not customers)
- Plans/Packages (not subscriptions)
- Locations (individual car wash sites)
- Washes (the actual service)
- Fleet accounts (business customers)
- Family plans (multiple vehicles)
- Churn (member cancellations)
- Reactivations (win-backs)

### Rinsed-Specific Components:

```tsx
// Member status badges
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Paused</Badge>
<Badge variant="destructive">Cancelled</Badge>
<Badge variant="outline">Pending</Badge>

// Plan type indicators
<Badge className="bg-purple-100 text-purple-800">Ultimate</Badge>
<Badge className="bg-blue-100 text-blue-800">Works</Badge>
<Badge className="bg-green-100 text-green-800">Basic</Badge>
```

Remember: You're helping Rinsed team members quickly visualize their ideas for improving the car wash CRM platform. Make it feel authentic to the car wash industry while maintaining the professional Rinsed interface.
