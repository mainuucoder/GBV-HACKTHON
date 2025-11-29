// src/pages/resources/SocialMediaSafety.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SocialMediaSafety = () => {
  const navigate = useNavigate();

  const platformGuides = [
    {
      name: "Facebook",
      icon: "🔵",
      steps: [
        "Go to Settings & Privacy → Settings",
        "Click 'Privacy' in left sidebar",
        "Set future posts to 'Friends'",
        "Review tagged posts settings",
        "Enable two-factor authentication"
      ],
      action: () => window.open("https://www.facebook.com/help/325807937506242", "_blank")
    },
    {
      name: "Instagram",
      icon: "🌈",
      steps: [
        "Set account to private",
        "Manage comment filters",
        "Control story viewers",
        "Use Close Friends feature",
        "Block unwanted accounts"
      ],
      action: () => window.open("https://help.instagram.com/196883487377501", "_blank")
    },
    {
      name: "Twitter/X",
      icon: "🐦",
      steps: [
        "Protect your tweets",
        "Filter notifications",
        "Manage photo tagging",
        "Block and mute accounts",
        "Review privacy settings"
      ],
      action: () => window.open("https://help.twitter.com/en/safety-and-security", "_blank")
    },
    {
      name: "TikTok",
      icon: "🎵",
      steps: [
        "Set account to private",
        "Manage duet and stitch settings",
        "Filter comments",
        "Control direct messages",
        "Use Family Safety Mode"
      ],
      action: () => window.open("https://support.tiktok.com/en/safety-hc", "_blank")
    }
  ];

  const safetyTips = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Strong Privacy Settings",
      description: "Always set your accounts to private and review settings monthly"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Be Selective",
      description: "Only accept follow requests from people you know in real life"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Location Awareness",
      description: "Disable location sharing and avoid posting real-time locations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personal Information",
      description: "Never share sensitive information like address, phone number, or routine"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Social Media Safety
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Protect your digital presence and maintain control over your online identity across all social platforms
                </p>
              </div>
            </div>
          </div>

          {/* Platform Guides */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {platformGuides.map((platform, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{platform.icon}</div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-800">
                        {platform.name}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        Privacy & Safety Guide
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {platform.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={platform.action}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                  >
                    Open Official Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Safety Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
              Essential Safety Practices
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyTips.map((tip, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {tip.icon}
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">{tip.title}</h3>
                    <p className="text-slate-600 text-sm">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Emergency Section */}
          <Card className="border-0 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/20 rounded-2xl p-4 flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Need Immediate Help?</h3>
                  <p className="text-red-100 text-lg mb-6 leading-relaxed">
                    If you're experiencing online harassment or abuse, we're here to help you right now.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={() => window.open("tel:+27800123456")}
                      size="lg"
                      className="bg-white text-red-600 hover:bg-red-50 border-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Call Emergency Helpline
                    </Button>
                    <Button 
                      onClick={() => navigate("/report")}
                      size="lg"
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                    >
                      Report Incident
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

export default SocialMediaSafety;