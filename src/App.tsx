import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import MyReports from "./pages/MyReports";
import SocialMediaSafety from "./pages/resources/SocialMediaSafety";
import DigitalRights from "./pages/resources/DigitalRights";
import LegalContacts from "./pages/resources/LegalContacts";
import MentalHealth from "./pages/resources/MentalHealth";
import SupportGroups from "./pages/resources/SupportGroups";
import InstagramSafety from "./pages/resources/InstagramSafety";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/my-reports" element={<MyReports />} />
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          // Add these to your existing routes
        <Route path="/resources/social-media-safety" element={<SocialMediaSafety />} />
        <Route path="/resources/digital-rights" element={<DigitalRights />} />
        <Route path="/resources/legal-contacts" element={<LegalContacts />} />
        <Route path="/resources/mental-health" element={<MentalHealth />} />
        <Route path="/community/support-groups" element={<SupportGroups />} />
        <Route path="/resources/instagram-safety" element={<InstagramSafety />} />
                  <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
