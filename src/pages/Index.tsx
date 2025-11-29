import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Shield, AlertCircle, Users, BookOpen, ArrowRight, Lock, Heart, Megaphone, CheckCircle2, Star, TrendingUp, Globe, ChevronDown, ChevronUp, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const startValue = 0;
      const endValue = parseInt(value);
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + easeOutQuart * (endValue - startValue));
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(endValue); // Ensure we end at the exact value
        }
      };
      
      requestAnimationFrame(step);
      controls.start("visible");
    }
  }, [isInView, value, duration, controls]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scaleIn}
      className="inline-block"
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
};

// Percentage Counter Component
const PercentageCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const startValue = 0;
      const endValue = parseInt(value);
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + easeOutQuart * (endValue - startValue));
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(endValue); // Ensure we end at the exact value
        }
      };
      
      requestAnimationFrame(step);
      controls.start("visible");
    }
  }, [isInView, value, duration, controls]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scaleIn}
      className="inline-block"
    >
      {count}%
    </motion.span>
  );
};

// Animated Section Component
const AnimatedSection = ({ children, variants = fadeInUp, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Smooth Scroll Hook
const useSmoothScroll = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return { scrollToSection, scrollToTop, navigate };
};

const Index = () => {
  const { scrollToSection, scrollToTop, navigate } = useSmoothScroll();
  const [openFaq, setOpenFaq] = useState(null);
  const [isNightMode, setIsNightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle night mode
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.documentElement.classList.toggle('dark');
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: AlertCircle,
      title: "Report & Protect",
      description: "Secure, anonymous reporting with encrypted evidence storage and real-time support",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Safe Community",
      description: "Moderated forum with AI-powered safety monitoring and peer support networks",
      color: "text-secondary",
    },
    {
      icon: BookOpen,
      title: "Digital Safety",
      description: "Comprehensive resources, guides, and tools to protect yourself online",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Your Dashboard",
      description: "Personal safety center to track incidents and access support services",
      color: "text-primary",
    },
  ];

  // Updated impact stats with animated counters
  const impactStats = [
    { 
      number: "24/7", 
      label: "Support Available", 
      icon: Heart 
    },
    { 
      number: "100", 
      label: "Confidential & Secure", 
      icon: Lock,
      isPercentage: true
    },
    { 
      number: "12500", 
      label: "Reports Helped", 
      icon: Shield,
      suffix: "+"
    },
    { 
      number: "42", 
      label: "Countries Served", 
      icon: Globe 
    },
  ];

  const safetyPrinciples = [
    {
      title: "Prevention First",
      description: "AI-powered early detection prevents harm before it escalates",
      icon: Shield,
    },
    {
      title: "Survivor-Centered",
      description: "Tools and resources designed with survivors' needs at the core",
      icon: Heart,
    },
    {
      title: "Community-Driven",
      description: "Built on collective action and peer support networks",
      icon: Users,
    },
    {
      title: "Policy Advocacy",
      description: "Driving systemic change through data-informed advocacy",
      icon: Megaphone,
    },
  ];

  const testimonials = [
    {
      text: "This platform gave me the courage to report what happened. The support has been life-changing.",
      author: "Anonymous User",
      role: "Survivor",
    },
    {
      text: "As a moderator, having AI assistance helps us protect our community 24/7. It's incredibly effective.",
      author: "Community Moderator",
      role: "Africa Region",
    },
    {
      text: "The resources here helped me secure my digital presence. I feel empowered and safer online.",
      author: "Platform Member",
      role: "Kenya",
    },
  ];

  const faqItems = [
    {
      category: "Reporting Process",
      questions: [
        {
          question: "How do I report an incident anonymously?",
          answer: "You can report anonymously by clicking 'Report Incident' and selecting the anonymous option. We don't require any personal information, and your IP address is never stored. All communications are encrypted end-to-end."
        },
        {
          question: "What types of incidents can I report?",
          answer: "You can report various forms of digital violence including online harassment, cyberstalking, non-consensual image sharing, impersonation, hate speech, and threats. Our platform also supports reporting of offline incidents that started or extended to digital spaces."
        },
        {
          question: "Can I submit evidence with my report?",
          answer: "Yes, you can securely upload screenshots, messages, links, and other digital evidence. All files are encrypted and stored securely. Our system automatically removes metadata that could identify you."
        },
        {
          question: "What happens after I submit a report?",
          answer: "Your report is immediately encrypted and assigned to our support team. For anonymous reports, you'll receive a secure reference code to check status updates. Our team assesses each report and connects you with appropriate resources and support services."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "How is my data protected?",
          answer: "We use military-grade encryption (AES-256) for all data, both in transit and at rest. Personal information is never stored with your reports, and we conduct regular security audits to maintain the highest protection standards."
        },
        {
          question: "Can my identity be traced back from an anonymous report?",
          answer: "No. Anonymous reports are completely untraceable. We don't collect IP addresses, device fingerprints, or any identifying metadata. The system is designed to ensure complete anonymity for those who need it."
        },
        {
          question: "Who has access to my information?",
          answer: "Only authorized support team members and trained moderators have access to report details, and even then, anonymous reports contain no personal data. We follow strict data minimization principles and never share information with third parties without explicit consent."
        },
        {
          question: "How long is my data stored?",
          answer: "Anonymous report data is automatically deleted after 90 days unless you choose to extend the retention period. For registered users, you have full control over your data and can delete your account and associated reports at any time."
        }
      ]
    },
    {
      category: "Platform Features",
      questions: [
        {
          question: "How does the AI-powered protection work?",
          answer: "Our AI system monitors for patterns of harmful behavior, detects potential threats early, and provides real-time safety recommendations. It learns from community feedback while maintaining strict privacy standards and never accesses private messages."
        },
        {
          question: "What support resources are available?",
          answer: "We offer 24/7 chat support, connections to local counseling services, legal resources, digital safety guides, and peer support groups. All resources are tailored to the African context and available in multiple languages."
        },
        {
          question: "Is the platform available across Africa?",
          answer: "Yes, Safeguard Africa is designed to work across the continent. We partner with local organizations in multiple countries and provide resources specific to different regional contexts and legal frameworks."
        },
        {
          question: "How can I join the community safely?",
          answer: "You can create an account with minimal information or participate anonymously. Our community features include moderated forums, support groups, and educational content—all designed with safety and privacy as the foundation."
        }
      ]
    },
    {
      category: "Getting Help & Support",
      questions: [
        {
          question: "What immediate support is available after reporting?",
          answer: "You'll immediately receive personalized safety recommendations, access to our 24/7 crisis chat, and connections to local support services. Our system also provides step-by-step guidance for securing your digital presence."
        },
        {
          question: "How do I access mental health support?",
          answer: "We partner with certified mental health professionals across Africa who understand digital violence trauma. You can access free initial consultations and discounted ongoing support through our platform."
        },
        {
          question: "Can I get legal assistance through the platform?",
          answer: "Yes, we connect you with legal professionals who specialize in digital rights and gender-based violence. They can advise on reporting to authorities, collecting evidence, and understanding your legal rights across different African jurisdictions."
        },
        {
          question: "What if I need to escalate my case to authorities?",
          answer: "We provide guidance on engaging with local law enforcement, including template statements, evidence preservation tips, and connections to organizations that can accompany you through the process."
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isNightMode 
        ? 'dark bg-gray-900 text-gray-100' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
        isNightMode 
          ? 'bg-gray-800/95 border-gray-700' 
          : 'bg-white/95 border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className={`w-8 h-8 ${
              isNightMode ? 'text-amber-400' : 'text-primary'
            }`} />
            <span className="text-xl font-bold">Safeguard Africa</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('features')}
                className={isNightMode ? 'text-gray-300 hover:text-amber-400' : ''}
              >
                Features
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('stats')}
                className={isNightMode ? 'text-gray-300 hover:text-amber-400' : ''}
              >
                Impact
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('faq')}
                className={isNightMode ? 'text-gray-300 hover:text-amber-400' : ''}
              >
                FAQ
              </Button>
            </div>
            
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleNightMode}
                className={isNightMode ? 'text-amber-400 hover:bg-amber-400/20' : 'text-gray-600 hover:bg-gray-100'}
              >
                {isNightMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/auth")}
                className={isNightMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}
              >
                Sign In
              </Button>
              <Button 
                onClick={() => navigate("/report")} 
                className={`shadow-warm ${
                  isNightMode 
                    ? 'bg-amber-600 hover:bg-amber-700' 
                    : 'bg-primary hover:bg-primary/90'
                }`}
              >
                Report Incident
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleNightMode}
              className={isNightMode ? 'text-amber-400' : 'text-gray-600'}
            >
              {isNightMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t transition-colors duration-300 ${
              isNightMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
            }`}
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  scrollToSection('features');
                  setIsMobileMenuOpen(false);
                }}
              >
                Features
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  scrollToSection('stats');
                  setIsMobileMenuOpen(false);
                }}
              >
                Impact
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => {
                  scrollToSection('faq');
                  setIsMobileMenuOpen(false);
                }}
              >
                FAQ
              </Button>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <Button 
                  variant="outline" 
                  className="w-full justify-start mb-2"
                  onClick={() => {
                    navigate("/auth");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full justify-start"
                  onClick={() => {
                    navigate("/report");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Report Incident
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`relative overflow-hidden transition-colors duration-300 ${
        isNightMode 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
          : 'bg-subtle-gradient'
      }`}>
        <div className={`absolute inset-0 opacity-10 ${
          isNightMode ? 'bg-amber-400' : 'bg-earth-gradient'
        }`} />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Badge variant="secondary" className={`px-4 py-2 text-sm font-medium shadow-soft ${
                  isNightMode 
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400/30' 
                    : ''
                }`}>
                  <Shield className="w-4 h-4 mr-2 inline" />
                  Safety-by-Design Platform
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                variants={fadeInUp}
              >
                End Digital Violence<br />
                <span className={isNightMode ? 'text-amber-400' : 'text-primary'}>
                  Against Women & Girls
                </span>
              </motion.h1>
              
              <motion.p 
                className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
                  isNightMode ? 'text-gray-300' : 'text-muted-foreground'
                }`}
                variants={fadeInUp}
              >
                A comprehensive ecosystem powered by AI to prevent, detect, and respond to 
                digital violence targeting women and girls across Africa.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                variants={fadeInUp}
              >
                <Button 
                  size="lg" 
                  className={`shadow-strong text-lg px-8 py-6 ${
                    isNightMode 
                      ? 'bg-amber-600 hover:bg-amber-700' 
                      : ''
                  }`}
                  onClick={() => navigate("/report")}
                >
                  Report Incident Safely
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`text-lg px-8 py-6 ${
                    isNightMode 
                      ? 'border-amber-400 text-amber-400 hover:bg-amber-400/10' 
                      : ''
                  }`}
                  onClick={() => navigate("/auth")}
                >
                  Join Our Community
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats with Animated Counters */}
      <AnimatedSection>
        <section 
          id="stats"
          className={`py-16 transition-colors duration-300 ${
            isNightMode 
              ? 'bg-amber-900/30 text-amber-100' 
              : 'bg-primary text-primary-foreground'
          }`}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-4 gap-8 text-center"
              variants={staggerContainer}
            >
              {impactStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="space-y-3"
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Icon className="w-12 h-12 mx-auto opacity-80" />
                    <div className="text-4xl md:text-5xl font-bold">
                      {stat.isPercentage ? (
                        <PercentageCounter value={stat.number} duration={2000} />
                      ) : stat.number === "24/7" ? (
                        stat.number
                      ) : (
                        <AnimatedCounter 
                          value={stat.number} 
                          duration={2000}
                          suffix={stat.suffix || ""}
                        />
                      )}
                    </div>
                    <div className={`font-medium ${
                      isNightMode ? 'text-amber-200/80' : 'text-primary-foreground/80'
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Core Features */}
      <AnimatedSection>
        <section id="features" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Protection Ecosystem</h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              isNightMode ? 'text-gray-300' : 'text-muted-foreground'
            }`}>
              Every tool you need to stay safe, get support, and drive change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className={`hover:shadow-warm transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 ${
                    isNightMode ? 'bg-gray-800 border-gray-700 hover:border-amber-400/50' : ''
                  }`}
                  onClick={() => {
                    if (index === 0) navigate("/report");
                    if (index === 1) navigate("/community");
                    if (index === 2) navigate("/resources");
                    if (index === 3) navigate("/dashboard");
                  }}
                >
                  <CardHeader>
                    <Icon className={`w-14 h-14 ${
                      isNightMode ? 'text-amber-400' : feature.color
                    } mb-4`} />
                    <CardTitle className={`text-xl ${
                      isNightMode ? 'text-gray-100' : ''
                    }`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`leading-relaxed ${
                      isNightMode ? 'text-gray-300' : 'text-muted-foreground'
                    }`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <section id="faq" className={`py-20 transition-colors duration-300 ${
          isNightMode ? 'bg-gray-800/50' : 'bg-muted/30'
        }`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className={`text-xl max-w-2xl mx-auto ${
                isNightMode ? 'text-gray-300' : 'text-muted-foreground'
              }`}>
                Everything you need to know about using Safeguard Africa safely and effectively
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {faqItems.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isNightMode ? 'text-amber-400' : 'text-primary'
                  }`}>
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.questions.map((item, itemIndex) => {
                      const faqIndex = `${categoryIndex}-${itemIndex}`;
                      const isOpen = openFaq === faqIndex;
                      
                      return (
                        <Card key={itemIndex} className={`border-2 hover:border-primary/20 transition-colors ${
                          isNightMode ? 'bg-gray-800 border-gray-700 hover:border-amber-400/50' : ''
                        }`}>
                          <CardContent className="p-0">
                            <button
                              className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors ${
                                isNightMode 
                                  ? 'hover:bg-gray-700/50 text-gray-100' 
                                  : 'hover:bg-muted/50'
                              }`}
                              onClick={() => toggleFaq(faqIndex)}
                            >
                              <span className="font-semibold text-lg pr-4">{item.question}</span>
                              {isOpen ? (
                                <ChevronUp className={`w-5 h-5 flex-shrink-0 ${
                                  isNightMode ? 'text-amber-400' : 'text-primary'
                                }`} />
                              ) : (
                                <ChevronDown className={`w-5 h-5 flex-shrink-0 ${
                                  isNightMode ? 'text-amber-400' : 'text-primary'
                                }`} />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-4">
                                <div className={`border-t pt-4 ${
                                  isNightMode ? 'border-gray-700' : ''
                                }`}>
                                  <p className={`leading-relaxed ${
                                    isNightMode ? 'text-gray-300' : 'text-muted-foreground'
                                  }`}>
                                    {item.answer}
                                  </p>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Support CTA */}
            <div className="text-center mt-12">
              <Card className={`max-w-2xl mx-auto ${
                isNightMode 
                  ? 'bg-amber-900/50 text-amber-100 border-amber-400/30' 
                  : 'bg-primary text-primary-foreground'
              }`}>
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                  <p className={`mb-4 ${
                    isNightMode ? 'opacity-90' : 'opacity-90'
                  }`}>
                    Our support team is available 24/7 to help you with any concerns
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      variant={isNightMode ? "outline" : "secondary"}
                      size="lg"
                      onClick={() => navigate("/contact")}
                      className={isNightMode ? 'border-amber-400 text-amber-400 hover:bg-amber-400/10' : ''}
                    >
                      Contact Support
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className={isNightMode 
                        ? 'bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400/10' 
                        : 'bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10'
                      }
                      onClick={() => navigate("/resources")}
                    >
                      Browse Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Safety Principles */}
      <AnimatedSection>
        <section className={`py-20 transition-colors duration-300 ${
          isNightMode ? 'bg-gray-800/30' : 'bg-muted/50'
        }`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Built on Safety-by-Design</h2>
              <p className={`text-xl max-w-2xl mx-auto ${
                isNightMode ? 'text-gray-300' : 'text-muted-foreground'
              }`}>
                Our platform embeds safety into every feature and interaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {safetyPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Card key={index} className={`hover:shadow-soft transition-all ${
                    isNightMode ? 'bg-gray-800 border-gray-700' : 'bg-card'
                  }`}>
                    <CardContent className="pt-6 text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        isNightMode ? 'bg-amber-400/20' : 'bg-primary/10'
                      }`}>
                        <Icon className={`w-8 h-8 ${
                          isNightMode ? 'text-amber-400' : 'text-primary'
                        }`} />
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 ${
                        isNightMode ? 'text-gray-100' : ''
                      }`}>
                        {principle.title}
                      </h3>
                      <p className={`text-sm ${
                        isNightMode ? 'text-gray-300' : 'text-muted-foreground'
                      }`}>
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection>
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Safeguard Africa Works</h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              isNightMode ? 'text-gray-300' : 'text-muted-foreground'
            }`}>
              Simple, secure, and survivor-centered process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl font-bold ${
                isNightMode ? 'bg-amber-400/20 text-amber-400' : 'bg-secondary/20 text-secondary'
              }`}>
                1
              </div>
              <h3 className="text-2xl font-semibold">Report Securely</h3>
              <p className={isNightMode ? 'text-gray-300' : 'text-muted-foreground'}>
                Submit incidents anonymously with encrypted evidence storage. Your identity is protected.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl font-bold ${
                isNightMode ? 'bg-amber-400/20 text-amber-400' : 'bg-accent/20 text-accent'
              }`}>
                2
              </div>
              <h3 className="text-2xl font-semibold">Get Support</h3>
              <p className={isNightMode ? 'text-gray-300' : 'text-muted-foreground'}>
                Access immediate resources, connect with support networks, and receive personalized safety guidance.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl font-bold ${
                isNightMode ? 'bg-amber-400/20 text-amber-400' : 'bg-primary/20 text-primary'
              }`}>
                3
              </div>
              <h3 className="text-2xl font-semibold">Drive Change</h3>
              <p className={isNightMode ? 'text-gray-300' : 'text-muted-foreground'}>
                Your data powers advocacy efforts and policy changes to make digital spaces safer for all.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className={`py-20 transition-colors duration-300 ${
          isNightMode ? 'bg-gradient-to-b from-gray-800/30 to-transparent' : 'bg-gradient-to-b from-muted/30 to-transparent'
        }`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Stories of Impact</h2>
              <p className={`text-xl max-w-2xl mx-auto ${
                isNightMode ? 'text-gray-300' : 'text-muted-foreground'
              }`}>
                Real voices from our community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className={`shadow-soft ${
                  isNightMode ? 'bg-gray-800 border-gray-700' : 'bg-card'
                }`}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 fill-accent ${
                          isNightMode ? 'text-amber-400' : 'text-accent'
                        }`} />
                      ))}
                    </div>
                    <p className={`italic leading-relaxed ${
                      isNightMode ? 'text-gray-300' : 'text-muted-foreground'
                    }`}>
                      "{testimonial.text}"
                    </p>
                    <div className={`pt-4 border-t ${
                      isNightMode ? 'border-gray-700' : ''
                    }`}>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className={`text-sm ${
                        isNightMode ? 'text-gray-400' : 'text-muted-foreground'
                      }`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className={`py-20 transition-colors duration-300 ${
          isNightMode 
            ? 'bg-gradient-to-br from-amber-900/80 to-amber-800/60 text-amber-50' 
            : 'bg-hero-gradient text-primary-foreground'
        }`}>
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Join the Movement for Digital Safety
              </h2>
              <p className={`text-xl leading-relaxed ${
                isNightMode ? 'text-amber-100/90' : 'text-primary-foreground/90'
              }`}>
                Together, we can create a digital world where every woman and girl feels safe, 
                empowered, and free from violence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  variant={isNightMode ? "default" : "secondary"}
                  className={`text-lg px-8 py-6 shadow-strong ${
                    isNightMode 
                      ? 'bg-amber-400 text-amber-900 hover:bg-amber-300' 
                      : ''
                  }`}
                  onClick={() => navigate("/auth")}
                >
                  Create Free Account
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`text-lg px-8 py-6 bg-transparent ${
                    isNightMode 
                      ? 'border-amber-200 text-amber-200 hover:bg-amber-200/10' 
                      : 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                  onClick={() => navigate("/resources")}
                >
                  Explore Resources
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Trust Indicators */}
      <AnimatedSection>
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <CheckCircle2 className={`w-12 h-12 mx-auto ${
                  isNightMode ? 'text-amber-400' : 'text-primary'
                }`} />
                <h3 className="font-semibold">End-to-End Encryption</h3>
                <p className={`text-sm ${
                  isNightMode ? 'text-gray-300' : 'text-muted-foreground'
                }`}>
                  Your data is fully encrypted and secure
                </p>
              </div>
              <div className="space-y-2">
                <Shield className={`w-12 h-12 mx-auto ${
                  isNightMode ? 'text-amber-400' : 'text-primary'
                }`} />
                <h3 className="font-semibold">Privacy Protected</h3>
                <p className={`text-sm ${
                  isNightMode ? 'text-gray-300' : 'text-muted-foreground'
                }`}>
                  Anonymous reporting options available
                </p>
              </div>
              <div className="space-y-2">
                <TrendingUp className={`w-12 h-12 mx-auto ${
                  isNightMode ? 'text-amber-400' : 'text-primary'
                }`} />
                <h3 className="font-semibold">Proven Impact</h3>
                <p className={`text-sm ${
                  isNightMode ? 'text-gray-300' : 'text-muted-foreground'
                }`}>
                  Data-driven safety improvements
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Scroll to Top Button */}
     <motion.button
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.1 }}
  onClick={scrollToTop}
  className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg transition-colors duration-300 ${
    isNightMode
      ? 'bg-amber-600 hover:bg-amber-700 text-white'
      : 'bg-primary hover:bg-primary/90 text-white'
  }`}
