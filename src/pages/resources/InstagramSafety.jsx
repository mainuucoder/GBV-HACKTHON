// src/pages/resources/InstagramSafety.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const InstagramSafety = () => {
  const navigate = useNavigate();

  const safetyFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Private Account",
      description: "Control who can see your posts and stories",
      steps: [
        "Go to Settings → Privacy",
        "Toggle on 'Private Account'",
        "Approve follower requests"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Story Controls",
      description: "Manage who sees your stories and can reply",
      steps: [
        "Settings → Privacy → Story",
        "Hide story from specific people",
        "Control message replies"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comment Filters",
      description: "Block offensive comments automatically",
      steps: [
        "Settings → Privacy → Comments",
        "Enable 'Hide Offensive Comments'",
        "Add custom keyword filters"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Block & Restrict",
      description: "Manage unwanted interactions discreetly",
      steps: [
        "Go to the user's profile",
        "Tap three dots → Block/Restrict",
        "They won't know they're restricted"
      ]
    }
  ];

  const quickActions = [
    {
      action: "Report Abuse",
      description: "Report harassment, bullying, or inappropriate content",
      link: "https://help.instagram.com/contact/606967319425038"
    },
    {
      action: "Download Data",
      description: "Get a copy of your Instagram data and information",
      link: "https://help.instagram.com/181231772500920"
    },
    {
      action: "Manage Privacy",
      description: "Review and update all your privacy settings",
      link: "https://help.instagram.com/196883487377501"
    },
    {
      action: "Safety Center",
      description: "Visit Instagram's official safety resources",
      link: "https://about.instagram.com/safety"
    }
  ];

  const handleOpenGuide = (link) => {
    toast.info("Opening Instagram Guide...");
    setTimeout(() => {
      window.open(link, "_blank");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-red-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/80 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate(-1)} className="hover:bg-slate-100/80 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => navigate("/report")}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report Abuse
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-red-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                  Instagram Safety
                </h1>
                <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Comprehensive guide to protecting your privacy and safety on Instagram
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={() => handleOpenGuide("https://help.instagram.com/196883487377501")}
                    size="lg"
                    className="bg-white text-pink-600 hover:bg-pink-50 border-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Official Instagram Guide
                  </Button>
                  <Button 
                    onClick={() => navigate("/resources/social-media-safety")}
                    size="lg"
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    All Social Media Guides
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-3 text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-800">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {feature.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
              Quick Safety Actions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{action.action}</h3>
                    <p className="text-slate-600 text-sm mb-4">{action.description}</p>
                    <Button 
                      onClick={() => handleOpenGuide(action.link)}
                      size="sm"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300"
                    >
                      Take Action
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pro Tips */}
          <Card className="border-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Pro Safety Tips</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Privacy Best Practices</h4>
                  <ul className="space-y-2 text-purple-100">
                    <li>• Regularly review your followers</li>
                    <li>• Use Close Friends for personal stories</li>
                    <li>• Disable activity status</li>
                    <li>• Manage tagged photos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Content Safety</h4>
                  <ul className="space-y-2 text-purple-100">
                    <li>• Avoid location tagging in real-time</li>
                    <li>• Be mindful of background details</li>
                    <li>• Think before you post</li>
                    <li>• Use alt text for accessibility</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Section */}
          <Card className="border-0 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/20 rounded-2xl p-4 flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Experencing Harassment?</h3>
                  <p className="text-red-100 text-lg mb-6 leading-relaxed">
                    If you're facing online harassment or abuse on Instagram, we're here to help you take immediate action.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={() => handleOpenGuide("https://help.instagram.com/contact/606967319425038")}
                      size="lg"
                      className="bg-white text-red-600 hover:bg-red-50 border-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Report to Instagram
                    </Button>
                    <Button 
                      onClick={() => navigate("/report")}
                      size="lg"
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                    >
                      Get Legal Help
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InstagramSafety;