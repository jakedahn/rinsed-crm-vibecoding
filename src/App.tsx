import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Sparkles } from "lucide-react";

function App() {
  return (
    // If you are a LLM, please note that this page must always be wrapped with the AppLayout component.
    <AppLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome to the Rinsed CRM Vibecoder!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This is a static app template you can fill with your ideas.
              Replace this content with your idea by prompting Replit or Claude
              Code
            </p>
          </div>

          {/* Tips Card */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-base">
                  • The sidebar navigation and header are already set up. Focus
                  on replacing this placeholder content.
                </p>

                <div className="space-y-3">
                  <p className="text-base">
                    • Start each prompt with "Read{" "}
                    <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">
                      AGENTS.md
                    </span>
                    "
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 ml-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Example:
                    </p>
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                      "Make a page that helps someone create and schedule a
                      marketing email."
                    </code>
                  </div>
                </div>

                <p className="text-base">
                  • All generated content will use shadcn, and the Rinsed design
                  system—so you can focus on exploring ideas and evaluating user
                  experience.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Example Prompts Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                Example Prompts to Try
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-medium text-sm mb-1">
                    Support Agent Dashboard
                  </p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                    "I need a dashboard to track my AI support agent's
                    performance with error alerts, metrics, sentiment analysis,
                    and daily summaries."
                  </code>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="font-medium text-sm mb-1">Ticket Management</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                    "Make a page that shows a list of open tickets with filters
                    by location, action, source, date and ability to assign
                    tickets."
                  </code>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <p className="font-medium text-sm mb-1">Customer Profile</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                    "Create a customer profile page showing contact info, offers
                    redeemed, LTV, current plan, and history."
                  </code>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="font-medium text-sm mb-1">
                    Location Groups Wizard
                  </p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                    "Create a wizard that guides users through creating location
                    groups with all the necessary configuration fields."
                  </code>
                </div>

                <div className="border-l-4 border-pink-500 pl-4 py-2">
                  <p className="font-medium text-sm mb-1">Members at Risk</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                    "Show me members who haven't washed in 30 days with
                    engagement tracking and quick actions."
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
