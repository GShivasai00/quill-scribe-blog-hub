import BlogCard from "./BlogCard";

const FeaturedPosts = () => {
  const posts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to new frameworks and technologies that are revolutionizing how we build digital experiences.",
      author: "Sarah Chen",
      readTime: "8 min read",
      category: "Technology",
      publishedAt: "Dec 15, 2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      featured: true
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring and scaling React applications with modern tools and patterns.",
      author: "Michael Rodriguez",
      readTime: "12 min read",
      category: "Development",
      publishedAt: "Dec 12, 2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop"
    },
    {
      title: "The Art of Technical Writing",
      excerpt: "Master the skills needed to communicate complex technical concepts clearly and effectively.",
      author: "Emily Johnson",
      readTime: "6 min read",
      category: "Writing",
      publishedAt: "Dec 10, 2023",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop"
    },
    {
      title: "Design Systems That Scale",
      excerpt: "Creating consistent and maintainable design systems for growing organizations.",
      author: "Alex Kim",
      readTime: "10 min read",
      category: "Design",
      publishedAt: "Dec 8, 2023",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=300&fit=crop"
    },
    {
      title: "Understanding Modern Authentication",
      excerpt: "A comprehensive guide to implementing secure authentication in modern web applications.",
      author: "David Park",
      readTime: "15 min read",
      category: "Security",
      publishedAt: "Dec 5, 2023",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked stories from our community of writers and industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;