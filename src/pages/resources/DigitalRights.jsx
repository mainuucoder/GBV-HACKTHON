// src/pages/resources/DigitalRights.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, Shield, BookOpen, Users, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DigitalRights = () => {
  const navigate = useNavigate();

  const rights = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Right to Digital Privacy",
      description: "Protection against unauthorized surveillance and data collection",
      details: [
        "Control over personal information",
        "Right to be forgotten",
        "Data protection compliance",
        "Encryption rights"
      ]
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Right to Digital Safety",
      description: "Freedom from online harassment and cyber violence",
      details: [
        "Protection from cyberstalking",
        "Legal recourse for online abuse",
        "Safe digital environments",
        "Platform accountability"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Freedom of Expression",
      description: "Right to express opinions and access information online",
      details: [
        "Protection from censorship",
        "Access to information",
        "Digital assembly rights",
        "Whistleblower protection"
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Right to Legal Recourse",
      description: "Access to justice for digital rights violations",
      details: [
        "Legal aid availability",
        "Cross-border cooperation",
        "Digital evidence validity",
        "Specialized courts"
      ]
    }
  ];

  const africanFrameworks = [
    {
      country: "South Africa",
      law: "Protection of Personal Information Act (POPIA)",
      status: "Active",
      protection: "High"
    },
    {
      country: "Kenya",
      law: "Data Protection Act",
      status: "Active",
      protection: "High"
    },
    {
      country: "Nigeria",
      law: "Data Protection Act",
      status: "Active",
      protection: "Medium"
    },
    {
      country: "Ghana",
      law: "Data Protection Act",
      status: "Active",
      protection: "Medium"
    },
    {
      country: "Rwanda",
      law: "Law Relating to Protection of Personal Data",
      status: "Active",
      protection: "High"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
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
                onClick={() => window.open("https://www.digitalrightsafrica.org", "_blank")}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Learn More
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
            <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Scale className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Digital Rights in Africa
                </h1>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Understanding your legal protections and rights in the digital space across African jurisdictions
                </p>
              </div>
            </div>
          </div>

          {/* Digital Rights */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {rights.map((right, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-3 text-white group-hover:scale-110 transition-transform duration-300">
                      {right.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-800">
                        {right.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {right.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {right.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3 text-slate-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Legal Frameworks */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <FileText className="w-8 h-8 text-green-600" />
                African Data Protection Laws
              </CardTitle>
              <CardDescription className="text-slate-600">
                Overview of digital rights frameworks across African countries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 font-semibold text-slate-800">Country</th>
                      <th className="text-left py-4 px-4 font-semibold text-slate-800">Legal Framework</th>
                      <th className="text-left py-4 px-4 font-semibold text-slate-800">Status</th>
                      <th className="text-left py-4 px-4 font-semibold text-slate-800">Protection Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {africanFrameworks.map((framework, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                        <td className="py-4 px-4 font-medium text-slate-800">{framework.country}</td>
                        <td className="py-4 px-4 text-slate-700">{framework.law}</td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            {framework.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            framework.protection === 'High' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {framework.protection} Protection
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Action Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 bg-gradient-to-br from-green-500 to-teal-500 text-white shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Get Legal Assistance</h3>
                <p className="text-green-100 mb-6 leading-relaxed">
                  Connect with digital rights organizations and legal experts who can help protect your rights.
                </p>
                <Button 
                  onClick={() => navigate("/resources/legal-contacts")}
                  className="w-full bg-white text-green-600 hover:bg-green-50 border-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Find Legal Support
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Report Violations</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Know how to properly document and report digital rights violations to authorities.
                </p>
                <Button 
                  onClick={() => navigate("/report")}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 border-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Report Incident
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DigitalRights;