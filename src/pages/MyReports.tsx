import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, Calendar, Search, Filter, ArrowLeft, Eye, Download, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Report {
  id: string;
  incident_type: string;
  description: string;
  platform: string;
  date: string;
  status: 'submitted' | 'under_review' | 'resolved' | 'action_required';
  created_at: string;
  anonymous: boolean;
}

const MyReports = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetchUserReports();
  }, []);

  const fetchUserReports = async () => {
    try {
      // In a real app, you would fetch from your Supabase reports table
      // For now, we'll use mock data
      const mockReports: Report[] = [
        {
          id: "1",
          incident_type: "cyberbullying",
          description: "Received threatening messages on social media platform",
          platform: "Facebook",
          date: "2024-01-15",
          status: "under_review",
          created_at: "2024-01-15T10:30:00Z",
          anonymous: true
        },
        {
          id: "2",
          incident_type: "harassment",
          description: "Continuous unwanted messages from unknown account",
          platform: "Instagram",
          date: "2024-01-10",
          status: "submitted",
          created_at: "2024-01-10T14:20:00Z",
          anonymous: false
        },
        {
          id: "3",
          incident_type: "impersonation",
          description: "Someone created fake profile using my photos",
          platform: "Twitter",
          date: "2024-01-05",
          status: "resolved",
          created_at: "2024-01-05T09:15:00Z",
          anonymous: true
        },
        {
          id: "4",
          incident_type: "doxxing",
          description: "Personal information shared without consent",
          platform: "WhatsApp",
          date: "2024-01-02",
          status: "action_required",
          created_at: "2024-01-02T16:45:00Z",
          anonymous: false
        }
      ];

      setReports(mockReports);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'under_review':
        return <Eye className="w-4 h-4 text-amber-500" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'action_required':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'submitted':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">Submitted</Badge>;
      case 'under_review':
        return <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">Under Review</Badge>;
      case 'resolved':
        return <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">Resolved</Badge>;
      case 'action_required':
        return <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-200">Action Required</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getIncidentTypeDisplay = (type: string) => {
    const typeMap: { [key: string]: string } = {
      cyberbullying: "Cyberbullying",
      harassment: "Harassment",
      doxxing: "Doxxing",
      threats: "Threats or Blackmail",
      impersonation: "Impersonation",
      "image-abuse": "Image-based Abuse",
      other: "Other"
    };
    return typeMap[type] || type;
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         getIncidentTypeDisplay(report.incident_type).toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || report.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleViewReport = (reportId: string) => {
    navigate(`/reports/${reportId}`);
  };

  const handleDownloadReport = (report: Report) => {
    // In a real app, this would generate and download a PDF
    console.log("Downloading report:", report.id);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-12 h-12 text-primary animate-pulse mx-auto mb-4" />
          <p className="text-muted-foreground">Loading your reports...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate(-1)} className="hover:bg-slate-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold text-slate-800">My Reports</h1>
              </div>
            </div>
            <Button onClick={() => navigate("/report")}>
              <Shield className="w-4 h-4 mr-2" />
              New Report
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-slate-800">{reports.length}</div>
                <div className="text-sm text-slate-600">Total Reports</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {reports.filter(r => r.status === 'resolved').length}
                </div>
                <div className="text-sm text-slate-600">Resolved</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-amber-600">
                  {reports.filter(r => r.status === 'under_review').length}
                </div>
                <div className="text-sm text-slate-600">In Progress</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {reports.filter(r => r.status === 'submitted').length}
                </div>
                <div className="text-sm text-slate-600">Submitted</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                  <Input
                    placeholder="Search reports..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="w-full sm:w-48">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="submitted">Submitted</SelectItem>
                      <SelectItem value="under_review">Under Review</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="action_required">Action Required</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reports List */}
          {filteredReports.length === 0 ? (
            <Card className="bg-white/80 backdrop-blur-sm border-0 text-center py-12">
              <CardContent>
                <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-600 mb-2">
                  {reports.length === 0 ? "No Reports Yet" : "No Matching Reports"}
                </h3>
                <p className="text-slate-500 mb-4">
                  {reports.length === 0 
                    ? "You haven't submitted any reports yet. Your first report helps us keep you safe."
                    : "Try adjusting your search or filter criteria."
                  }
                </p>
                {reports.length === 0 && (
                  <Button onClick={() => navigate("/report")}>
                    <Shield className="w-4 h-4 mr-2" />
                    Submit Your First Report
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredReports.map((report) => (
                <Card key={report.id} className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(report.status)}
                            <h3 className="font-semibold text-slate-800">
                              {getIncidentTypeDisplay(report.incident_type)}
                            </h3>
                            {getStatusBadge(report.status)}
                          </div>
                          <Badge variant="outline" className={report.anonymous ? "bg-blue-50 text-blue-700" : ""}>
                            {report.anonymous ? "Anonymous" : "Identified"}
                          </Badge>
                        </div>
                        
                        <p className="text-slate-600 text-sm line-clamp-2">
                          {report.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(report.date).toLocaleDateString()}
                          </div>
                          <div>Platform: {report.platform}</div>
                          <div>
                            Submitted: {new Date(report.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 lg:flex-col">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewReport(report.id)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDownloadReport(report)}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Support Information */}
          <Card className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Need Help With Your Report?</h3>
                  <p className="text-blue-100 text-sm">
                    Our support team is here to assist you with any questions about your reports or the process.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="secondary" 
                    className="bg-white text-blue-600 hover:bg-blue-50"
                    onClick={() => navigate("/resources")}
                  >
                    Get Help
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => navigate("/community")}
                  >
                    Community Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MyReports;