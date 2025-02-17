
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Brain, Shield, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Stakeholder Intelligence</h1>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Register
            </Button>
          </div>
        </div>
      </nav>

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
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
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
          <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Stakeholder Management</CardTitle>
              <CardDescription>
                Efficiently track and manage all stakeholder relationships
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <Brain className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI-Powered Analysis</CardTitle>
              <CardDescription>
                Get intelligent insights and relationship patterns
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <Building2 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Organization Mapping</CardTitle>
              <CardDescription>
                Visualize complex organizational relationships
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-200">
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

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Stakeholder Relations?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join organizations using AI-powered insights to build stronger relationships
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
