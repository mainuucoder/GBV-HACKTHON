import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertCircle, Users, BookOpen, LogOut, ChevronRight, Bell, Calendar, FileText } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        navigate("/auth");
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          </motion.div>
          <p className="text-muted-foreground text-lg">Securing your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Safeguard Africa</h1>
              <p className="text-xs text-slate-500">Safety Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="hidden sm:flex">
              <Bell className="w-3 h-3 mr-1" />
              Protected
            </Badge>
            <Button variant="outline" onClick={handleSignOut} className="border-slate-300">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 text-white">
            <h2 className="text-3xl font-bold mb-2">Welcome Back! 👋</h2>
            <p className="text-blue-100 text-lg">{user?.email}</p>
            <div className="flex gap-2 mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                <Calendar className="w-3 h-3 mr-1" />
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                Secure Session
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {[
            {
              icon: AlertCircle,
              title: "Report Incident",
              description: "Submit a new report securely",
              color: "text-red-500",
              bgColor: "bg-red-50",
              onClick: () => navigate("/report")
            },
            {
              icon: Users,
              title: "Community",
              description: "Join safe discussions",
              color: "text-blue-500",
              bgColor: "bg-blue-50",
              onClick: () => navigate("/community")
            },
            {
              icon: BookOpen,
              title: "Resources",
              description: "Safety guides & tools",
              color: "text-green-500",
              bgColor: "bg-green-50",
              onClick: () => navigate("/resources")
            },
            {
              icon: FileText,
              title: "My Reports",
              description: "View your submissions",
              color: "text-purple-500",
              bgColor: "bg-purple-50",
              onClick: () => navigate("/my-reports")
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 * index }}
            >
              <Card 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm group hover:scale-105"
                onClick={item.onClick}
              >
                <CardHeader className="pb-3">
                  <div className={`p-3 rounded-xl w-fit ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-800 group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-primary text-sm font-medium">
                    Access now
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats & Dashboard Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <FileText className="w-5 h-5 text-primary" />
                  Your Safety Dashboard
                </CardTitle>
                <CardDescription>
                  Overview of your activity and available resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Quick Safety Tips</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Always verify links before clicking</li>
                      <li>• Use strong, unique passwords</li>
                      <li>• Enable two-factor authentication</li>
                      <li>• Be cautious with personal information</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Your personalized safety dashboard will display your reports, community activity, 
                    and recommended resources. Stay safe and empowered!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-0 bg-gradient-to-b from-primary to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Emergency Resources
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Immediate help when you need it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                    Emergency Helpline
                  </Button>
                  <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                    Legal Assistance
                  </Button>
                  <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                    Mental Health Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;