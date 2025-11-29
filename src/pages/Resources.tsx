import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Shield, FileText, Video, ArrowLeft, Download, ExternalLink, Phone, Heart, Users, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import jsPDF from 'jspdf';

const Resources = () => {
  const navigate = useNavigate();

  // ==================== DIGITAL SAFETY GUIDE FUNCTIONS ====================
  const downloadPrivacyHandbook = () => {
    toast.info("Redirecting to Online Privacy Handbook...");
    setTimeout(() => {
      window.open("https://www.privacyinternational.org/learn/online-privacy-guide", "_blank");
    }, 1000);
  };

  const openSocialMediaSafety = () => {
    navigate("/resources/social-media-safety");
  };

  const openPasswordSecurity = () => {
    window.open("https://www.cyber.gov.au/acsc/view-all-content/advice/creating-strong-passwords", "_blank");
    toast.info("Opening password security guide...");
  };

  // ==================== LEGAL RESOURCES FUNCTIONS ====================
  const openDigitalRights = () => {
    navigate("/resources/digital-rights");
  };

  const openCybercrimeReporting = () => {
    navigate("/resources/cybercrime-reporting");
  };

  const openLegalContacts = () => {
    navigate("/resources/legal-contacts");
  };

  // ==================== TUTORIAL VIDEOS FUNCTIONS ====================
  const openFacebookTutorial = () => {
    toast.info("Opening Facebook Privacy Tutorial...");
    setTimeout(() => {
      window.open("https://www.facebook.com/help/325807937506242", "_blank");
    }, 1000);
  };

  const openInstagramTutorial = () => {
    navigate("/resources/instagram-safety");
  };

  const openWhatsAppSecurity = () => {
    window.open("https://www.whatsapp.com/security", "_blank");
    toast.info("Opening WhatsApp security guide...");
  };

  // ==================== SUPPORT NETWORK FUNCTIONS ====================
  const connectCrisisHelpline = () => {
    toast.success("Connecting you to crisis support...");
    setTimeout(() => {
      window.open("tel:+27800123456");
      toast.info("Dialing GBV Emergency Helpline...");
    }, 2000);
  };

  const openMentalHealthResources = () => {
    navigate("/resources/mental-health");
  };

  const openSupportGroups = () => {
    navigate("/community/support-groups");
  };

  const resourceCategories = [
    {
      icon: Shield,
      title: "Digital Safety Guide",
      description: "Learn how to protect yourself online",
      color: "text-blue-600",
      bgColor: "bg-blue-600",
      resources: [
        {
          title: "Online Privacy Handbook",
          type: "External Guide",
          action: downloadPrivacyHandbook
        },
        {
          title: "Social Media Safety",
          type: "Interactive Guide",
          action: openSocialMediaSafety
        },
        {
          title: "Password Security",
          type: "Quick Reference",
          action: openPasswordSecurity
        }
      ]
    },
    {
      icon: FileText,
      title: "Legal Resources",
      description: "Know your digital rights and legal options",
      color: "text-green-600",
      bgColor: "bg-green-600",
      resources: [
        {
          title: "Digital Rights in Africa",
          type: "Legal Portal",
          action: openDigitalRights
        },
        {
          title: "Reporting Cybercrime",
          type: "Official Portal",
          action: openCybercrimeReporting
        },
        {
          title: "Legal Support Contacts",
          type: "Directory",
          action: openLegalContacts
        }
      ]
    },
    {
      icon: Video,
      title: "Tutorial Videos",
      description: "Step-by-step guides on privacy settings",
      color: "text-purple-600",
      bgColor: "bg-purple-600",
      resources: [
        {
          title: "Facebook Privacy Settings",
          type: "Official Guide",
          action: openFacebookTutorial
        },
        {
          title: "Instagram Safety Features",
          type: "Official Guide",
          action: openInstagramTutorial
        },
        {
          title: "WhatsApp Security",
          type: "Official Guide",
          action: openWhatsAppSecurity
        }
      ]
    },
    {
      icon: BookOpen,
      title: "Support Network",
      description: "Find mental health and crisis support",
      color: "text-orange-600",
      bgColor: "bg-orange-600",
      resources: [
        {
          title: "24/7 Crisis Helpline",
          type: "Immediate Help",
          action: connectCrisisHelpline
        },
        {
          title: "Mental Health Resources",
          type: "Support Portal",
          action: openMentalHealthResources
        },
        {
          title: "Local Support Groups",
          type: "Community",
          action: openSupportGroups
        }
      ]
    },
  ];

  const quickSafetyTips = [
    {
      tip: "Enable two-factor authentication on all your accounts",
      importance: "high"
    },
    {
      tip: "Review privacy settings regularly on social media platforms",
      importance: "medium"
    },
    {
      tip: "Document evidence of harassment (screenshots, messages)",
      importance: "high"
    },
    {
      tip: "Block and report abusive accounts immediately",
      importance: "high"
    },
    {
      tip: "Never share personal information with strangers online",
      importance: "high"
    },
    {
      tip: "Use unique passwords for different accounts",
      importance: "medium"
    }
  ];

  const generateSafetyKitPDF = () => {
    const doc = new jsPDF();
    
    // Set page background with gradient effect
    doc.setFillColor(139, 92, 246);
    doc.rect(0, 0, 210, 297, 'F');
    
    // Main content area with white background and shadow effect
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(10, 10, 190, 277, 3, 3, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.roundedRect(10, 10, 190, 277, 3, 3, 'S');
    
    // Set Times New Roman font
    doc.setFont("times", "normal");
    
    // Beautiful header with gradient
    doc.setFillColor(139, 92, 246);
    doc.roundedRect(15, 15, 180, 25, 2, 2, 'F');
    
    // Header text in Times New Roman
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("times", "bold");
    doc.text('SAFEGUARD AFRICA', 105, 28, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont("times", "normal");
    doc.text('Gender-Based Violence & Digital Safety Kit', 105, 35, { align: 'center' });
    
    let yPosition = 50;

    // Emergency Section with beautiful styling
    doc.setFillColor(254, 226, 226);
    doc.roundedRect(20, yPosition, 170, 30, 2, 2, 'F');
    
    doc.setTextColor(220, 38, 38);
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text('IMMEDIATE EMERGENCY CONTACTS', 25, yPosition + 8);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(9);
    doc.setFont("times", "normal");
    
    const emergencyContacts = [
      '24/7 GBV Emergency Helpline: +27-800-123-456',
      'Local Police Emergency: 911 / 112',
      'Medical Emergency Services: 911 / 112', 
      'Mental Health Crisis Line: +27-800-567-890',
      'Legal Aid Hotline: +27-800-987-654'
    ];
    
    emergencyContacts.forEach((contact, index) => {
      doc.text('• ' + contact, 25, yPosition + 15 + (index * 4.5));
    });
    
    yPosition += 40;

    // GBV Information Section
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(20, yPosition, 170, 25, 2, 2, 'F');
    
    doc.setTextColor(147, 51, 234);
    doc.setFontSize(11);
    doc.setFont("times", "bold");
    doc.text('UNDERSTANDING GENDER-BASED VIOLENCE', 25, yPosition + 8);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(8);
    doc.setFont("times", "normal");
    
    const gbvInfo = [
      "Gender-Based Violence includes physical, sexual, psychological, and economic harm",
      "directed at individuals based on their gender. Digital GBV involves technology-",
      "facilitated abuse like cyberstalking, image abuse, and online harassment."
    ];
    
    gbvInfo.forEach((line, index) => {
      doc.text(line, 25, yPosition + 15 + (index * 3.5));
    });
    
    yPosition += 35;

    // Rights Section
    doc.setFillColor(236, 253, 245);
    doc.roundedRect(20, yPosition, 170, 22, 2, 2, 'F');
    
    doc.setTextColor(16, 185, 129);
    doc.setFontSize(11);
    doc.setFont("times", "bold");
    doc.text('YOUR DIGITAL RIGHTS & PROTECTION', 25, yPosition + 8);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(8);
    doc.setFont("times", "normal");
    
    const rights = [
      "Right to privacy and security online",
      "Right to report abuse without judgment", 
      "Right to legal protection against harassment",
      "Right to control personal information",
      "Right to seek help and support"
    ];
    
    rights.forEach((right, index) => {
      doc.text('• ' + right, 25, yPosition + 14 + (index * 3.5));
    });
    
    yPosition += 30;

    // Two-column layout for resources
    const leftColumn = 25;
    const rightColumn = 110;
    const columnWidth = 75;

    // Left Column - Digital Safety
    doc.setFillColor(239, 246, 255);
    doc.roundedRect(leftColumn - 5, yPosition - 5, 85, 85, 2, 2, 'F');
    
    doc.setTextColor(59, 130, 246);
    doc.setFontSize(11);
    doc.setFont("times", "bold");
    doc.text('DIGITAL SAFETY ESSENTIALS', leftColumn, yPosition);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(8);
    doc.setFont("times", "normal");
    let leftY = yPosition + 6;
    
    quickSafetyTips.forEach((tip) => {
      const tipText = '• ' + tip.tip;
      const splitTip = doc.splitTextToSize(tipText, columnWidth);
      doc.text(splitTip, leftColumn, leftY);
      leftY += splitTip.length * 3.2 + 1.5;
    });

    // Right Column - GBV Support
    doc.setFillColor(253, 242, 248);
    doc.roundedRect(rightColumn - 5, yPosition - 5, 85, 85, 2, 2, 'F');
    
    doc.setTextColor(219, 39, 119);
    doc.setFontSize(11);
    doc.setFont("times", "bold");
    doc.text('GBV SUPPORT RESOURCES', rightColumn, yPosition);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(8);
    doc.setFont("times", "normal");
    let rightY = yPosition + 6;
    
    const gbvResources = [
      "Medical Services: Emergency care & testing",
      "Legal Support: Restraining orders & representation", 
      "Counseling: Trauma therapy & support groups",
      "Shelter: Safe housing & accommodation",
      "Hotlines: 24/7 confidential support",
      "Community: Peer networks & advocacy"
    ];
    
    gbvResources.forEach(resource => {
      const splitResource = doc.splitTextToSize('• ' + resource, columnWidth);
      doc.text(splitResource, rightColumn, rightY);
      rightY += splitResource.length * 3.2 + 1.5;
    });

    // Action Plan Section
    const bottomYPosition = Math.max(leftY, rightY) + 15;
    
    doc.setFillColor(255, 251, 235);
    doc.roundedRect(20, bottomYPosition - 5, 170, 35, 2, 2, 'F');
    
    doc.setTextColor(245, 158, 11);
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text('YOUR SAFETY ACTION PLAN', 105, bottomYPosition + 5, { align: 'center' });
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(8);
    doc.setFont("times", "normal");
    let actionY = bottomYPosition + 12;
    
    const actionSteps = [
      "1. TRUST INSTINCTS - If it feels wrong, it probably is",
      "2. DOCUMENT - Save evidence (screenshots, messages)", 
      "3. REACH OUT - Contact trusted support networks",
      "4. REPORT - Use secure platforms to report incidents",
      "5. PROTECT - Implement safety measures immediately",
      "6. SEEK HELP - Access professional support services"
    ];
    
    actionSteps.forEach(step => {
      const splitStep = doc.splitTextToSize(step, 160);
      doc.text(splitStep, 25, actionY);
      actionY += splitStep.length * 3.2 + 1.5;
    });

    // Beautiful Footer
    doc.setFillColor(30, 41, 59);
    doc.roundedRect(10, 265, 190, 20, 0, 0, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(7);
    doc.setFont("times", "normal");
    
    const generatedDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
    
    doc.text('Confidential - For personal safety use only', 105, 272, { align: 'center' });
    doc.text(`Generated on ${generatedDate}`, 105, 276, { align: 'center' });
    doc.text('Safeguard Africa - Empowering Digital Safety for Women & Girls', 105, 280, { align: 'center' });
 
    // Creator credit
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(6);
    doc.text('@created by DANIEL M. MUTAHI', 105, 283, { align: 'center' });

    return doc;
  };

  const handleDownloadSafetyKit = () => {
    toast.info("Creating your GBV Safety Kit with Times New Roman...");
    
    setTimeout(() => {
      try {
        const doc = generateSafetyKitPDF();
        doc.save('safeguard-africa-gbv-safety-kit.pdf');
        toast.success("GBV Safety Kit downloaded successfully! 📄");
      } catch (error) {
        console.error('Error generating PDF:', error);
        toast.error("Failed to generate safety kit. Please try again.");
      }
    }, 1500);
  };

  const handleEmergencyHelp = () => {
    toast.success("Connecting you to GBV emergency support...");
    setTimeout(() => {
      window.open("tel:+27800123456");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/80 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate(-1)} className="hover:bg-slate-100/80 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <Button 
                onClick={handleDownloadSafetyKit}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Safety Kit
              </Button>
              <Button 
                onClick={handleEmergencyHelp}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
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
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  GBV Safety Resources
                </h1>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Your comprehensive guide to digital safety, emergency support, and empowerment against gender-based violence
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={handleDownloadSafetyKit} 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Safety Kit PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate("/report")} 
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Report Incident
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Alert */}
          <Card className="border-0 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-xl mb-10 transform hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/20 rounded-2xl p-4 flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">24/7 Emergency GBV Support</h3>
                  <p className="text-red-100 text-lg mb-6 leading-relaxed">
                    Immediate confidential help is available around the clock. You are not alone, and our team is here to support you.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 text-base">
                    <div>
                      <strong className="text-white">Emergency Contacts:</strong>
                      <ul className="text-red-100 mt-2 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          GBV Helpline: +27-800-123-456
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          Police Emergency: 911 / 112
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          Medical Services: 911 / 112
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-white">Support Services:</strong>
                      <ul className="text-red-100 mt-2 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          Crisis Counseling
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          Legal Assistance
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          Safe Shelter & Housing
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resource Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full ${category.bgColor}`}></div>
                  <CardHeader className="pb-4 relative">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className={`p-3 rounded-2xl w-fit ${category.bgColor} bg-opacity-10 group-hover:scale-110 transition-transform duration-300 mb-4`}>
                          <Icon className={`w-8 h-8 ${category.color}`} />
                        </div>
                        <CardTitle className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-base text-slate-600 leading-relaxed">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {category.resources.map((resource, resourceIndex) => (
                        <div
                          key={resourceIndex}
                          className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 cursor-pointer group/item border border-slate-200/50 hover:border-purple-200"
                          onClick={resource.action}
                        >
                          <div>
                            <div className="font-semibold text-slate-800 group-hover/item:text-purple-600 transition-colors duration-300">
                              {resource.title}
                            </div>
                            <div className="text-sm text-slate-500 group-hover/item:text-purple-500 transition-colors duration-300">
                              {resource.type}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover/item:text-purple-500 transition-colors duration-300 transform group-hover/item:translate-x-1" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Resources Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
              Quick Access Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group" onClick={openSocialMediaSafety}>
                <CardContent className="p-6 text-center">
                  <div className="bg-white/20 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Social Media Safety</h3>
                  <p className="text-blue-100 text-sm">Complete guides for all platforms</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-green-500 to-teal-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group" onClick={openDigitalRights}>
                <CardContent className="p-6 text-center">
                  <div className="bg-white/20 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Digital Rights</h3>
                  <p className="text-green-100 text-sm">Know your legal protections</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group" onClick={openMentalHealthResources}>
                <CardContent className="p-6 text-center">
                  <div className="bg-white/20 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Mental Health</h3>
                  <p className="text-purple-100 text-sm">Support & counseling resources</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="text-center">
            <Card className="border-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm"></div>
              <CardContent className="p-12 relative z-10">
                <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  You Are Not Alone
                </h3>
                <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Our compassionate team is here to support you through every step of your journey. 
                  Whether you need immediate assistance, legal guidance, or emotional support, 
                  we're available 24/7 to help you feel safe and empowered.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={handleEmergencyHelp}
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-purple-50 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Support
                  </Button>
                  <Button 
                    onClick={() => navigate("/community")}
                    size="lg"
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Join Community
                  </Button>
                  <Button 
                    onClick={handleDownloadSafetyKit}
                    size="lg"
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Get Safety Kit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;