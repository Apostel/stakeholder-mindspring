
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-black">
            I³ for Corporate Affairs
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Insights, Intelligence, and Influence OS - A powerful stakeholder management platform for Corporate Affairs professionals and Board Executives.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              onClick={() => navigate("/login")}
              className="bg-black hover:bg-gray-800 rounded-xl h-12"
              size="lg"
            >
              Login
            </Button>
            <Button 
              onClick={() => navigate("/register")}
              variant="outline"
              size="lg"
              className="rounded-xl h-12 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              Register
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center p-6 rounded-2xl bg-white border-2 border-gray-100 shadow-lg">
              <h3 className="mt-2 text-xl font-semibold text-black">
                Stakeholder Intelligence
              </h3>
              <p className="mt-2 text-gray-600">
                Monitor and analyze key stakeholders with comprehensive profiles and influence metrics
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border-2 border-gray-100 shadow-lg">
              <h3 className="mt-2 text-xl font-semibold text-black">
                Influence Networks
              </h3>
              <p className="mt-2 text-gray-600">
                Visualize stakeholder relationships and decision points to understand influence flows
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border-2 border-gray-100 shadow-lg">
              <h3 className="mt-2 text-xl font-semibold text-black">
                Strategic Communication
              </h3>
              <p className="mt-2 text-gray-600">
                Generate targeted messaging based on narrative tracking and campaign insights
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-24 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">Stakeholder Intelligence Engine</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Comprehensive stakeholder profiles with influence metrics</li>
                <li>Real-time monitoring of stakeholder activities</li>
                <li>Relationship mapping and evidence tracking</li>
                <li>LLM-powered entity extraction from multiple sources</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">Network Visualization</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Interactive influence network graphs</li>
                <li>Multi-level visualization with temporal analysis</li>
                <li>Decision point calendar and impact assessment</li>
                <li>Advanced filters for network analysis</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">Narrative & Campaign Tracking</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Real-time narrative identification and monitoring</li>
                <li>Campaign detection across multiple channels</li>
                <li>Audience segment analysis and targeting</li>
                <li>Regulatory framework impact analysis</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">Strategic Communication Generator</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Multi-format communication templates</li>
                <li>Audience-targeted messaging</li>
                <li>Decision point response planning</li>
                <li>Campaign effectiveness analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
