"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
import { Activity, CreditCard, DollarSign, Users, TrendingUp, Package, ShoppingCart, ArrowUpRight, ArrowDownRight, Menu, Search, Bell } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

// Données pour les graphiques
const revenueData = [
  { month: "Jan", revenue: 4000, profit: 2400 },
  { month: "Fév", revenue: 3000, profit: 1398 },
  { month: "Mar", revenue: 2000, profit: 9800 },
  { month: "Avr", revenue: 2780, profit: 3908 },
  { month: "Mai", revenue: 1890, profit: 4800 },
  { month: "Juin", revenue: 2390, profit: 3800 },
  { month: "Juil", revenue: 3490, profit: 4300 },
]

const salesData = [
  { name: "Lun", sales: 240 },
  { name: "Mar", sales: 139 },
  { name: "Mer", sales: 980 },
  { name: "Jeu", sales: 390 },
  { name: "Ven", sales: 480 },
  { name: "Sam", sales: 380 },
  { name: "Dim", sales: 430 },
]

const pieData = [
  { name: "Desktop", value: 400, color: "#0088FE" },
  { name: "Mobile", value: 300, color: "#00C49F" },
  { name: "Tablet", value: 200, color: "#FFBB28" },
  { name: "Other", value: 100, color: "#FF8042" },
]

const activityData = [
  { time: "00:00", users: 200 },
  { time: "04:00", users: 150 },
  { time: "08:00", users: 450 },
  { time: "12:00", users: 680 },
  { time: "16:00", users: 540 },
  { time: "20:00", users: 380 },
  { time: "23:59", users: 220 },
]

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[55px] lg:px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Accueil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="w-[150px] pl-8 sm:w-[250px] lg:w-[300px] h-8 text-xs"
              />
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="h-3.5 w-3.5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </header>
        <div className="flex-1 space-y-4 p-4 lg:p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">Dernière mise à jour: il y a 2 min</span>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="analytics">Analytiques</TabsTrigger>
          <TabsTrigger value="reports">Rapports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          {/* Cartes de métriques */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-medium">
                  Revenu Total
                </CardTitle>
                <DollarSign className="h-3 w-3 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">€45,231.89</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  +20.1% par rapport au mois dernier
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-medium">
                  Utilisateurs
                </CardTitle>
                <Users className="h-3 w-3 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  +180.1% par rapport au mois dernier
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-medium">
                  Ventes
                </CardTitle>
                <CreditCard className="h-3 w-3 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  +19% par rapport au mois dernier
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-medium">
                  Taux de Conversion
                </CardTitle>
                <Activity className="h-3 w-3 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                  -4.3% par rapport au mois dernier
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Graphiques principaux */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm">Aperçu des Revenus</CardTitle>
                <CardDescription className="text-xs">
                  Évolution mensuelle des revenus et profits
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorRevenue)" />
                      <Area type="monotone" dataKey="profit" stroke="#82ca9d" fillOpacity={1} fill="url(#colorProfit)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm">Ventes Hebdomadaires</CardTitle>
                <CardDescription className="text-xs">
                  Performance des ventes cette semaine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip />
                      <Bar dataKey="sales" fill="#8884d8" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Graphiques secondaires */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm">Répartition par Appareil</CardTitle>
                <CardDescription className="text-xs">
                  Sources de trafic par type d'appareil
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-1">
                  {pieData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-xs">{item.name}</span>
                      </div>
                      <span className="text-xs font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm">Activité Utilisateurs</CardTitle>
                <CardDescription className="text-xs">
                  Nombre d'utilisateurs actifs par heure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="time" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="users" 
                        stroke="#8884d8" 
                        strokeWidth={2}
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm">Métriques Clés</CardTitle>
                <CardDescription className="text-xs">
                  Performance globale du mois
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Package className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">Produits vendus</span>
                  </div>
                  <span className="text-xs font-bold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">Panier moyen</span>
                  </div>
                  <span className="text-xs font-bold">€89.50</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">Croissance</span>
                  </div>
                  <span className="text-xs font-bold text-green-500">+12.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">Nouveaux clients</span>
                  </div>
                  <span className="text-xs font-bold">456</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">Taux de rétention</span>
                  </div>
                  <span className="text-xs font-bold">87.3%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytiques Détaillées</CardTitle>
              <CardDescription>
                Analyse approfondie des performances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Section analytiques - Contenu à venir...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rapports</CardTitle>
              <CardDescription>
                Génération et export de rapports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Section rapports - Contenu à venir...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
      </SidebarInset>
    </SidebarProvider>
  )
}