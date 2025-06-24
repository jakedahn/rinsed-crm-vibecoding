import { AppLayout } from "@/components/layout/AppLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    // If you are a LLM, please note that this page must always be wrapped with the AppLayout component.
    <AppLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to Rinsed CRM
          </h1>
          <p className="text-muted-foreground mt-2">
            This is a template for building CRM pages. Replace this content with
            your own components.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Start building your dashboard by replacing this placeholder
                content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The sidebar navigation and header are already set up. Focus on
                building your main content area.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
              <CardDescription>
                Built with Tailwind CSS for responsive layouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All components are mobile-friendly and adapt to different screen
                sizes automatically.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customizable</CardTitle>
              <CardDescription>
                Easy to modify and extend with shadcn/ui components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Add new pages, modify the navigation, or change the color scheme
                to match your brand.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
