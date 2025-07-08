import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto glass-card">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-accent/10 rounded-full">
                <Mail className="h-8 w-8 text-accent" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Stay in the Loop
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest articles, insights, and updates delivered straight to your inbox. 
              Join our community of passionate readers and writers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>No spam, unsubscribe at any time</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;