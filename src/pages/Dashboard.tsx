import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, TrendingUp, Calendar, MessageSquare, FileText, Briefcase } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Sample data - in a real app this would come from an API
  const stakeholders = [
    { name: "John Smith", organization: "Regulatory Agency", role: "Director", priority: "High" },
    { name: "Jane Doe", organization: "Media Corp", role: "Editor", priority: "Medium" },
    { name: "Michael Johnson", organization: "Industry Association", role: "President", priority: "High" },
  ];
  
  const upcomingDecisions = [
    { title: "Regulatory Filing Deadline", date: "2025-06-02", importance: "High" },
    { title: "Board Meeting", date: "2025-06-15", importance: "Medium" },
    { title: "Industry Conference", date: "2025-06-22", importance: "Medium" },
  ];
  
  const activeNarratives = [
    { title: "Sustainability Initiative", sentiment: "Positive", momentum: "Rising" },
    { title: "Market Competition", sentiment: "Neutral", momentum: "Stable" },
    { title: "Regulatory Compliance", sentiment: "Mixed", momentum: "Fluctuating" },
  ];

  const influenceData = [
    { name: 'Regulators', value: 35 },
    { name: 'Media', value: 25 },
    { name: 'Industry', value: 20 },
    { name: 'Public', value: 15 },
    { name: 'Other', value: 5 },
  ];

  const sentimentData = [
    { name: 'Jan', positive: 20, negative: 5, neutral: 10 },
    { name: 'Feb', positive: 25, negative: 8, neutral: 12 },
    { name: 'Mar', positive: 22, negative: 12, neutral: 8 },
    { name: 'Apr', positive: 30, negative: 10, neutral: 5 },
    { name: 'May', positive: 27, negative: 15, neutral: 8 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A569BD'];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Executive Dashboard</h1>
          <div>
            <Button variant="outline" className="mr-2">Help</Button>
            <Button>New Stakeholder</Button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Stakeholders</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">182</div>
              <p className="text-xs text-muted-foreground">+6 new this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Narratives</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">3 with high momentum</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Decisions</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">2 high priority</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">1 launching soon</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ChartContainer config={{}} className="w-full h-full">
                <BarChart data={sentimentData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="positive" stackId="a" fill="#22c55e" />
                  <Bar dataKey="neutral" stackId="a" fill="#94a3b8" />
                  <Bar dataKey="negative" stackId="a" fill="#ef4444" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Stakeholder Influence</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ChartContainer config={{}} className="w-full h-full">
                <PieChart>
                  <Pie
                    data={influenceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {influenceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Priority Stakeholders</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stakeholders.map((stakeholder, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{stakeholder.name}</p>
                      <p className="text-sm text-muted-foreground">{stakeholder.organization} · {stakeholder.role}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      stakeholder.priority === "High" 
                        ? "bg-red-100 text-red-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {stakeholder.priority}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4" size="sm" onClick={() => navigate("/stakeholders")}>
                View All Stakeholders
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Upcoming Decision Points</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDecisions.map((decision, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{decision.title}</p>
                      <p className="text-sm text-muted-foreground">{new Date(decision.date).toLocaleDateString()}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      decision.importance === "High" 
                        ? "bg-red-100 text-red-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {decision.importance}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4" size="sm" onClick={() => navigate("/decision-points")}>
                View Calendar
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Active Narratives</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeNarratives.map((narrative, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{narrative.title}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          narrative.sentiment === "Positive" 
                            ? "bg-green-100 text-green-800" 
                            : narrative.sentiment === "Negative"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                        }`}>
                          {narrative.sentiment}
                        </span>
                        <span className="text-xs text-muted-foreground">{narrative.momentum}</span>
                      </div>
                    </div>
                    <TrendingUp className={`h-4 w-4 ${
                      narrative.momentum === "Rising" 
                        ? "text-green-600" 
                        : narrative.momentum === "Falling"
                          ? "text-red-600"
                          : "text-gray-600"
                    }`} />
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4" size="sm" onClick={() => navigate("/narratives")}>
                View All Narratives
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
