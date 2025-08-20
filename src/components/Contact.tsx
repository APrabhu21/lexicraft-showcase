import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Mail, Linkedin, Phone, MapPin, Github, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "atharvaprabhu6@gmail.com",
      action: () => window.open('mailto:atharvaprabhu6@gmail.com'),
      primary: true
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 716-275-9518",
      action: () => window.open('tel:+17162759518')
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/atharva-prabhu21/",
      action: () => window.open('https://linkedin.com/in/atharva-prabhu21/', '_blank')
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Open to Relocate",
      info: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to contribute to innovative AI/ML projects and drive impactful solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get in Touch</CardTitle>
                <p className="text-white/80">
                  Available for full-time opportunities in ML Engineering, AI Research, and Data Science roles.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-3 rounded-lg transition-smooth ${
                      contact.action ? 'hover:bg-white/10 cursor-pointer' : 'bg-white/5'
                    }`}
                    onClick={contact.action}
                  >
                    <div className="p-2 bg-white/10 rounded-lg text-white">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-white">{contact.label}</p>
                      <p className="text-white/80 text-sm">{contact.value}</p>
                    </div>
                    {contact.primary && (
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        Preferred
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Quick Actions</CardTitle>
                <p className="text-white/80">
                  Connect with me or download my resume for detailed information.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 transition-smooth text-lg py-6"
                  onClick={() => window.open('mailto:atharvaprabhu6@gmail.com')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-smooth text-lg py-6"
                  onClick={() => window.open('https://linkedin.com/in/atharva-prabhu21/', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-smooth text-lg py-6"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </Button>
                
                <div className="pt-4 border-t border-white/20">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="w-full text-white hover:bg-white/10 transition-smooth"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Status */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Available for opportunities</span>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                MS Dec 2025
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;