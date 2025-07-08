import { PenTool, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <PenTool className="h-8 w-8 text-accent" />
              <span className="text-xl font-serif font-bold">BlogCraft</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              A platform for writers and readers to share ideas, insights, and stories that matter.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/60 hover:text-accent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/60 hover:text-accent">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/60 hover:text-accent">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground/60 hover:text-accent">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">Home</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">Articles</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">Categories</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">About</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">Writing Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">Style Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">FAQ</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">Terms of Service</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">Cookie Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2023 BlogCraft. All rights reserved. Built with passion for great content.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;