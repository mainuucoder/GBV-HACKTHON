import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, AlertCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Report = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    incidentType: "",
    description: "",
    platform: "",
    date: "",
    anonymous: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission - will connect to backend later
    setTimeout(() => {
      toast.success("Report submitted securely. You'll receive a confirmation shortly.");
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-subtle-gradient">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Report an Incident</h1>
          <p className="text-muted-foreground">
            Your report is confidential and will be handled with care
          </p>
        </div>

        <Card className="shadow-strong">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Incident Details
            </CardTitle>
            <CardDescription>
              All reports are encrypted and stored securely. You can choose to remain anonymous.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="incidentType">Type of Incident *</Label>
                <Select
                  value={formData.incidentType}
                  onValueChange={(value) => setFormData({ ...formData, incidentType: value })}
                  required
                >
                  <SelectTrigger id="incidentType">
                    <SelectValue placeholder="Select incident type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cyberbullying">Cyberbullying</SelectItem>
                    <SelectItem value="harassment">Harassment</SelectItem>
                    <SelectItem value="doxxing">Doxxing</SelectItem>
                    <SelectItem value="threats">Threats or Blackmail</SelectItem>
                    <SelectItem value="impersonation">Impersonation</SelectItem>
                    <SelectItem value="image-abuse">Image-based Abuse</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="platform">Platform/Location</Label>
                <Input
                  id="platform"
                  placeholder="e.g., Facebook, WhatsApp, Email"
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date of Incident</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe what happened..."
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Include as much detail as you're comfortable sharing
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Evidence Upload (Optional)</p>
                <p className="text-xs text-muted-foreground mb-3">
                  You can upload screenshots, messages, or other evidence. All files are encrypted.
                </p>
                <Input type="file" multiple className="bg-background" />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Report"}
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree that your report may be reviewed by our moderation team
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Emergency Resources */}
        <Card className="mt-8 bg-accent/10 border-accent">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you're in immediate danger, please contact local authorities or these resources:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Emergency Hotline:</strong> [Number will be added]</p>
              <p><strong>Support Chat:</strong> Available 24/7</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Report;
