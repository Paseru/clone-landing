"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Code, Layers, Users, Star, CheckCircle2, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Waves } from "@/components/ui/waves-background";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Observer pour animations au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    // Effet magnétique pour les boutons
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Animated Waves Background */}
      <div className="fixed inset-0 -z-10">
        <Waves
          lineColor="rgba(29, 161, 242, 0.3)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      
      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/70 via-gray-50/60 to-white/70 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
      
      {/* Particules flottantes */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="particle fixed w-2 h-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 3}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl dark:bg-gray-950/80">
        <div className="container mx-auto px-4">
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center gap-2 group">
              <Sparkles className="h-5 w-5 text-primary transition-transform group-hover:rotate-180 duration-500" />
              <span className="text-lg font-semibold glitch">Innovate</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">Solutions</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">About</a>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="h-8 text-sm magnetic-button hover:scale-110 transition-transform">Sign In</Button>
              <Button size="sm" className="h-8 text-sm relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 gradient-border-animation opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative container mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 h-6 text-sm float-animation" variant="secondary">
            <Sparkles className="mr-1 h-3 w-3 animate-spin" />
            New: AI-Powered Features
          </Badge>
          <h1 className="mb-5 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            <span className="inline-block slide-in-up" style={{ animationDelay: '0.1s' }}>Build</span>{' '}
            <span className="inline-block slide-in-up" style={{ animationDelay: '0.2s' }}>the</span>{' '}
            <span className="inline-block slide-in-up neon-text" style={{ animationDelay: '0.3s' }}>Future</span>
            <span className="block text-shimmer mt-2">
              Transform Your Ideas
            </span>
          </h1>
          <p className="mb-8 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
            Create exceptional digital experiences with our cutting-edge platform.
            Ship faster, scale effortlessly, and innovate without limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="default" className="gap-2 h-10 text-base relative group overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Building <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
            <Button size="default" variant="outline" className="h-10 text-base rotating-border bg-background">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {[
            { label: "Active Users", value: "10M+", icon: Users },
            { label: "Projects Deployed", value: "500K+", icon: Globe },
            { label: "Uptime", value: "99.99%", icon: Shield },
            { label: "Customer Rating", value: "4.9/5", icon: Star },
          ].map((stat, i) => (
            <div key={i} className="text-center group hover:scale-110 transition-transform duration-300 cursor-pointer">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 scroll-reveal">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            Everything You Need to Succeed
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Powerful features designed to accelerate your development workflow
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Optimized performance with sub-second load times",
              color: "text-yellow-500",
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-grade encryption and compliance standards",
              color: "text-green-500",
            },
            {
              icon: Globe,
              title: "Global Scale",
              description: "Deploy to 30+ regions with automatic scaling",
              color: "text-blue-500",
            },
            {
              icon: Code,
              title: "Developer First",
              description: "Intuitive APIs and comprehensive docs",
              color: "text-purple-500",
            },
            {
              icon: Layers,
              title: "Modular Design",
              description: "Mix and match components as needed",
              color: "text-pink-500",
            },
            {
              icon: TrendingUp,
              title: "Analytics Built-in",
              description: "Real-time insights and metrics",
              color: "text-orange-500",
            },
          ].map((feature, i) => (
            <Card key={i} className="group glow-card hover-3d cursor-pointer">
              <CardHeader className="pb-4">
                <feature.icon className={`h-7 w-7 mb-2 ${feature.color} group-hover:scale-125 transition-transform duration-300`} />
                <CardTitle className="text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="container mx-auto px-4 py-16 scroll-reveal">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            Solutions for Every Team
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Whether you're a startup or enterprise, we have the right solution
          </p>
        </div>

        <Tabs defaultValue="startup" className="mx-auto max-w-3xl">
          <TabsList className="grid w-full grid-cols-3 h-10">
            <TabsTrigger value="startup" className="text-sm">Startups</TabsTrigger>
            <TabsTrigger value="business" className="text-sm">Business</TabsTrigger>
            <TabsTrigger value="enterprise" className="text-sm">Enterprise</TabsTrigger>
          </TabsList>
          <TabsContent value="startup" className="mt-5">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Built for Speed</CardTitle>
                <CardDescription className="text-sm">
                  Move fast and iterate quickly with our tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                {["Free tier up to 10K users", "One-click deployments", "Built-in A/B testing", "Community support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="business" className="mt-5">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Scale with Confidence</CardTitle>
                <CardDescription className="text-sm">
                  Professional tools for growing businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                {["Advanced analytics dashboard", "Priority support", "Custom integrations", "SLA guarantee"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="enterprise" className="mt-5">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Enterprise Excellence</CardTitle>
                <CardDescription className="text-sm">
                  Comprehensive solutions for large operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                {["Dedicated infrastructure", "24/7 phone support", "Custom contracts", "On-premise deployment"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16 scroll-reveal">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Choose the perfect plan for your needs. Always flexible to scale
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 max-w-4xl mx-auto">
          {[
            {
              name: "Starter",
              price: "$0",
              description: "Perfect for side projects",
              features: ["Up to 3 projects", "1GB storage", "Community support", "Basic analytics"],
              cta: "Start Free",
              variant: "outline" as const,
            },
            {
              name: "Pro",
              price: "$29",
              description: "For professional developers",
              features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domain"],
              cta: "Start Trial",
              variant: "default" as const,
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For large organizations",
              features: ["Everything in Pro", "Unlimited storage", "Dedicated support", "Custom integrations", "SLA"],
              cta: "Contact Sales",
              variant: "outline" as const,
            },
          ].map((plan, i) => (
            <Card key={i} className={`relative hover-3d ${plan.popular ? 'border-primary shadow-md glow-card' : ''} transition-all duration-300`}>
              {plan.popular && (
                <Badge className="absolute -top-2 right-4 h-6 text-xs" variant="default">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-3">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-sm text-gray-600 dark:text-gray-400">/month</span>}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-5">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-10 text-sm group relative overflow-hidden" variant={plan.variant}>
                  <span className="relative z-10">{plan.cta}</span>
                  {plan.popular && (
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 scroll-reveal">
        <Card className="gradient-border-animation text-white border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          <CardContent className="py-10 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
            <p className="mb-5 text-sm text-blue-100 max-w-xl mx-auto">
              Join thousands of developers building the next generation of applications
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="default" variant="secondary" className="gap-2 h-10 text-sm magnetic-button group">
                Start Building Today <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button size="default" variant="ghost" className="h-10 text-sm text-white hover:text-white hover:bg-white/20">
                Schedule a Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Innovate</span>
            </div>
            <div className="flex gap-5 text-xs text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Terms</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Privacy</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Contact</a>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              © 2024 Innovate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}