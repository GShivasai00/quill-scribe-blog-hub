import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  publishedAt: string;
  image?: string;
  featured?: boolean;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  author, 
  readTime, 
  category, 
  publishedAt,
  image,
  featured = false 
}: BlogCardProps) => {
  return (
    <Card className={`group cursor-pointer hover-lift glass-card ${featured ? 'md:col-span-2' : ''}`}>
      <CardContent className="p-0">
        {image && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
              {category}
            </Badge>
          </div>
          
          <h3 className={`font-serif font-bold mb-3 group-hover:text-accent smooth-transition ${featured ? 'text-2xl' : 'text-lg'}`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
            <span>{publishedAt}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;