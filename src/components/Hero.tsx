import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import blogHero from "@/assets/blog-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={blogHero} 
          alt="Blog Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Featured Stories
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Discover stories that
            <span className="gradient-text"> inspire</span> and
            <span className="gradient-text"> inform</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Join our community of writers and readers. Share your insights, discover new perspectives, 
            and engage with content that matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Start Reading
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button variant="outline" size="lg">
              Write Your Story
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-2xl" />
    </section>
  );
};

export default Hero;