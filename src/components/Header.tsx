import { Button } from "@/components/ui/button";
import { PenTool, Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <PenTool className="h-8 w-8 text-accent" />
            <span className="text-xl font-serif font-bold gradient-text">BlogCraft</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-accent smooth-transition">Home</a>
            <a href="#" className="text-foreground hover:text-accent smooth-transition">Articles</a>
            <a href="#" className="text-foreground hover:text-accent smooth-transition">Categories</a>
            <a href="#" className="text-foreground hover:text-accent smooth-transition">About</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="hidden sm:flex">
              Sign In
            </Button>
            <Button className="hidden sm:flex">
              Write
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;