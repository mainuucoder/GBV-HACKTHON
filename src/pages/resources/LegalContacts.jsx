// src/pages/resources/LegalContacts.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin, Globe, Users, Scale, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LegalContacts = () => {
  const navigate = useNavigate();

  const organizations = [
    {
      name: "Digital Rights Africa",
      type: "Digital Rights Organization",
      contact: "+27-11-123-4567",
      email: "help@digitalrights.africa",
      website: "www.digitalrights.africa",
      services: ["Digital rights advocacy", "Legal support", "Policy research"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "Women's Legal Trust",
      type: "Legal Aid Organization",
      contact: "+27-800-WOMEN-HELP",
      email: "legal@womentrust.org",
      website: "www.womenlegaltrust.org",
      services: ["Free legal aid", "GBV support", "Court representation"],
      icon: <Scale className="w-6 h-6" />
    },
    {
      name: "Cyber Rights Foundation",
      type: "Digital Safety NGO",
      contact: "+27-860-CYBER-HELP",
      email: "support@cyberrights.org",
      website: "www.cyberrights.org",
      services: ["Cybercrime reporting", "Digital safety", "Online harassment support"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Legal Resources Centre",
      type: "Public Interest Law",
      contact: "+27-11-356-5800",
      email: "info@lrc.org.za",
      website: "www.lrc.org.za",
      services: ["Constitutional litigation", "Human rights", "Public advocacy"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const emergencyContacts = [
    {
      name: "GBV Emergency Helpline",
      number: "+27-800-123-456",
      available: "24/7",
      type: "Crisis Support"
    },
    {
      name: "Legal Aid Board",
      number: "+27-800-110-110",
      available: "Mon-Fri 8AM-4PM",
      type: "Legal Assistance"
    },
    {
      name: "Police Emergency",
      number: "10111",
      available: "24/7",
      type: "Law Enforcement"
    },
    {
      name: "Medical Emergency",
      number: "10177",
      available: "24/7",
      type: "Medical Services"
    }
  ];

  const handleCall = (number) => {
    toast.info(`Calling ${number}...`);
    setTimeout(() => {
      window.open(`tel:${number}`);
    }, 1000);
  };

  const handleEmail = (email) => {
    window.open(`mailto:${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
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
                <Phone className="w-4 h-4 mr-2" />
                Emergency Help
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
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  Legal Support Directory
                </h1>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Connect with trusted legal organizations and support services across Africa
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
              Immediate Emergency Contacts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{contact.name}</h3>
                    <p className="text-2xl font-bold text-red-600 mb-2">{contact.number}</p>
                    <p className="text-sm text-slate-600 mb-2">{contact.type}</p>
                    <p className="text-xs text-green-600 font-medium">{contact.available}</p>
                    <Button 
                      onClick={() => handleCall(contact.number)}
                      size="sm"
                      className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
                    >
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Legal Organizations */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {organizations.map((org, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-3 text-white group-hover:scale-110 transition-transform duration-300">
                      {org.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-800">
                        {org.name}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {org.type}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Contact Information */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{org.contact}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{org.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{org.website}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Services Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {org.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => handleCall(org.contact)}
                      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button 
                      onClick={() => handleEmail(org.email)}
                      variant="outline"
                      className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Resources */}
          <Card className="border-0 bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/20 rounded-2xl p-4 flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Find Local Support</h3>
                  <p className="text-slate-200 text-lg mb-6 leading-relaxed">
                    Many communities have local legal aid clinics and women's organizations that provide free or low-cost legal services.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={() => window.open("https://www.legal-aid.org.za", "_blank")}
                      size="lg"
                      className="bg-white text-slate-800 hover:bg-slate-100 border-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Find Local Legal Aid
                    </Button>
                    <Button 
                      onClick={() => navigate("/community/support-groups")}
                      size="lg"
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                    >
                      Community Support
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

export default LegalContacts;