>
  <ArrowRight className="w-5 h-5 -rotate-90" />
</motion.button>

      {/* Footer */}
      <footer className={`border-t py-12 transition-colors duration-300 ${
        isNightMode 
          ? 'bg-amber-900 border-amber-800' 
          : 'bg-amber-900 border-amber-700'
      }`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-amber-200" />
                <span className="font-bold text-lg text-white">Safeguard Africa</span>
              </div>
              <p className="text-sm text-amber-100">
                Empowering digital safety for all women and girls across Africa.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Platform</h4>
              <ul className="space-y-2 text-sm text-amber-100">
                <li><Button variant="link" className="p-0 h-auto text-amber-100 hover:text-white hover:no-underline" onClick={() => navigate("/report")}>Report Incident</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-amber-100 hover:text-white hover:no-underline" onClick={() => navigate("/community")}>Community</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-amber-100 hover:text-white hover:no-underline" onClick={() => navigate("/resources")}>Resources</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-amber-100 hover:text-white hover:no-underline" onClick={() => navigate("/dashboard")}>Dashboard</Button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-sm text-amber-100">
                <li className="hover:text-white cursor-pointer">24/7 Helpline</li>
                <li className="hover:text-white cursor-pointer">Legal Resources</li>
                <li className="hover:text-white cursor-pointer">Mental Health Support</li>
                <li className="hover:text-white cursor-pointer">Safety Guides</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">About</h4>
              <ul className="space-y-2 text-sm text-amber-100">
                <li className="hover:text-white cursor-pointer">Our Mission</li>
                <li className="hover:text-white cursor-pointer">Policy Advocacy</li>
                <li className="hover:text-white cursor-pointer">Impact Reports</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-amber-700 text-center text-sm text-amber-200">
            <p>© 2025 Safeguard Africa. Empowering digital safety for all.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;