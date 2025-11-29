// src/pages/resources/MentalHealth.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Phone, Users, BookOpen, Clock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const MentalHealth = () => {
  const navigate = useNavigate();

  const crisisServices = [
    {
      name: "24/7 Crisis Helpline",
      description: "Immediate emotional support and crisis intervention",
      contact: "+27-800-123-456",
      available: "24/7",
      type: "Phone Support"
    },
    {
      name: "Suicide Prevention",
      description: "Specialized suicide prevention and mental health support",
      contact: "+27-800-567-890",
      available: "24/7",
      type: "Emergency"
    },
    {
      name: "GBV Trauma Support",
      description: "Trauma-informed counseling for GBV survivors",
      contact: "+27-800-987-654",
      available: "24/7",
      type: "Specialized"
    },
    {
      name: "Text Support Line",
      description: "Confidential text-based mental health support",
      contact: "Text HELP to 741741",
      available: "24/7",
      type: "Text Support"
    }
  ];

  const therapyOptions = [
    {
      type: "Online Therapy",
      platforms: ["BetterHelp Africa", "TherapyRoute", "Mindful Africa"],
      description: "Professional counseling from licensed therapists online",
      cost: "Sliding scale available"
    },
    {
      type: "Support Groups",
      platforms: ["GBV Survivors Network", "Mental Health Africa", "Women's Circles"],
      description: "Peer support and shared healing experiences",
      cost: "Mostly free"
    },
    {
      type: "Community Centers",
      platforms: ["Local clinics", "Women's shelters", "Community health"],
      description: "In-person counseling and group therapy sessions",
      cost: "Free or low-cost"
    },
    {
      type: "Self-Help Resources",
      platforms: ["Guided meditation", "Workbook programs", "Mobile apps"],
      description: "Tools and resources for self-guided healing",
      cost: "Free resources available"
    }
  ];

  const copingStrategies = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Grounding Techniques",
      tips: ["5-4-3-2-1 sensory exercise", "Deep breathing", "Mindfulness meditation"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Support",
      tips: ["Connect with trusted friends", "Join support groups", "Share your feelings"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Self-Care Practices",
      tips: ["Maintain routine", "Physical activity", "Healthy eating", "Adequate sleep"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Planning",
      tips: ["Identify triggers", "Create safe spaces", "Develop exit strategies"]
    }
  ];

  const handleCall = (number) => {
    toast.info(`Connecting you to ${number}...`);
    setTimeout(() => {
      if (number.includes("Text")) {
        toast.success("Please text the number provided");
      } else {
        window.open(`tel:${number}`);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
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
                onClick={() => handleCall("+27-800-123-456")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Crisis Help
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
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Mental Health Support
                </h1>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Comprehensive mental health resources and support services for healing and recovery
                </p>
              </div>
            </div>
          </div>

          {/* Crisis Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
              Immediate Crisis Support
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {crisisServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg mb-2">{service.name}</h3>
                        <p className="text-slate-600 text-sm mb-3">{service.description}</p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-2 text-white">
                        <Clock className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-2xl font-bold text-purple-600">{service.contact}</p>
                        <p className="text-sm text-slate-500">{service.type}</p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {service.available}
                      </span>
                    </div>

                    <Button 
                      onClick={() => handleCall(service.contact)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Connect Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Therapy Options */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-600" />
                Therapy & Counseling Options
              </CardTitle>
              <CardDescription className="text-slate-600">
                Various pathways to professional mental health support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {therapyOptions.map((option, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-slate-800 text-lg mb-3">{option.type}</h3>
                    <p className="text-slate-600 mb-4">{option.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-700 mb-2">Available Platforms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {option.platforms.map((platform, platformIndex) => (
                          <span 
                            key={platformIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600 font-medium">{option.cost}</span>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-purple-600 text-purple-600 hover:bg-purple-50"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Coping Strategies */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {copingStrategies.map((strategy, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {strategy.icon}
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-3">{strategy.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {strategy.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Section */}
          <Card className="border-0 bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/20 rounded-2xl p-4 flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Your Mental Health Matters</h3>
                  <p className="text-red-100 text-lg mb-6 leading-relaxed">
                    Seeking help is a sign of strength. You don't have to face challenges alone. 
                    Professional support is available and recovery is possible.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={() => handleCall("+27-800-123-456")}
                      size="lg"
                      className="bg-white text-red-600 hover:bg-red-50 border-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Crisis Line
                    </Button>
                    <Button 
                      onClick={() => navigate("/community/support-groups")}
                      size="lg"
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Find Support Groups
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

export default MentalHealth;