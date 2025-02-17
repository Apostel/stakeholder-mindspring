
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Brain, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Stakeholder Intelligence System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your stakeholder relationships with AI-powered insights and real-time analytics
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-gray-200">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Stakeholder Management</CardTitle>
              <CardDescription>
                Efficiently track and manage all stakeholder relationships
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <Brain className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI-Powered Analysis</CardTitle>
              <CardDescription>
                Get intelligent insights and relationship patterns
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <Building2 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Organization Mapping</CardTitle>
              <CardDescription>
                Visualize complex organizational relationships
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Secure Platform</CardTitle>
              <CardDescription>
                Enterprise-grade security and real-time updates
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
