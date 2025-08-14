import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import { Search, Calendar, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: "ai-business-automation",
      title: "AI in Business Automation: How Intelligent Systems Are Transforming Industries",
      excerpt: "In recent years, AI has revolutionized business automation across various industries. Intelligent systems now handle tasks ranging from inventory management to customer service, significantly enhancing efficiency and reducing operational costs. By leveraging AI, businesses can automate routine processes, allowing human employees to focus on more strategic activities. This transformation is evident in sectors like manufacturing, retail, and healthcare, where AI-driven tools are optimizing supply chains, personalizing customer experiences, and improving patient outcomes.",
      date: "March 4, 2025",
      readTime: "6 min read",
      category: "Business Automation"
    },
    {
      id: "ai-powered-customer-support",
      title: "The Rise of AI-Powered Customer Support: Enhancing User Experience",
      excerpt: "AI-powered customer support systems are reshaping how businesses interact with their customers. By using natural language processing and machine learning, these systems can provide quick, accurate, and personalized responses to customer inquiries. This technology is not only improving user satisfaction but also reducing wait times and operational costs.",
      date: "February 4, 2025",
      readTime: "5 min read",
      category: "Customer Support"
    },
    {
      id: "ai-predictive-analytics",
      title: "AI in Predictive Analytics: Driving Business Decisions with Data Insights",
      excerpt: "Predictive analytics powered by AI is transforming how businesses make decisions. By analyzing vast amounts of data, AI algorithms can identify trends, forecast outcomes, and provide actionable insights. This empowers companies to make more informed strategic decisions, whether it's optimizing marketing campaigns, managing supply chains, or enhancing customer experiences.",
      date: "January 4, 2025",
      readTime: "7 min read",
      category: "Predictive Analytics"
    },
    {
      id: "ethical-ai",
      title: "Ethical AI: Balancing Innovation and Responsibility in Business",
      excerpt: "As AI technology evolves, so does the need for ethical considerations in its development and deployment. Businesses must navigate the balance between innovation and responsibility by ensuring transparency, fairness, and accountability in AI systems.",
      date: "December 4, 2024",
      readTime: "8 min read",
      category: "AI Ethics"
    }
  ];

  const categories = [
    "AI Trends",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
    "Machine Learning",
    "AI Ethics",
    "Healthcare AI",
    "Cloud Computing",
    "Business Automation"
  ];

  const blogSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Blog - The AI Chronicle",
    "description": "Exclusive insights and thought leadership on the future of AI, crafted for discerning professionals. Expert analysis on business automation, AI trends, and technology innovation.",
    "url": "https://solvenciaindustries.com/blog",
    "mainEntity": {
      "@type": "Blog",
      "name": "The AI Chronicle",
      "description": "Expert insights on AI, business automation, and technology innovation",
      "publisher": {
        "@type": "Organization",
        "name": "Solvencia Industries"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://solvenciaindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://solvenciaindustries.com/blog"
        }
      ]
    }
  };

  return (
    <div className="pt-32">
      <SEOHead
        title="Blog - The AI Chronicle"
        description="Exclusive insights and thought leadership on the future of AI, crafted for discerning professionals. Expert analysis on business automation, AI trends, and technology innovation."
        canonical="https://solvenciaindustries.com/blog"
        keywords="AI blog, artificial intelligence insights, business automation trends, machine learning articles, AI thought leadership, technology innovation"
        schemaData={blogSchemaData}
      />

      {/* Hero Section - Removed background color to let animated background show through */}
      <section className="text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-royal-500 to-royal-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">The AI Chronicle</h1>
            <p class="text-xl text-gray-700 mb-10">
              Exclusive insights and thought leadership on the future of AI, crafted for discerning professionals.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-royal-500">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Article List */}
            <div className="space-y-12">
              {blogPosts.map((post, index) => (
                <article key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-semibold bg-royal-100 text-royal-800 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar size={12} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock size={12} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 hover:text-royal-500 transition-colors">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;