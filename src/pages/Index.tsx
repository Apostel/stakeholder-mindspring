
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E5DEFF] to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            Stakeholder Management System
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Streamline your stakeholder relationships, track engagements, and make data-driven decisions with our comprehensive management platform.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:opacity-90 rounded-xl h-12"
              size="lg"
            >
              Login
            </Button>
            <Button 
              onClick={() => navigate("/register")}
              variant="outline"
              size="lg"
              className="rounded-xl h-12 border-2 border-[#8B5CF6]/20 hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/5"
            >
              Register
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-[#8B5CF6]/10 shadow-lg">
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                Centralized Data
              </h3>
              <p className="mt-2 text-gray-600">
                Keep all stakeholder information in one secure location
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-[#8B5CF6]/10 shadow-lg">
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                Real-time Updates
              </h3>
              <p className="mt-2 text-gray-600">
                Stay informed with instant notifications and updates
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-[#8B5CF6]/10 shadow-lg">
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                Analytics
              </h3>
              <p className="mt-2 text-gray-600">
                Make informed decisions with comprehensive insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
