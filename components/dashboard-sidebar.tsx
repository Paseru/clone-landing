"use client"

import * as React from "react"
import {
  BarChart3,
  Bot,
  ChevronRight,
  Command,
  Frame,
  Home,
  LayoutDashboard,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  TrendingUp,
  Users2,
  Package,
  ShoppingCart,
  FileText,
  Calendar,
  Bell,
  Search,
  Moon,
  Sun,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

// Données de navigation principale
const navMainData = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
    items: [
      {
        title: "Vue d'ensemble",
        url: "#",
      },
      {
        title: "Rapports",
        url: "#",
      },
      {
        title: "Métriques",
        url: "#",
      },
    ],
  },
  {
    title: "Ventes",
    url: "#",
    icon: ShoppingCart,
    items: [
      {
        title: "Commandes",
        url: "#",
      },
      {
        title: "Produits",
        url: "#",
      },
      {
        title: "Clients",
        url: "#",
      },
      {
        title: "Factures",
        url: "#",
      },
    ],
  },
  {
    title: "Utilisateurs",
    url: "#",
    icon: Users2,
    items: [
      {
        title: "Liste",
        url: "#",
      },
      {
        title: "Permissions",
        url: "#",
      },
      {
        title: "Activité",
        url: "#",
      },
    ],
  },
  {
    title: "Inventaire",
    url: "#",
    icon: Package,
    items: [
      {
        title: "Stock",
        url: "#",
      },
      {
        title: "Fournisseurs",
        url: "#",
      },
      {
        title: "Catégories",
        url: "#",
      },
    ],
  },
  {
    title: "Rapports",
    url: "#",
    icon: FileText,
    items: [
      {
        title: "Mensuel",
        url: "#",
      },
      {
        title: "Trimestriel",
        url: "#",
      },
      {
        title: "Annuel",
        url: "#",
      },
    ],
  },
  {
    title: "Calendrier",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Paramètres",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "Général",
        url: "#",
      },
      {
        title: "Sécurité",
        url: "#",
      },
      {
        title: "Intégrations",
        url: "#",
      },
      {
        title: "Notifications",
        url: "#",
      },
    ],
  },
]

// Données des projets
const projectsData = [
  {
    name: "Projet Alpha",
    url: "#",
    icon: Frame,
  },
  {
    name: "Projet Beta",
    url: "#",
    icon: PieChart,
  },
  {
    name: "Projet Gamma",
    url: "#",
    icon: Map,
  },
]

// Données utilisateur
const userData = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/avatars/user.jpg",
}

// Données des équipes
const teamsData = [
  {
    name: "Acme Corp",
    logo: Command,
    plan: "Enterprise",
  },
  {
    name: "Tech Solutions",
    logo: Bot,
    plan: "Startup",
  },
  {
    name: "Digital Agency",
    logo: SquareTerminal,
    plan: "Free",
  },
]

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme()
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teamsData} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainData} />
        <NavProjects projects={projectsData} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full justify-start"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span>{theme === "dark" ? "Mode clair" : "Mode sombre"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}