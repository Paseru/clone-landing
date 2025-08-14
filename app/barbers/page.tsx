"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Award, Briefcase, Users, BookOpen, ShoppingBag, Shield, MessageCircle, TrendingUp, Globe, Calendar, Moon, Sun, ChevronDown, Star } from "lucide-react"

export default function BarbersPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground">
        {/* Top Bar */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white py-2 px-4 text-sm">
          <div className="container mx-auto flex justify-between items-center">
            <nav className="flex gap-6">
              <Link href="/barbers" className="hover:text-blue-400 transition">HOME</Link>
              <Link href="#membership" className="hover:text-blue-400 transition">MEMBERSHIP</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-blue-400 transition flex items-center gap-1">
                  ABA <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>About ABA</DropdownMenuItem>
                  <DropdownMenuItem>Certification</DropdownMenuItem>
                  <DropdownMenuItem>Benefits</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-blue-400 transition flex items-center gap-1">
                  IBA <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>International Network</DropdownMenuItem>
                  <DropdownMenuItem>Global Events</DropdownMenuItem>
                  <DropdownMenuItem>Resources</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="#standard" className="hover:text-blue-400 transition">INDUSTRY STANDARD</Link>
            </nav>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4" />
                <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                <Moon className="h-4 w-4" />
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                Log in
              </Button>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                Join Today!
              </Button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image 
                  src="/barbers-images/logo.png" 
                  alt="Barbers World" 
                  width={50} 
                  height={50}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-slate-900 dark:text-white">BARBERS WORLD</span>
              </div>
              
              <NavigationMenu>
                <NavigationMenuList className="flex gap-6">
                  <NavigationMenuItem>
                    <Link href="#certification" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                      Certification Center
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#marketplace" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                      Marketplace
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#connected" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                      Get Connected
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                      Business
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-48 p-4">
                        <Link href="#" className="block py-2 hover:text-blue-600">Business Growth</Link>
                        <Link href="#" className="block py-2 hover:text-blue-600">Insurance</Link>
                        <Link href="#" className="block py-2 hover:text-blue-600">Capital Access</Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#community" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                      Community
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#events" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                      Events & Resources
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#involved" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                      Get Involved
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-32">
          <div className="absolute inset-0 bg-[url('/barbers-images/barbershop.png')] opacity-10 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge className="mb-4 bg-blue-600 text-white">
              ✨ New: AI-Powered Features
            </Badge>
            <h1 className="text-6xl font-bold mb-4">
              The Future of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Barbering is Here
              </span>
            </h1>
            <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
              Get certified, grow your business, and connect with peers, all in one place with America's leading barbering platform.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started →
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                How It Works
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
              Your journey to success in the barbering industry starts here
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute top-4 right-4 text-6xl font-bold text-slate-100 dark:text-slate-800">1</div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    Create Your Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Register as a barber or barbershop and personalize your dashboard to showcase your skills and services.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute top-4 right-4 text-6xl font-bold text-slate-100 dark:text-slate-800">2</div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    Get Certified or Connected
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Earn industry-recognized certifications, discover booth opportunities, and connect with barbershops across the nation.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute top-4 right-4 text-6xl font-bold text-slate-100 dark:text-slate-800">3</div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    Grow With Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Access exclusive tools, participate in events, and expand your professional network nationwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Platform Features Grid */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Explore Our Platform</h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
              Unlock the tools, resources, and connections you need to thrive in today's barbering industry.
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Image src="/barbers-images/certification.png" alt="Certification" width={60} height={60} className="mb-2" />
                  <CardTitle className="text-lg">ABA Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Set yourself apart with official ABA certification, showcasing your expertise.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Shield className="h-12 w-12 text-green-600 mb-2" />
                  <CardTitle className="text-lg">BarberSafe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Demonstrate safety, quality, and reliability that clients look for and respect!
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Image src="/barbers-images/tools.png" alt="Booth Rental" width={60} height={60} className="mb-2" />
                  <CardTitle className="text-lg">Booth Rental</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Find a booth to lease or lease your booth to qualified professionals.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Globe className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">World Directory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Be listed in the exclusive listing of the best barbers worldwide!
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-purple-600 mb-2" />
                  <CardTitle className="text-lg">Support Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Get your questions answered and learn about available benefits.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Image src="/barbers-images/insurance.png" alt="Insurance" width={60} height={60} className="mb-2" />
                  <CardTitle className="text-lg">Business Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Sign up for essential coverage including General Liability and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Users className="h-12 w-12 text-orange-600 mb-2" />
                  <CardTitle className="text-lg">Community Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Connect with fellow barbers and share insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Briefcase className="h-12 w-12 text-teal-600 mb-2" />
                  <CardTitle className="text-lg">Business Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Get assistance to access capital and grow your business.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <ShoppingBag className="h-12 w-12 text-pink-600 mb-2" />
                  <CardTitle className="text-lg">Marketplace</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Shop premium barber tools and supplies from trusted vendors.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Image src="/barbers-images/networking.png" alt="Network" width={60} height={60} className="mb-2" />
                  <CardTitle className="text-lg">State Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Access State Barber Associations and licensing info.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-red-600 mb-2" />
                  <CardTitle className="text-lg">Media Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    News, trends, and stories shaping the barber industry.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-indigo-600 mb-2" />
                  <CardTitle className="text-lg">Events & Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Discover barbering events, expos, and trainings.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" className="mr-4">
                Explore Membership Benefits
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Join Now →
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">
              Trusted by Barbers and Clients Nationwide
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
              See what our community has to say about their experience with Barbers World
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    "Barbers World has transformed how I manage my business and connect with clients."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=400" />
                      <AvatarFallback>JW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">James Wilson</p>
                      <p className="text-sm text-slate-500">Master Barber</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    "The certification tracking and booth management features are game-changers."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Sarah Chen</p>
                      <p className="text-sm text-slate-500">Shop Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    "Found my dream booth and doubled my client base through the platform."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Marcus Rodriguez</p>
                      <p className="text-sm text-slate-500">Independent Barber</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
              Find answers to the most common questions about our services and membership
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the ABA and how does it support barbers?</AccordionTrigger>
                <AccordionContent>
                  The American Barber Association (ABA) is the leading professional organization dedicated to advancing the barbering industry through certification, education, business support, and community connection. We provide resources, networking opportunities, and professional development to help barbers succeed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I become ABA Certified?</AccordionTrigger>
                <AccordionContent>
                  To become ABA Certified, you need to register on our platform, complete the required training modules, and pass the certification examination. The process typically takes 2-4 weeks depending on your pace. Once certified, you'll receive official credentials and be listed in our professional directory.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it free to list my barbershop?</AccordionTrigger>
                <AccordionContent>
                  Basic listings are free for all registered barbershops. Premium listings with enhanced features, priority placement, and additional marketing tools are available through our membership plans. You can start with a free listing and upgrade anytime.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What is BarberSafe Certification?</AccordionTrigger>
                <AccordionContent>
                  BarberSafe Certification is our comprehensive safety and hygiene certification program. It demonstrates your commitment to maintaining the highest standards of cleanliness, safety, and professional practice. This certification is increasingly required by insurance providers and valued by clients.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Why Choose Barber's World</h2>
            <p className="text-center text-slate-300 mb-12">
              The complete platform built for modern barbering professionals
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Award className="h-12 w-12 text-yellow-400 mb-2" />
                  <CardTitle>Nationally Recognized</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Industry-leading certifications trusted nationwide
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-green-400 mb-2" />
                  <CardTitle>Business Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Complete toolkit for barber business success
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-400 mb-2" />
                  <CardTitle>Active Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Connect with top professionals nationwide
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-purple-400 mb-2" />
                  <CardTitle>Premium Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Access exclusive training and materials
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-4">10,000+ Barbers Joined in 2024!</h2>
            <h3 className="text-3xl mb-4">Ready to Transform Your Barbering Career?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of professionals already growing with Barbers World
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                Join Barbers World Today
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Still exploring? View Membership Benefits
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="#" className="hover:text-white">About</Link></li>
                  <li><Link href="#" className="hover:text-white">Join</Link></li>
                  <li><Link href="#" className="hover:text-white">BarberSafe</Link></li>
                  <li><Link href="#" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="#" className="hover:text-white">Certifications</Link></li>
                  <li><Link href="#" className="hover:text-white">Network</Link></li>
                  <li><Link href="#" className="hover:text-white">Shop</Link></li>
                  <li><Link href="#" className="hover:text-white">Support</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                    <Globe className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400">
                  Barber's World is a platform powered by the American Barber Association, 
                  the International Barber Association, Barbers United and Develop America Ventures, Inc.
                </p>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2024 American Barber Association. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm text-slate-400">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}