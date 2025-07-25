"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Bell,
  Search,
  Plus,
  Briefcase,
  BookOpen,
  MessageSquare,
  Users,
  TrendingUp,
  MapPin,
  Clock,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Filter,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [user] = useState({
    name: "John Doe",
    role: "Data Science Student",
    avatar: "/placeholder.svg?height=40&width=40",
    institution: "University of Technology",
  })

  const [stats] = useState({
    jobs: 45,
    resources: 150,
    discussions: 89,
    members: 80,
  })

  const [jobs] = useState([
    {
      id: 1,
      title: "Machine Learning Engineer",
      company: "TechCorp Africa",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "$60,000 - $80,000",
      posted: "2 days ago",
      tags: ["Python", "TensorFlow", "AWS"],
    },
    {
      id: 2,
      title: "Data Scientist Intern",
      company: "StartupXYZ",
      location: "Remote",
      type: "Internship",
      salary: "$2,000/month",
      posted: "1 week ago",
      tags: ["R", "SQL", "Tableau"],
    },
    {
      id: 3,
      title: "AI Research Assistant",
      company: "University Research Lab",
      location: "Nairobi, Kenya",
      type: "Part-time",
      salary: "$25/hour",
      posted: "3 days ago",
      tags: ["PyTorch", "NLP", "Research"],
    },
  ])

  const [resources] = useState([
    {
      id: 1,
      title: "Complete Machine Learning Course",
      type: "Video Course",
      author: "Dr. Sarah Johnson",
      duration: "12 hours",
      rating: 4.8,
      tags: ["Beginner", "Python", "Scikit-learn"],
      likes: 234,
    },
    {
      id: 2,
      title: "Deep Learning Research Papers Collection",
      type: "PDF Collection",
      author: "AI Research Group",
      duration: "50 papers",
      rating: 4.9,
      tags: ["Advanced", "Research", "Neural Networks"],
      likes: 189,
    },
    {
      id: 3,
      title: "Data Visualization with D3.js",
      type: "Interactive Tutorial",
      author: "Mike Chen",
      duration: "8 hours",
      rating: 4.7,
      tags: ["JavaScript", "Visualization", "Web Dev"],
      likes: 156,
    },
  ])

  const [discussions] = useState([
    {
      id: 1,
      title: "Best practices for feature engineering in time series?",
      author: "Alice Wanjiku",
      replies: 12,
      lastActivity: "2 hours ago",
      tags: ["Time Series", "Feature Engineering"],
      isAnswered: true,
    },
    {
      id: 2,
      title: "Seeking collaborators for NLP project on African languages",
      author: "David Okonkwo",
      replies: 8,
      lastActivity: "4 hours ago",
      tags: ["NLP", "Collaboration", "African Languages"],
      isAnswered: false,
    },
    {
      id: 3,
      title: "How to transition from academia to industry?",
      author: "Maria Santos",
      replies: 25,
      lastActivity: "1 day ago",
      tags: ["Career", "Industry", "Advice"],
      isAnswered: true,
    },
  ])

  const [notifications] = useState([
    { id: 1, message: "New job posted: Senior Data Analyst at FinTech Co.", time: "5 min ago", unread: true },
    { id: 2, message: "Your post received 3 new replies", time: "1 hour ago", unread: true },
    { id: 3, message: "Weekly AI newsletter is now available", time: "2 hours ago", unread: false },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold text-gray-900">AIConnect</span>
              </Link>
              <div className="hidden md:flex items-center space-x-1">
                <Button variant="ghost" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending
                </Button>
                <Button variant="ghost" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Events
                </Button>
              </div>
            </div>

            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search jobs, resources, discussions..." className="pl-10" />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                {notifications.filter((n) => n.unread).length > 0 && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name.split(" ")[0]}! 👋</h1>
          <p className="text-gray-600">Here's what's happening in the AI community today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{stats.jobs}</p>
                  <p className="text-sm text-gray-600">Active Jobs</p>
                </div>
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-purple-600">{stats.resources}</p>
                  <p className="text-sm text-gray-600">Resources</p>
                </div>
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-600">{stats.discussions}</p>
                  <p className="text-sm text-gray-600">Discussions</p>
                </div>
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-orange-600">{stats.members}</p>
                  <p className="text-sm text-gray-600">Members</p>
                </div>
                <Users className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="jobs">Jobs</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="discussions">Forums</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Create Post
              </Button>
            </div>
          </div>

          {/* Jobs Tab */}
          <TabsContent value="jobs" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Latest Job Opportunities</h2>
              <Button variant="outline" asChild>
                <Link href="/jobs">View All Jobs</Link>
              </Button>
            </div>
            <div className="grid gap-4">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <p className="text-gray-600 mb-2">{job.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.posted}
                          </span>
                          <Badge variant="secondary">{job.type}</Badge>
                        </div>
                        <p className="text-green-600 font-medium mb-3">{job.salary}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm">
                          Apply Now
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Learning Resources</h2>
              <Button variant="outline" asChild>
                <Link href="/resources">Browse All Resources</Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary">{resource.type}</Badge>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{resource.likes}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-2">by {resource.author}</p>
                    <p className="text-sm text-gray-500 mb-3">{resource.duration}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium">{resource.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        View Resource
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Community Discussions</h2>
              <Button variant="outline" asChild>
                <Link href="/forums">View All Discussions</Link>
              </Button>
            </div>
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{discussion.title}</h3>
                          {discussion.isAnswered && <Badge className="bg-green-100 text-green-800">Answered</Badge>}
                        </div>
                        <p className="text-gray-600 mb-3">by {discussion.author}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {discussion.replies} replies
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {discussion.lastActivity}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {discussion.tags.map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Join Discussion
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Network Tab */}
          <TabsContent value="network" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Network</h2>
              <Button variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Find People
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarImage src={`/placeholder.svg?height=64&width=64&query=user-${i}`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-gray-900 mb-1">User {i}</h3>
                    <p className="text-sm text-gray-600 mb-2">AI Researcher</p>
                    <p className="text-xs text-gray-500 mb-4">University of Tech</p>
                    <Button size="sm" className="w-full">
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
