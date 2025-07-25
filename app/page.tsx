"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Briefcase, MessageSquare, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [stats] = useState({
    members: 80,
    resources: 150,
    jobPosts: 45,
    discussions: 200,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AIConnect</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#community" className="text-gray-600 hover:text-gray-900">
              Community
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Join Community</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            🚀 Growing Community of {stats.members}+ Members
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect, Learn & Grow in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              AI & Data Science
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join Africa's fastest-growing AI community. Share resources, discover opportunities, and connect with
            students and professionals shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent" asChild>
              <Link href="/dashboard">Explore Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.members}+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stats.resources}+</div>
              <div className="text-gray-600">Learning Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.jobPosts}+</div>
              <div className="text-gray-600">Job Opportunities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stats.discussions}+</div>
              <div className="text-gray-600">Discussions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From learning resources to job opportunities, we've got your AI journey covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Job Board</CardTitle>
                <CardDescription>
                  Discover AI and Data Science opportunities from top companies and startups.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Remote and on-site positions</li>
                  <li>• Internship opportunities</li>
                  <li>• Freelance projects</li>
                  <li>• Career guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Resource Library</CardTitle>
                <CardDescription>Access curated learning materials, tutorials, and research papers.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Video tutorials</li>
                  <li>• Research papers</li>
                  <li>• Code repositories</li>
                  <li>• Course recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Discussion Forums</CardTitle>
                <CardDescription>Engage in meaningful conversations with peers and industry experts.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Technical discussions</li>
                  <li>• Project collaborations</li>
                  <li>• Q&A sessions</li>
                  <li>• Industry insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Networking</CardTitle>
                <CardDescription>Connect with students, professionals, and industry leaders.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Professional profiles</li>
                  <li>• Mentorship programs</li>
                  <li>• Study groups</li>
                  <li>• Industry events</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Real-time Updates</CardTitle>
                <CardDescription>Stay updated with instant notifications and live discussions.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Live notifications</li>
                  <li>• Real-time chat</li>
                  <li>• Activity feeds</li>
                  <li>• Event reminders</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>Enhanced features through third-party integrations like Afriker.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Job aggregation</li>
                  <li>• Skill assessments</li>
                  <li>• Market insights</li>
                  <li>• Career analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            From university students to industry professionals, our community is helping members land jobs, learn new
            skills, and build amazing projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/signup">Join Now - It's Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold">AIConnect</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of AI and Data Science professionals across Africa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/jobs" className="hover:text-white">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/forums" className="hover:text-white">
                    Forums
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="hover:text-white">
                    Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AIConnect. Built with ❤️ for the AI community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
