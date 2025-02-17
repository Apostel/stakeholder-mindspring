
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Brain, Shield, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f9ff] to-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-[#e2e8f0]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-[#334155]">Stakeholder Intelligence</h1>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              className="text-[#475569] hover:text-[#334155] hover:bg-[#f1f5f9]"
            >
              Login
            </Button>
            <Button 
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white transition-colors duration-150"
            >
              Register
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[#334155] sm:text-5xl mb-8">
            Stakeholder Intelligence System
          </h1>
          <p className="text-xl text-[#475569] mb-10 leading-relaxed">
            Transform your stakeholder relationships with AI-powered insights and real-time analytics
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white gap-2 px-8 py-6 text-lg transition-colors duration-150"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#cbd5e1] text-[#475569] hover:bg-[#f1f5f9] px-8 py-6 text-lg transition-colors duration-150"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8 text-[#0ea5e9]" />,
              title: "Stakeholder Management",
              description: "Efficiently track and manage all stakeholder relationships"
            },
            {
              icon: <Brain className="h-8 w-8 text-[#0ea5e9]" />,
              title: "AI-Powered Analysis",
              description: "Get intelligent insights and relationship patterns"
            },
            {
              icon: <Building2 className="h-8 w-8 text-[#0ea5e9]" />,
              title: "Organization Mapping",
              description: "Visualize complex organizational relationships"
            },
            {
              icon: <Shield className="h-8 w-8 text-[#0ea5e9]" />,
              title: "Secure Platform",
              description: "Enterprise-grade security and real-time updates"
            }
          ].map((feature, index) => (
            <Card key={index} className="border-[#e2e8f0] hover:shadow-lg transition-all duration-250 ease-in-out">
              <CardHeader>
                {feature.icon}
                <CardTitle className="text-[#334155]">{feature.title}</CardTitle>
                <CardDescription className="text-[#64748b]">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-[#f0f9ff] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#334155]">
            Ready to Transform Your Stakeholder Relations?
          </h2>
          <p className="text-lg text-[#475569] mb-8 max-w-2xl mx-auto leading-relaxed">
            Join organizations using AI-powered insights to build stronger relationships
          </p>
          <Button 
            size="lg"
            className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-6 text-lg transition-colors duration-150"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
