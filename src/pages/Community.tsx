import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Shield, 
  ArrowLeft, 
  Search, 
  MessageCircle, 
  Heart, 
  Share, 
  Flag, 
  Plus,
  Filter,
  User,
  Clock,
  Eye,
  ThumbsUp,
  MessageSquare,
  Lock,
  Globe,
  Users as UsersIcon
} from "lucide-react";

// Mock data for community posts
const initialPosts = [
  {
    id: 1,
    title: "How to secure your social media accounts",
    content: "I've been implementing these security measures and they've made a huge difference in feeling safer online. Would love to hear what others are doing!",
    author: "Safety Advocate",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    views: 156,
    category: "digital-safety",
    isPinned: true,
    tags: ["privacy", "social-media", "security"]
  },
  {
    id: 2,
    title: "Dealing with online harassment - support group",
    content: "Creating a safe space for anyone experiencing online harassment. You're not alone, and we're here to support each other.",
    author: "Community Moderator",
    timestamp: "1 day ago",
    likes: 42,
    comments: 15,
    views: 289,
    category: "support",
    isPinned: true,
    tags: ["support", "harassment", "mental-health"]
  },
  {
    id: 3,
    title: "Success story: How I reported and got help",
    content: "I wanted to share my positive experience using the reporting system. The support team was incredible and helped me through the entire process.",
    author: "Anonymous User",
    timestamp: "3 days ago",
    likes: 67,
    comments: 12,
    views: 342,
    category: "success-stories",
    isPinned: false,
    tags: ["success", "reporting", "support"]
  },
  {
    id: 4,
    title: "Digital safety resources for beginners",
    content: "Compiled a list of essential digital safety resources that have helped me feel more secure online. Happy to add more suggestions!",
    author: "Digital Guardian",
    timestamp: "5 days ago",
    likes: 31,
    comments: 6,
    views: 198,
    category: "resources",
    isPinned: false,
    tags: ["resources", "beginners", "education"]
  }
];

const categories = [
  { id: "all", name: "All Topics", icon: Globe, count: 45 },
  { id: "digital-safety", name: "Digital Safety", icon: Shield, count: 12 },
  { id: "support", name: "Support", icon: Users, count: 18 },
  { id: "success-stories", name: "Success Stories", icon: Heart, count: 8 },
  { id: "resources", name: "Resources", icon: MessageCircle, count: 7 }
];

const Community = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState("latest");

  // Filter posts based on category and search
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort posts based on active filter
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (activeFilter) {
      case "popular":
        return (b.likes + b.comments) - (a.likes + a.comments);
      case "trending":
        return b.views - a.views;
      case "latest":
      default:
        return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
        setPosts(current => current.map(post => 
          post.id === postId ? { ...post, likes: post.likes - 1 } : post
        ));
      } else {
        newLiked.add(postId);
        setPosts(current => current.map(post => 
          post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ));
      }
      return newLiked;
    });
  };

  const handleCreatePost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const post = {
        id: posts.length + 1,
        title: newPost.title,
        content: newPost.content,
        author: "You",
        timestamp: "Just now",
        likes: 0,
        comments: 0,
        views: 0,
        category: "support",
        isPinned: false,
        tags: ["new"]
      };
      setPosts([post, ...posts]);
      setNewPost({ title: "", content: "" });
      setIsCreatingPost(false);
    }
  };

  const handleReportPost = (postId) => {
    // In a real app, this would send a report to moderators
    alert("Thank you for reporting. Our moderation team will review this content.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div className="flex items-center gap-2">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <h1 className="text-xl font-bold">Safe Community</h1>
                  <p className="text-sm text-muted-foreground">Connect, share, and support</p>
                </div>
              </div>
            </div>
            <Button 
              onClick={() => setIsCreatingPost(true)}
              className="bg-primary hover:bg-primary/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Community Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <UsersIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">1.2K+</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">456</div>
                <div className="text-sm text-muted-foreground">Discussions</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">2.3K</div>
                <div className="text-sm text-muted-foreground">Support Given</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Moderation</div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                          selectedCategory === category.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4" />
                          <span>{category.name}</span>
                        </div>
                        <Badge variant="secondary" className={
                          selectedCategory === category.id 
                            ? "bg-primary-foreground/20 text-primary-foreground"
                            : ""
                        }>
                          {category.count}
                        </Badge>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Safety Guidelines */}
              <Card className="mt-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-200">
                    <Shield className="w-5 h-5" />
                    Community Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Be respectful and supportive of others</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>No sharing of personal information</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>AI-powered moderation protects everyone</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Report any concerning content immediately</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Filters */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search discussions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={activeFilter === "latest" ? "default" : "outline"}
                        onClick={() => setActiveFilter("latest")}
                        size="sm"
                      >
                        Latest
                      </Button>
                      <Button
                        variant={activeFilter === "popular" ? "default" : "outline"}
                        onClick={() => setActiveFilter("popular")}
                        size="sm"
                      >
                        Popular
                      </Button>
                      <Button
                        variant={activeFilter === "trending" ? "default" : "outline"}
                        onClick={() => setActiveFilter("trending")}
                        size="sm"
                      >
                        Trending
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Create Post Modal */}
              <AnimatePresence>
                {isCreatingPost && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl"
                    >
                      <h3 className="text-lg font-semibold mb-4">Create New Post</h3>
                      <div className="space-y-4">
                        <Input
                          placeholder="Post title..."
                          value={newPost.title}
                          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        />
                        <Textarea
                          placeholder="Share your thoughts, questions, or experiences..."
                          value={newPost.content}
                          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                          rows={6}
                        />
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="outline"
                            onClick={() => setIsCreatingPost(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleCreatePost}
                            disabled={!newPost.title.trim() || !newPost.content.trim()}
                          >
                            Post to Community
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Posts List */}
              <div className="space-y-4">
                <AnimatePresence>
                  {sortedPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className={`hover:shadow-md transition-shadow ${
                        post.isPinned ? 'border-l-4 border-l-primary' : ''
                      }`}>
                        <CardContent className="p-6">
                          {post.isPinned && (
                            <Badge className="mb-3" variant="secondary">
                              Pinned
                            </Badge>
                          )}
                          
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold cursor-pointer hover:text-primary">
                              {post.title}
                            </h3>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleReportPost(post.id)}
                            >
                              <Flag className="w-4 h-4" />
                            </Button>
                          </div>

                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {post.content}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Post Stats and Actions */}
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-4 text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.timestamp}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                <span>{post.views}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleLike(post.id)}
                                className={`flex items-center gap-1 ${
                                  likedPosts.has(post.id) ? 'text-red-500' : ''
                                }`}
                              >
                                <ThumbsUp className="w-4 h-4" />
                                <span>{post.likes}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                <span>{post.comments}</span>
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Share className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {sortedPosts.length === 0 && (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No discussions found</h3>
                      <p className="text-muted-foreground mb-4">
                        {searchQuery 
                          ? "Try adjusting your search terms" 
                          : "Be the first to start a discussion in this category"
                        }
                      </p>
                      <Button onClick={() => setIsCreatingPost(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        Start a Discussion
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;