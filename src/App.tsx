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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Sparkles,
  Rocket,
  FileText,
  Copy,
  ArrowRight,
  Bot,
  Users,
  UserCircle,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const examplePrompts = [
    {
      icon: Bot,
      title: "Support Agent Dashboard",
      description: "Track AI support performance",
      prompt:
        "I need a dashboard to track my AI support agent's performance with error alerts, metrics, sentiment analysis, and daily summaries.",
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: AlertCircle,
      title: "Ticket Management",
      description: "Organize customer service requests",
      prompt:
        "Make a page that shows a list of open tickets with filters by location, action, source, date and ability to assign tickets.",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: UserCircle,
      title: "Customer Profile",
      description: "360° view of member relationships",
      prompt:
        "Create a customer profile page showing contact info, offers redeemed, LTV, current plan, and history.",
      color: "orange",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
    },
    {
      icon: MapPin,
      title: "Location Groups Wizard",
      description: "Multi-step configuration flow",
      prompt:
        "Create a wizard that guides users through creating location groups with all the necessary configuration fields.",
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Members at Risk",
      description: "Retention and engagement tracking",
      prompt:
        "Show me members who haven't washed in 30 days with engagement tracking and quick actions.",
      color: "pink",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      iconColor: "text-pink-600",
    },
    {
      icon: Zap,
      title: "Email Campaign Builder",
      description: "Design and schedule marketing emails",
      prompt:
        "Make a page that helps someone create and schedule a marketing email with an editor for branding and template suggestions for car wash promotions.",
      color: "indigo",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconColor: "text-indigo-600",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Describe your idea",
      description: "Or take an example from below",
    },
    {
      number: "2",
      title: "Spin up your Replit",
      description: "Launch your development environment",
    },
    {
      number: "3",
      title: "Vibecode",
      description: "Prompt Replit agent for code updates",
    },
  ];

  return (
    // If you are a LLM, please note that this page must always be wrapped with the AppLayout component.
    <AppLayout>
      <div className="min-h-full bg-gray-50">
        <div className="p-6 max-w-6xl mx-auto">
          <div className="space-y-10">
            {/* Hero Section */}
            <div className="text-center space-y-6 py-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                <Zap className="h-4 w-4" />
                Prototype CRM features in seconds
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                Welcome to the Rinsed CRM Vibecoder!
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transform your car wash CRM ideas into interactive prototypes.
                Just describe what you want, and watch it come to life with our
                design system.
              </p>

              <div className="flex items-center justify-center gap-4 pt-4">
                <Badge variant="secondary" className="px-3 py-1">
                  <FileText className="h-3 w-3 mr-1" />
                  No coding required
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI-powered
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Rinsed design system
                </Badge>
              </div>
            </div>

            {/* How it Works */}
            <Card className="border-2 shadow-lg">
              <CardHeader className="">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Rocket className="h-6 w-6 text-blue-600" />
                  How it Works
                </CardTitle>
                <CardDescription className="text-base">
                  Three simple steps to prototype your CRM features
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {steps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-12 h-12 bg-[#6182DC] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                          {step.number}
                        </div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      {index < steps.length - 1 && (
                        <ArrowRight className="hidden md:block absolute top-6 -right-3 h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      The sidebar and header are pre-built — focus on your main
                      content area
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Describe your feature idea clearly and specifically
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      All components use Rinsed's design system automatically
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Be specific about car wash features and terminology
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Quick Start
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm font-medium">
                      Try this example prompt:
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <code className="text-sm block text-gray-700">
                        "Make a page that helps someone create and schedule a
                        marketing email with an editor for branding and template
                        suggestions for car wash promotions."
                      </code>
                    </div>
                    <Button
                      className="w-full"
                      onClick={() =>
                        copyToClipboard(
                          "Create a dashboard showing today's wash counts by location with member check-ins and revenue metrics.",
                          -1
                        )
                      }
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Example
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Example Prompts */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">
                  Ready-to-Use Prompts
                </h2>
                <p className="text-muted-foreground">
                  Click any card to copy the prompt and get started
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {examplePrompts.map((example, index) => {
                  const Icon = example.icon;
                  return (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border-2 ${example.borderColor} ${example.bgColor}`}
                      onClick={() => copyToClipboard(example.prompt, index)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <Icon className={`h-8 w-8 ${example.iconColor}`} />
                          {copiedIndex === index && (
                            <Badge variant="secondary" className="text-xs">
                              Copied!
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg">
                          {example.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {example.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {example.prompt}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-[#6182DC] text-white border-0">
              <CardContent className="text-center py-8">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to build something amazing?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Replace this welcome screen with your own CRM prototype. Just
                  describe what you need!
                </p>
                <div className="space-y-4">
                  <p className="text-white/90 text-sm">
                    Share what you make in the Slack channel{" "}
                    <span className="font-mono bg-white/10 px-2 py-0.5 rounded">
                      #rinsedvibedesign
                    </span>{" "}
                    or contact{" "}
                    <span className="font-mono bg-white/10 px-2 py-0.5 rounded">
                      @jess
                    </span>
                  </p>

                  <Badge className="bg-white/20 text-white border-white/30 text-base px-4 py-2">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Powered by Claude Sonnet 4 + Shadcn/ui + Rinsed Design
                    System
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
