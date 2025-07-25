"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, User, Mail, Lock, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    institution: "",
    bio: "",
    skills: "",
    agreeToTerms: false,
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsLoading(false)

    // Redirect to dashboard or login
    window.location.href = "/dashboard"
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">AIConnect</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Community</h1>
            <p className="text-gray-600">Connect with AI and Data Science professionals worldwide</p>
          </div>
        </div>

        {/* Signup Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Create Your Account
            </CardTitle>
            <CardDescription>Fill in your details to join the AIConnect community</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="researcher">Researcher</SelectItem>
                    <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Institution */}
              <div className="space-y-2">
                <Label htmlFor="institution">Institution/Company</Label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="institution"
                    type="text"
                    placeholder="University of XYZ / Company Name"
                    className="pl-10"
                    value={formData.institution}
                    onChange={(e) => handleInputChange("institution", e.target.value)}
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio">Bio (Optional)</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself, your interests in AI/Data Science..."
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                />
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <Label htmlFor="skills">Skills/Interests</Label>
                <Input
                  id="skills"
                  type="text"
                  placeholder="Python, Machine Learning, Deep Learning, NLP..."
                  value={formData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                />
              </div>

              {/* Terms Agreement */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading || !formData.agreeToTerms}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
