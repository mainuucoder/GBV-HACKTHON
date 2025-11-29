// src/pages/community/SupportGroups.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Calendar, MapPin, Video, Shield, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SupportGroups = () => {
  const navigate = useNavigate();

  const supportGroups = [
    {
      name: "GBV Survivors Network",
      type: "Peer Support",
      schedule: "Weekly - Tuesdays 6PM",
      format: "In-person & Online",
      location: "Various locations nationwide",
      focus: "Healing and empowerment for GBV survivors",
      contact: "info@gbvsurvivors.org"
    },
    {
      name: "Women's Digital Safety Circle",
      type: "Educational Support",
      schedule: "Bi-weekly - Thursdays 7PM",
      format: "Online",
      location: "Virtual meetings",
      focus: "Digital safety and online harassment support",
      contact: "safety@womenscircle.org"
    },
    {
      name: "Trauma Recovery Group",
      type: "Therapeutic Support",
      schedule: "Weekly - Mondays 5PM",
      format: "In-person",
      location: "Community centers",
      focus: "Trauma processing and recovery",
      contact: "recovery@traumasupport.org"
    },
    {
      name: "Young Women's Support",
      type: "Age-specific Support",
      schedule: "Weekly - Saturdays 10AM",
      format: "Hybrid",
      location: "Youth centers & Online",
      focus: "Support for women 18-25",
      contact: "youth@womenssupport.org"
    }
  ];

  const onlineCommunities = [
    {
      name: "Safe Space Africa",
      platform: "Private Forum",
      members: "5,000+",
      focus: "Anonymous peer support",
      access: "Application required",
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Women Heal Together",
      platform: "WhatsApp Groups",
      members: "Regional groups",
      focus: "Daily check-ins and support",
      access: "Referral based",
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Digital Warriors",
      platform: "Telegram Community",
      members: "2,000+",
      focus: "Digital safety advocacy",
      access: "Open to join",
      icon: <Video className="w-6 h-6" />
    }
  ];

  const handleJoinRequest = (group) => {
    toast.success(`Request sent to join ${group.name}`);
    setTimeout(() => {
      window.open(`mailto:${group.contact}?subject=Join Request - ${group.name}&body=Hello, I would like to join your support group.`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/80 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate(-1)} className="hover:bg-slate-100/80 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Community
            </Button>
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => navigate("/resources/mental-health")}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Heart className="w-4 h-4 mr-2" />
                Mental Health Resources
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
            <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  Support Groups
                </h1>
                <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Connect with others who understand your journey. Find strength in community and shared experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Support Groups */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {supportGroups.map((group, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-3 text-white group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-800">
                        {group.name}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {group.type}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Group Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{group.schedule}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Video className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{group.format}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{group.location}</span>
                    </div>
                  </div>

                  {/* Focus Area */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Focus Area:</h4>
                    <p className="text-slate-600 text-sm">{group.focus}</p>
                  </div>

                  {/* Action Button */}
                  <Button 
                    onClick={() => handleJoinRequest(group)}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white transition-all duration-300"
                  >
                    Request to Join
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Online Communities */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Video className="w-8 h-8 text-cyan-600" />
                Online Communities
              </CardTitle>
              <CardDescription className="text-slate-600">
                Digital spaces for continuous support and connection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {onlineCommunities.map((community, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-3 w-16 h-16 mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {community.icon}
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg mb-2">{community.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{community.platform}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Members:</span>
                        <span className="font-medium text-slate-700">{community.members}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Access:</span>
                        <span className="font-medium text-slate-700">{community.access}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-4">{community.focus}</p>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                    >
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Safety Notice */}
          <Card className="border-0 bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/20 rounded-2xl p-4 flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Safe & Confidential</h3>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    All our support groups maintain strict confidentiality and safety protocols. 
                    Your privacy and emotional safety are our top priorities in every meeting.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Safety Features:</h4>
                      <ul className="space-y-1 text-blue-100">
                        <li>• Verified member screening</li>
                        <li>• Professional facilitation</li>
                        <li>• Confidentiality agreements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Community Guidelines:</h4>
                      <ul className="space-y-1 text-blue-100">
                        <li>• Respectful communication</li>
                        <li>• No judgment zone</li>
                        <li>• Mutual support and care</li>
                      </ul>
                    </div>
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

export default SupportGroups;